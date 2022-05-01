import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';


export const Container = styled(TouchableOpacity)`
    margin-top: 20px;
    height: ${RFValue(52)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
`;