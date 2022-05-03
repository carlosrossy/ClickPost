import React from 'react';
import { ModalProps } from 'react-native';

import CancelSvg from '../../assets/CancelSvg.svg'
import { ButtonModalDelete } from '../ButtonDeletModal';

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
    removePost: () => void;
}


export default function ModalDeletPost({onClose, ...rest} : Props){
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

                     <ContainerButton >
                      <ButtonModalDelete 
                            title='sim'
                      />
                       <ButtonModalDelete
                            active
                            title='não'
                            onPress={onClose}
                      />
                    
                </ContainerButton>
                </Background>
                
            </Main>
        </Container>
    )
    
}