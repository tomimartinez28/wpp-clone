import React, { useContext, useEffect, useState } from 'react'
import './ChatList.css'
import ChatItem from '../ChatItem/ChatItem'
import ChatListHeader from '../ChatListHeader/ChatListHeader'
import ChatListFooter from '../ChatListFooter/ChatListFooter'
import { ChatsContext } from '../../../contexts/ChatsContext'



const ChatList = ({isChatListOpen, handleToggleChatList}) => {
  const {chatsState} = useContext(ChatsContext)
  const [filteredChats, setFilteredChats] = useState(chatsState)
 
  useEffect(() => {
    setFilteredChats(chatsState)
  },[chatsState])

  return (
    <div className={`chatlist-window ${!isChatListOpen && 'close'}`}>
        <ChatListHeader setFilteredChats={setFilteredChats} />
        <div className='chatlist-items-container'>
          {filteredChats.map(chat => {
            return(
              <ChatItem key={chat.id} {...chat} onClick={handleToggleChatList} />
            )
          })}
        </div>
        
        <ChatListFooter/>

      
    </div>
  )
}

export default ChatList