import React, { useEffect, useState } from 'react';


import HeaderPages from '../../components/HeaderPages';
import Post from '../../components/Post';
import { Load } from '../../components/Load';
import api from '../../services/api';
import { PostDTO } from '../../dtos/postDTO';

import {
    Container,
    Main,
} from './style';
import { FlatList } from 'react-native';
import { UserDTO } from '../../dtos/UserDTO';


export function Home() {
    const [loading, setloading] = useState(false)
    const [post, setPost] = useState<PostDTO[]>([])
    const [users, setUsers] = useState<UserDTO[]>([]);

    useEffect(() => {
        getPost()
    }, [])
    async function getPost() {
        try {
            setloading(true)
            const response = await api.get(`/posts`)
            const responseUsers = await api.get('/users');
            setPost(response.data)
            setUsers(responseUsers.data)
        } catch (error) {

            console.log(error)

        } finally {
            setloading(false)
        }
    }
    return (

        <Container>
            <HeaderPages title='Post' />

            <Main>
                {loading ? <Load /> :

                    <FlatList
                        contentContainerStyle={{ padding: 24 }}
                        showsVerticalScrollIndicator={false}
                        data={post}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) =>

                            <Post
                                typePage='home'
                                User={users}
                                data={item}
                            />

                        }
                    />
                }
            </Main>

        </Container>
    )
}