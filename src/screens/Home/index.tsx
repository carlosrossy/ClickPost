import React, {useEffect,useState} from 'react';
import { ActivityIndicator, FlatList, Text} from 'react-native';

import HeaderPages from '../../components/HeaderPages';
import { Load } from '../../components/Load';
import api from '../../services/api';

import { Container } from './style';

export interface IProsPost{
    body: string;
    id: number;
    title: string;
    userId: number;
}
export function Home (){
    const [load, setload] = useState(false)
    const [post,setPost] = useState<IProsPost[]>([])
    useEffect(() => {
        
        getPost()
    }, [])
    async function getPost () {
        try {
            setload(true) 
            const response = await api.get('/posts')
            setPost(response.data)
        } catch (error) {
            
            console.log('erro ao buscar os posts')

        }finally{setload(false)}
    }
    return(

        <Container>
            <HeaderPages title='Post'/>
            {load ? <Load/>:
                <FlatList
                    data = {post}
                    keyExtractor = {(item) => String(item.id)}
                    renderItem = {({ item }) =>
                    {return (
                        <Text>{item.title}</Text>
                    )}
                }
                />
            }
        </Container>
    )
}