import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(190)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 25px;
    
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({theme})=> theme.fonts.semiBold};
    margin-top: 20px;
    flex-wrap: wrap;
    color: ${({theme})=> theme.colors.white};
`;
export const Goback = styled.View `
   width: 100%;
   margin-top: 15px;
   min-height: ${RFValue(38)}px;
   align-items: flex-end;
`

export const ButtonGoBack = styled.TouchableOpacity ``;

export const Icon = styled(Ionicons) `
   font-size: ${RFValue(30)}px;
   color: ${({ theme }) => theme.colors.white};
`