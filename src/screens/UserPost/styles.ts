import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.View`
    flex: 1;
    margin-top: -75px;
`;