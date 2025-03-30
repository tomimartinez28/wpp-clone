import React, { useState, useEffect, useContext } from 'react'
import { createContext } from "react";
import { useApiRequest } from '../hooks/useApiRequest';
import ENVIRONMENT from '../config/environment';
import { AuthContext } from '../contexts/AuthContext';
import { v4 as uuidv4 } from 'uuid';

// Creo el contexto global
export const ChatsContext = createContext({})



export const ChatsContextProvider = ({ children }) => {
    const { responseApiState, sendGetRequest } = useApiRequest(ENVIRONMENT.API_URL + '/api/chat/get-user-chats')
    const { user } = useContext(AuthContext)
    const [chatsState, setChatsState] = useState([])
    const [isChatlistOpen, setIsChatlistOpen] = useState(true)





    useEffect(() => {
        if (user) {
            sendGetRequest(); // Vuelve a hacer la petición para actualizar los chats del nuevo usuario
        } else {
            setChatsState([]); // Si no hay usuario (logout), vaciar la lista de chats
        }
    }, [user]); // Agregamos user como dependencia

    // Efecto para actualizar el estado cuando los datos de la API cambian
    useEffect(() => {
        if (responseApiState.data?.payload) {
            setChatsState(responseApiState.data.payload.chats)
        }
    }, [responseApiState]);


  

    const sendMessage = ({content, chat_id}) => {
        const newMessage = {
            _id: uuidv4(),
            chat_id,
            content,
            sender: user._id,
            created_at: Date.now()
             // ID del usuario que envía el mensaje
        }; 
         // Actualizar la lista de chats con el nuevo mensaje
         setChatsState((prevChats) =>
            prevChats.map((chat) =>
                chat._id === newMessage.chat_id
                    ? { ...chat, messages: [...chat.messages, newMessage] }
                    : chat
            )
        );
    
        
    };



    const handleToggleChatlist = () => {
        setIsChatlistOpen(prev => !prev)
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
                handleToggleChatlist: handleToggleChatlist,
                isChatlistOpen: isChatlistOpen,
                setIsChatlistOpen: setIsChatlistOpen,
                sendMessage,
                
               
                
            }
        }>

            {children}
        </ChatsContext.Provider>
    )
}

