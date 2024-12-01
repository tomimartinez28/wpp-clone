import React, { useContext, useEffect, useState } from 'react'
import './ChatList.css'
import ChatItem from '../ChatItem/ChatItem'
import ChatListHeader from '../ChatListHeader/ChatListHeader'
import ChatListFooter from '../ChatListFooter/ChatListFooter'
import { ChatsContext } from '../../../contexts/ChatsContext'



const ChatList = () => {
  const {chatsState, isChatlistOpen} = useContext(ChatsContext)
  const [filteredChats, setFilteredChats] = useState(chatsState)
  
 
  useEffect(() => {
    // Filtrar chats con mensajes y ordenar por el tiempo del último mensaje
    const filteredChats = chatsState.filter(chat => chat.messages.length > 0) 
    console.log('Chats filtrados', filteredChats);
    setFilteredChats(filteredChats)
  },[chatsState])

  return (
    <div className={`chatlist-window ${isChatlistOpen ? 'open' : 'close'}`}>
        <ChatListHeader setFilteredChats={setFilteredChats} />
        <div className='chatlist-items-container'>
          {filteredChats.map(chat => {
            return(
                chat.messages.length > 0
                && <ChatItem key={chat.id} {...chat}/>              
            )
          })}
        </div>
        
        <ChatListFooter/>

      
    </div>
  )
}

export default ChatList