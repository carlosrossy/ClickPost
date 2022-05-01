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
    return (

        <Container>
            <Header>
                <Title>{data.title}</Title>

                <NameButton>
                    <Name>Carlos</Name>
                </NameButton>
            </Header>
            
            <Content>
                {data.body}
            </Content>
        </Container>
    )
}
