import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Main = styled.View``;

export const Title = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.TextInput`
    min-height: ${RFValue(40)}px;
    
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme}) =>  theme.fonts.semiBold};  
     
    color: ${({ theme }) => theme.colors.text};
     
    padding: 8px;
    margin-bottom: 23px;
    
    border-radius: 5px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.primary};
`;

export const AreaText = styled.View`
    min-height: ${RFValue(130)}px;
    border-radius: 5px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.primary};
`;

export const InputContent = styled.TextInput`
    flex: 1;
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    padding: 8px;
`;

export const ContainerButton = styled.View``;

export const ViewWarning = styled.View`
     width: 100%;
    height: 40px;
 
    justify-content: center;
`;

export const Warning = styled.Text`
    color: ${({ theme }) => theme.colors.danger}
`;
