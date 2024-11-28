import React, { useState } from 'react'
import { createContext } from "react";
import chats from '../data/chats';
import { v4 as uuidv4 } from 'uuid';
import getFormattedTime from '../helpers/getFormattedTime';
import { useParams } from 'react-router-dom';


// Creo el contexto global
export const ChatsContext = createContext({})


export const ChatsContextProvider = ({children}) => {

    const [chatsState, setChatsState] = useState(chats)
    


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
            }
        }>

        {children}
    </ChatsContext.Provider>
  )
}

