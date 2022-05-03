import React, {useState, useEffect} from 'react';

import HeaderPages from '../../components/HeaderPages';
import { Button } from '../../components/Button';
import uuid from 'react-native-uuid';
import {usePostStorage} from '../../hooks/post'

import {
    Container,
    Main,
    Title,
    Input,
    AreaText,
    InputContent,
    ContainerButton,
    ViewWarning,
    Warning,
} from './styles'

import theme from '../../global/style/theme';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface PropsNewPost {
    id: string;
    title:string;
    username:string;
    content:string;
}

export function NewPost(){
    const[title, setTitle] = useState('')
    const[content, setContent] = useState('')
    const[username, setuserName] = useState('')

    const {newPostStorage} = usePostStorage()

   async function handleNewPost(){
        const id = uuid.v4()

        const newData = {
            id,
            title,
            username,
            content,
        }

    

        newPostStorage(newData)
        setTitle('')
        setContent('')
        setuserName('')
        console.log(newData)
    }

    return(
        <Container>
            <ScrollView showsHorizontalScrollIndicator = {true}>
            <HeaderPages title='Novo Post'/>

            <Main>
                

                <Title>Título</Title>
                <Input 
                placeholder="Digite o título do post"
                placeholderTextColor={theme.colors.user}
                
                onChangeText={setTitle}
                value={title}
                />

                <Title>UserName</Title>
                <Input 
                placeholder="Digite o seu nome de usuario"
                placeholderTextColor={theme.colors.user}
                
                onChangeText={setuserName}
                value={username}
                />

                <Title>Conteúdo</Title>
                <AreaText>
                    <InputContent
                        placeholder="Digite o conteúdo do post aqui..."
                        maxLength={220}
                        multiline
                        autoCorrect={false}

                        onChangeText={setContent}
                        value={content}
                    />
               </AreaText>

               <ViewWarning>
                    {
                       ( title === '' || content === '') &&
                            <Warning>Os campos não podem ser vazio</Warning>
                    }
               </ViewWarning>
                
               <ContainerButton>
                    <Button title="Postar" onPress={handleNewPost}/>
                </ContainerButton>

            </Main> 
            </ScrollView>
        </Container>
    )
}