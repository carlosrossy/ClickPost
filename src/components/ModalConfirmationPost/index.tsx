import React from 'react';
import { ModalProps } from 'react-native';

import ConfirmSvg from '../../assets/ConfirmSvg.svg'

import {
    Container,
    Main,
    Background,
    Header,
    ButtonClose,
    TitleClose,
    Text,
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
            
            <ConfirmSvg 
                width={200}
                height={150}
            />

            <Text>
                O post foi criado {`\n`}
                com sucesso
            </Text>
        </Background>
   </Main>
</Container>
    )
    

}