import React from 'react';
import { ModalProps } from 'react-native';

import ConfirmSvg from  '../../assets/Confirm.svg'

import {
    Container,
    Main,
    Background,
    Header,
    ButtonClose,
    TitleClose,
    Text,
} from './styles'

type Props = ModalProps & {
    visible: boolean;
    onClose: () => void;
}

export default function ModalConfirmationPost({visible,onClose, ...rest} : Props){
    return(
        <Container
        transparent
        animationType="fade"
        statusBarTranslucent
        {...rest}
        visible={visible}
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