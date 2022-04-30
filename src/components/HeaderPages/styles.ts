import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: flex-end;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({theme})=> theme.fonts.semiBold};
    text-align: center;
    color: ${({theme})=> theme.colors.white};
`;
