import React, { useState, useEffect, useContext } from 'react'
import { createContext } from "react";
import { useApiRequest } from '../hooks/useApiRequest';
import ENVIRONMENT from '../config/environment';
import { AuthContext } from '../contexts/AuthContext';
import io from 'socket.io-client'

// Creo el contexto global
export const ChatsContext = createContext({})


// Conecto el servidor de WebSocket
const socket = io(ENVIRONMENT.API_URL)

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


     // **Escuchar mensajes en tiempo real con WebSockets**
     useEffect(() => {
        socket.on("receiveMessage", (newMessage) => {
            

            // Actualizar la lista de chats con el nuevo mensaje
            setChatsState((prevChats) =>
                prevChats.map((chat) =>
                    chat._id === newMessage.chat_id
                        ? { ...chat, messages: [...chat.messages, newMessage] }
                        : chat
                )
            );
        });


        return () => {
            socket.off("receiveMessage"); // Limpiar el evento al desmontar
        };
    }, []);

    const sendMessage = ({content, chat_id}) => {
        const message = {
            chat_id,
            content,
            sender: user._id, // ID del usuario que envía el mensaje
        }; 
    
        socket.emit("sendMessage", message); // Enviar el mensaje por WebSockets
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

