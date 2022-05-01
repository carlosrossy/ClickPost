import React, {useState, useEffect} from 'react';

import HeaderPages from '../../components/HeaderPages';
import { Button } from '../../components/Button';

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

export function NewPost(){
    const[title, setTitle] = useState('')
    const[content, setContent] = useState('')

    return(
        <Container>
            <HeaderPages title='Novo Post'/>

            <Main>
                <Title>Título</Title>
                <Input 
                placeholder="Digite o título do post"
                placeholderTextColor={theme.colors.primary}
                
                onChangeText={setTitle}
                />

                <Title>Usuário</Title>
                <Input 
                placeholder="Digite o seu Nome de Usuário"
                placeholderTextColor={theme.colors.primary}
                
                onChangeText={setTitle}
                />

                <Title>Conteúdo</Title>
                <AreaText>
                    <InputContent
                        placeholder="Digite o conteúdo do post aqui..."
                        maxLength={220}
                        multiline
                        autoCorrect={false}

                        onChangeText={setContent}

                    />
               </AreaText>

               <ViewWarning>
                    {
                       ( title === '' || content === '') &&
                            <Warning>Os campos não podem ser vazio</Warning>
                    }
               </ViewWarning>
                
               <ContainerButton>
                    <Button title="Postar" />
                </ContainerButton>

            </Main>
        </Container>
    )
}