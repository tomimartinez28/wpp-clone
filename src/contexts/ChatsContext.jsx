import React, { useState, useEffect } from 'react'
import { createContext } from "react";
import chatsJSON from '../data/chats';
import { v4 as uuidv4 } from 'uuid';
import getFormattedTime from '../helpers/getFormattedTime';


// Creo el contexto global
export const ChatsContext = createContext({})


export const ChatsContextProvider = ({children}) => {
    // Cargar datos iniciales desde localStorage o usar el JSON original
    const initialChats = JSON.parse(localStorage.getItem("chatsState")) || chatsJSON;
    const [chatsState, setChatsState] = useState(initialChats)
    const [isChatlistOpen, setIsChatlistOpen] = useState(true)

    // Sincronizar cambios en chatsState con localStorage
    useEffect(() => {
        localStorage.setItem("chatsState", JSON.stringify(chatsState));
    }, [chatsState]);

    const handleToggleChatlist = () => {
        setIsChatlistOpen(prev => !prev)
    }
    


    // New mensaje
    const createNewMessage = (text, chat_id) => {
        
        const newMessage = {
            time:getFormattedTime(),
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
        return chatsState.find(chat => chat.id == chat_id)
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
            }
        }>

        {children}
    </ChatsContext.Provider>
  )
}

