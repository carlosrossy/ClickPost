import React from 'react';

import {
    Container,
    Title,
    Goback,
    ButtonGoBack,
    Icon,
} from './styles';

interface Props{
    title: string;
    active?: boolean;
    goBack?: () => void;
}

export default function HeaderPages({title, active,  goBack} : Props){
    return(
        <Container>
                <Goback>
                {
                    active &&
                    <ButtonGoBack onPress={goBack}>
                        <Icon
                            name="arrow-back"
                        />
                    </ButtonGoBack>
                }
                </Goback>
            <Title>
                {title}
            </Title>
        </Container>
    )
}