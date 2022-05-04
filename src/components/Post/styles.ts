import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    margin-bottom: 12px;
    padding: 20px;
    border-radius: 7px;
`;

export const Header = styled.View`
    width: 100%;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=> theme.fonts.semiBold};
    color: ${({theme})=> theme.colors.primary};
`;

export const NameButton = styled.TouchableOpacity`
    margin-top: 5px;
`;

export const Name = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.user};
`;

export const Content = styled.Text`
    width: 100%;
    font-size: ${RFValue(14)}px;
    margin-top: 10px;
    color: ${({theme})=> theme.colors.text};
`;

export const Footer = styled.View`
   width: 100%;
   align-items: flex-end;
   margin-top: 10px;
   flex-direction: row;
   justify-content: flex-end;
`;

export const ButtonActionClean = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
    margin-left: 12px;
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonActionUpdate = styled.TouchableOpacity``;
