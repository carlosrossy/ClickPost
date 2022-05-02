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

interface Props {
    data: PostDTO;
}

export default function Post({data}: Props){

    const navigation = useNavigation()

    function handlerInformation (){
        navigation.navigate('InformationUser' ,{
            id:data.userId
        })
    }
    return (

        <Container>
            <Header>
                <Title>{data.title}</Title>

                <NameButton onPress={handlerInformation} >
                    <Name>carlos</Name>
                </NameButton>
            </Header>
            
            <Content>
                {data.body}
            </Content>
        </Container>
    )
}
