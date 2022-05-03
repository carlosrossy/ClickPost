import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.View`
    flex: 1;
    margin-top: -75px;
    
`;

export const Empty = styled.View `
    flex: 1;
    align-items: center;
    padding-top: 125px;
`;

export const TextEnpty = styled.Text `
    text-align: center;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 30px;
`;
