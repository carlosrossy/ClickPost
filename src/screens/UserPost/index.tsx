import React, { useState, useEffect } from 'react';

import HeaderPages from '../../components/HeaderPages';
import Post from '../../components/Post';

import { usePostStorage } from '../../hooks/post';

import { 
    Container,
    Main,
} from './styles';

import { FlatList } from 'react-native';
import { PropsNewPost } from '../NewPost';
import ModalDeletPost from '../../components/ModalDeletPost';

export function UserPost(){
    const [loading, setloading] = useState(false)
    const [post,setPost] = useState<PropsNewPost[]>([])
    const [openModal, setOpenModal] = useState(false)

    const {newPost,SearchPost} = usePostStorage()

    function handleCloseModal(){
        setOpenModal(false);
    }

    function deletePost(){
        setOpenModal(false)
       
    }


    function handleRemovePost(){
        setOpenModal(true);
    }

    useEffect(() => {
        setloading(true)
        SearchPost()
        setloading(false)
    },[])

    useEffect(() => {
        setPost(newPost)
    },[newPost])


    return(

        <Container>
            <HeaderPages title='Posts do Usuário'/>
                <Main>
                    { post.length > 0 &&
                    <FlatList
                    contentContainerStyle={{padding: 24}}
                    showsVerticalScrollIndicator= {false}
                    data = {post}
                    keyExtractor = {(item) => String(item.id)}
                    renderItem = {({ item }) =>
                    
                    <Post
                        active
                        clean={() => handleRemovePost()}
                        typePage='postUser' 
                        dataPostUser={item}
                     />

                    }
                    />
                    }
            </Main>

            <ModalDeletPost 
                visible={openModal} 
                onClose={handleCloseModal}
                removePost={deletePost}
            />
        </Container>
    )


}