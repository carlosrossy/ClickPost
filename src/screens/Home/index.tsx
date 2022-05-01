import React, {useEffect,useState} from 'react';
import {FlatList} from 'react-native';

import HeaderPages from '../../components/HeaderPages';
import Post from '../../components/Post';
import { Load } from '../../components/Load';
import api from '../../services/api';
import { PostDTO } from '../../dtos/postDTO';

import { 
    Container,
    Main
} from './style';


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

            <Main>
                { loading ? <Load/> :

                 <FlatList
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