import React, { useState, useEffect } from 'react'
import { createContext } from "react";
import { useApiRequest } from '../hooks/useApiRequest';
import ENVIRONMENT from '../config/environment';
import { v4 as uuidv4 } from 'uuid';
import getFormattedTime from '../helpers/getFormattedTime';
import { useCallback } from 'react';

// Creo el contexto global
export const ChatsContext = createContext({})


export const ChatsContextProvider = ({ children }) => {
    const { responseApiState, sendGetRequest } = useApiRequest(ENVIRONMENT.API_URL + '/api/chat/get-user-chats')
    
    const [chatsState, setChatsState] = useState([])
    const [isChatlistOpen, setIsChatlistOpen] = useState(true)

    const getChatImgSrc = (chat, user) => {
        if (!user) return ''
        if(chat.is_group){
            return 'https://cdn-icons-png.flaticon.com/512/69/69589.png'

        } else {
            const other_user = chat.members.find(
                member => member._id !== user._id
            )
            
            return other_user.avatar
        }
    }

    const getChatTitle = (chat, user) => {
        if (!user) return ''
        if(chat.is_group) {
            return chat.group_name
        } else {
            const other_user = chat.members.find(
                member => member._id !== user._id
            )
            return other_user.username
        }
    }
   
    const getMessageType = (sender, user) => {
        if (!user) return ''
        if (!sender) return ''
        if(sender._id === user._id) {
            return 'sent'
        } else {
            return 'received'
        }
    }

    // Efecto para obtener los chats cuando el componente se monta
    useEffect(() => {
        sendGetRequest()
    }, []);


    // Efecto para actualizar el estado cuando los datos de la API cambian
    useEffect(() => {
        if (responseApiState.data?.payload) {
            console.log(responseApiState.data.payload);
            setChatsState(responseApiState.data.payload.chats)
            
        }
    }, [responseApiState]);
   

    const handleToggleChatlist = () => {
        setIsChatlistOpen(prev => !prev)
    }



    // New mensaje
    const createNewMessage = (text, chat_id) => {

        const newMessage = {
            time: getFormattedTime(),
            status: 'received',
            id: uuidv4(),
            text: text,
            type: 'sent'
        }

        setChatsState(prev =>
            prev.map(chat =>
                chat.id == chat_id
                    ? { ...chat, messages: [...chat.messages, newMessage] }
                    : chat
            )
        )
    }



    // Get chat by ID
    const getChatById = (chat_id) => {
        return chatsState.find(chat => chat._id == chat_id)
    }



    return (
        <ChatsContext.Provider value={
            {
                chatsState: chatsState,
                getChatById: getChatById,
                createNewMessage: createNewMessage,
                handleToggleChatlist: handleToggleChatlist,
                isChatlistOpen: isChatlistOpen,
                setIsChatlistOpen: setIsChatlistOpen,
                getChatTitle,
                getChatImgSrc,
                getMessageType
            }
        }>

            {children}
        </ChatsContext.Provider>
    )
}

