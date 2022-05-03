import React from 'react';
import { ModalProps } from 'react-native';

import CancelSvg from '../../assets/CancelSvg.svg'

import {
    Container,
    Main,
    Background,
    Header,
    ButtonClose,
    TitleClose,
    Text,
    ContainerButton,
} from './styles'


interface Props extends ModalProps {
    onClose: () => void;
}


export default function ModalConfirmationPost({onClose, ...rest} : Props){
    return(
        <Container
            transparent
            animationType="fade"
            statusBarTranslucent
            {...rest}
        >
            <Main>
                <Background>
                    <Header>
                        <ButtonClose onPress={onClose}>
                            <TitleClose>X</TitleClose>
                        </ButtonClose>
                    </Header>
            
            <CancelSvg 
                width={200}
                height={150}
            />

                <Text>
                    Você tem certeza que deseja {`\n`}
                    excluir esse post?
                </Text>
                </Background>

                <ContainerButton >
                      
                    
                </ContainerButton>
            </Main>
        </Container>
    )
    
}