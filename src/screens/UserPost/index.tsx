import React, { useState, useEffect } from 'react';

import HeaderPages from '../../components/HeaderPages';
import Post from '../../components/Post';
import { Load } from '../../components/Load';


import { 
    Container,
    Main,
} from './styles';

import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PropsNewPost } from '../NewPost';

export function UserPost(){
    const [loading, setloading] = useState(false)
    const [post,setPost] = useState<PropsNewPost[]>([])

    async function headleFetchData(){
        try {
            setloading(true) 
            const response =  await AsyncStorage.getItem("CHAVE_STORAGE_POSTS");
            const data = response ? JSON.parse(response) :{}
            setPost(data)
        } catch (error) {
            
            console.log(error)

        }finally{
            setloading(false)
        }
    
    }

    useEffect(() => {
        headleFetchData();
    },[])

    return(

        <Container>
            <HeaderPages title='Posts do Usuário'/>
                <Main>
                    { loading ? <Load/> :

                    <FlatList
                    contentContainerStyle={{padding: 24}}
                    showsVerticalScrollIndicator= {false}
                    data = {post}
                    keyExtractor = {(item) => String(item.id)}
                    renderItem = {({ item }) =>
                    
                    <Post data={item}/>

                    }
                    />
                     }
            </Main>
        </Container>
    )


}