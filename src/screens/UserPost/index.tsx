import React, { useState, useEffect } from 'react';

import HeaderPages from '../../components/HeaderPages';
import Post from '../../components/Post';
import EmptySvg from '../../assets/EmptySvg.svg'

import { usePostStorage } from '../../hooks/post';

import { 
    Container,
    Main,
    Empty,
    TextEnpty
} from './styles';

import { FlatList } from 'react-native';
import { PropsNewPost } from '../NewPost';
import ModalDeletPost from '../../components/ModalDeletPost';
import { PostDTO } from '../../dtos/postDTO';

export function UserPost(){
    const [loading, setloading] = useState(false)
    const [post,setPost] = useState<PropsNewPost[]>([])
    const [itemDelete, setItemDelete] = useState<PostDTO>({} as PostDTO);
    const [openModal, setOpenModal] = useState(false)

    const {newPost,SearchPost,removePostUser} = usePostStorage()

    function handleCloseModal(){
        setOpenModal(false);
        
    }

    function deletePost(){
        setOpenModal(false)
        removePostUser(itemDelete)
    }

    function handleRemovePost(item: PostDTO){
        setItemDelete(item);
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
                    { post.length === 0 ?
                        <Empty>
                            <EmptySvg
                            width={279}
                            height={218}
                            />

                            <TextEnpty>
                                Você ainda não fez nenhum {'\n'}
                                post ou excluiu todos!
                            </TextEnpty>
                        </Empty>

                    :
                    
                    <FlatList
                    contentContainerStyle={{padding: 24}}
                    showsVerticalScrollIndicator= {false}
                    data = {post}
                    keyExtractor = {(item) => String(item.id)}
                    renderItem = {({ item }) =>
                    
                    <Post
                        active
                        clean={() => handleRemovePost(item)}
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