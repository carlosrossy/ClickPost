import React, {useState, useEffect} from 'react';

import HeaderPages from '../../components/HeaderPages';
import { Button } from '../../components/Button';
import uuid from 'react-native-uuid';
import ModalConfirmationPost from '../../components/ModalConfirmationPost';
import { useNavigation } from '@react-navigation/native';

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

export interface PropsNewPost {
    id: number;
    title:string;
    username:string;
    content:string;
}

export function NewPost(){
    const[title, setTitle] = useState('')
    const[content, setContent] = useState('')
    const[username, setuserName] = useState('')

    const [openModalConfirmationPost, setOpenModalConfirmationPost] = useState(false);

    const navigator = useNavigation();

    const {newPostStorage} = usePostStorage()

   async function handleNewPost(){
        const id = Math.floor(Math.random() * (10 - 1 + 1) + 1);

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
        setOpenModalConfirmationPost(true)
    }

    function CloseMOdal (){
        setOpenModalConfirmationPost(false)
        navigator.navigate("UserPost")
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
                    <Button title="Postar"  onPress={handleNewPost}/>
                </ContainerButton>

            </Main> 
            </ScrollView>

            <ModalConfirmationPost onClose={CloseMOdal} visible = {openModalConfirmationPost}/>
        </Container>
    )
}