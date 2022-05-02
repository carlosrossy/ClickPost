import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(190)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 25px;
    
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({theme})=> theme.fonts.semiBold};
    margin-top: 40px;
    flex-wrap: wrap;
    color: ${({theme})=> theme.colors.white};
`;
