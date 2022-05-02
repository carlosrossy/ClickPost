import React, { useEffect, useState } from 'react';

import HeaderPages from '../../components/HeaderPages';
import { Button } from '../../components/Button';
import { UserDTO } from '../../dtos/UserDTO';

import { useRoute } from '@react-navigation/native';

import {
    Container,
    Main,
    ContainerUser,
    Title,
    Content,
    CatchPhrase,
    ContainerButton
} from './styles'
import api from '../../services/api';
import { Load } from '../../components/Load';

interface Props {
    id:number;
}


export default function InformationUser(){

    const routes = useRoute()
    const {id} = routes.params as Props
    const [load, setload] = useState(false)
    const [User,setUser] = useState<UserDTO>({} as UserDTO)


    useEffect(() => {

        handlerUserInformation()
    },[id])

    useEffect(() =>{

        console.log(User)
    },[User])
    async function handlerUserInformation(){
        try {
            setload(true)
            const response =  await api.get(`/users/${id}`)
            setUser(response.data)
        } catch (error) {
            
            console.log(error)
        }finally{
            setload(false)
        }
    }

    return (
        <Container>
           <HeaderPages title="Informações do usuário" />

           <Main >
               { load ? <Load/> 
               : 
               <>
               {
                   User.name !== undefined &&
                    <>

                <ContainerUser>
                    <Title>Nome</Title>
                    <Content>{User.name}</Content>
                </ContainerUser>


                <ContainerUser>
                    <Title>Username</Title>
                    <Content>{User.username}</Content>
                </ContainerUser>


                <ContainerUser>
                    <Title>Email</Title>
                    <Content>{User.email}</Content>
                </ContainerUser>


                <ContainerUser>
                    <Title>Endereço</Title>
                    <Content>{User.address.street}</Content>
                </ContainerUser>


                <ContainerUser>
                    <Title>Telefone</Title>
                    <Content>{User.phone}</Content>
                </ContainerUser>


                <ContainerUser>
                    <Title>Website</Title>
                    <Content>{User.website}</Content>
                </ContainerUser>


                <ContainerUser>
                    <Title>Empresa</Title>
                    <Content>{User.company.name}</Content>
                    <CatchPhrase>{User.company.catchPhrase}</CatchPhrase>
                </ContainerUser>

                </>
               }
               </>
               }
                
           </Main>

            <ContainerButton>
                <Button title="Posts do usuário" onPress={() => {}} />
            </ContainerButton>

        </Container>
    )
} 