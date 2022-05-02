import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import  api  from '../services/api';
import { PostDTO } from '../dtos/postDTO';
import { PropsNewPost } from '../screens/NewPost';

type PostContextData = {
    loadingPostCrate: boolean;
    loadingRemovePost: boolean;
    loadingSearchPostStorage: boolean;

    newPostStorage: (data: PropsNewPost) => void;
    loadStoragePostPost: () => Promise<void>;
    newPost: PropsNewPost[];

    removePostUser: (item: any) => void;

}

type PostProviderProps = {
    children: ReactNode;
}


export const PostContext = createContext({} as PostContextData);

function PostProvider({ children }: PostProviderProps){

    const [loadingRemovePost, setLoadingRemovePost] = useState(false);
    const [loadingSearchPostStorage, setLoadingSearchPostStorage] = useState(true);
    const [loadingPostCrate, setLoadingPostCreate] = useState(false);
    
    const [newPost, setNewPost] = useState<PropsNewPost[]>([]);
    
    const CHAVE_STORAGE_POSTS = '@clickpost:postCreated';

    useEffect(() => {
        loadStoragePostPost();
    }, []);


    async function newPostStorage(data: PropsNewPost){
        setLoadingPostCreate(true);

        const dataPost = {
            title: data.title,
            body: data.content,
            userId: 1,
        }
        api.post(`/posts`, {
            dataPost
        }).then(() => {

            
            const storagePost = [
               ...newPost,
               data
            ]
            
            setNewPost(storagePost);
            AsyncStorage.setItem(CHAVE_STORAGE_POSTS, JSON.stringify(storagePost));

            setLoadingPostCreate(false);
            return true
        })
        .catch(() => {
            Alert.alert('Não foi possível criar o post.');
            return false
        })
        
        setLoadingPostCreate(false);
    }

    async function loadStoragePostPost(){
        const storage = await AsyncStorage.getItem(CHAVE_STORAGE_POSTS);

        if(storage){
            const data = await JSON.parse(storage);
            setNewPost(data);
        }
       
        
        setLoadingSearchPostStorage(false);
    }

    async function removePostUser(item: PostDTO) {
        setLoadingRemovePost(true);
        //const removeItem = newPost.filter(
           // itemPost => itemPost.id !== item.id
       // )
        //setNewPost(removeItem);
        //await AsyncStorage.setItem(CHAVE_STORAGE_POSTS, JSON.stringify(removeItem));
       // setLoadingRemovePost(false);
    }

    

    return (
        <PostContext.Provider value={{

            loadingPostCrate,
            loadingRemovePost,
            loadingSearchPostStorage,


            loadStoragePostPost,

            newPostStorage,
            removePostUser,
        }}>
            {children}
        </PostContext.Provider>
    )
}


function usePostStorage(){
    const context = useContext(PostContext);

    return context;
}

export {
    PostProvider,
    usePostStorage
}