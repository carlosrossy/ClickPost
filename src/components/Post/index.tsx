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
    Footer,
    ButtonActionClean,
    Icon,
    ButtonActionUpdate,
} from './styles'
import { PropsNewPost } from '../../screens/NewPost';



interface Props {
    data?: PostDTO;
    dataPostUser? :PropsNewPost;
    typePage:'home' | 'postUser';
    active?: boolean;
    clean?: () => void;
}

export default function Post({data, dataPostUser,typePage,active, clean}: Props){

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
                    <Name>
                      {
                          
                      }
                    </Name>
                </NameButton>
            </Header>
            
            <Content>
                {typePage === 'home' ? data?.body : dataPostUser?.content}
            </Content>

            <Footer>
                {
                    active &&
                    <>
                    <ButtonActionUpdate 
                       
                        activeOpacity={0.7}
                    >
                        <Icon 
                            name = "edit-3"
                        />
                    </ButtonActionUpdate>
                    </>
                }
                {
                    active &&
                    <>
                    <ButtonActionClean 
                        onPress={clean}
                        activeOpacity={0.7}
                    >
                        <Icon 
                            name = "trash"
                        />
                    
                    </ButtonActionClean>
                    </>
                }
            </Footer>
        </Container>
    )
}
