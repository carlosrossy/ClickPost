import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { PostDTO } from '../../dtos/postDTO';

import {
    Container,
    Header,
    Title,
    NameButton,
    Name,
    Content,
} from './styles'
import { PropsNewPost } from '../../screens/NewPost';

interface Props {
    data?: PostDTO;
    dataPostUser? :PropsNewPost;
    typePage:'home' | 'postUser'
}

export default function Post({data, dataPostUser,typePage}: Props){

    const navigation = useNavigation()

    function handlerInformation (){
        navigation.navigate('InformationUser' ,{
            id:data?.userId
        })
    }
    return (

        <Container>
            <Header>
                <Title>{typePage === 'home' ? data?.title : dataPostUser?.title}</Title>

                <NameButton onPress={handlerInformation} >
                    <Name>carlos</Name>
                </NameButton>
            </Header>
            
            <Content>
                {typePage === 'home' ? data?.body : dataPostUser?.content}
            </Content>
        </Container>
    )
}
