import React, {useEffect,useState} from 'react';
import {FlatList, Text} from 'react-native';

import HeaderPages from '../../components/HeaderPages';
import { Load } from '../../components/Load';
import api from '../../services/api';
import { PostDTO } from '../../dtos/postDTO';

import { Container } from './style';

export function Home (){
    const [loading, setloading] = useState(false)
    const [post,setPost] = useState<PostDTO[]>([])
    useEffect(() => {
        
        getPost()
    }, [])
    async function getPost () {
        try {
            setloading(true) 
            const response = await api.get('/posts')
            setPost(response.data)
        } catch (error) {
            
            console.log(error)

        }finally{
            setloading(false)
        }
    }
    return(

        <Container>
            <HeaderPages title='Post'/>
            { loading ? <Load/>:
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