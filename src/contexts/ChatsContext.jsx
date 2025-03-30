import React, { useState, useEffect, useContext } from 'react'
import { createContext } from "react";
import { useApiRequest } from '../hooks/useApiRequest';
import ENVIRONMENT from '../config/environment';
import { AuthContext } from '../contexts/AuthContext';


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
        const message = {
            chat_id,
            content,
            sender: user._id, // ID del usuario que envía el mensaje
        }; 
    
        
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

