import React from 'react'
import './ChatList.css'
import chats from '../../../data/chats'
import ChatItem from '../ChatItem/ChatItem'
import ChatListHeader from '../ChatListHeader/ChatListHeader'
import ChatListFooter from '../ChatListFooter/ChatListFooter'

const ChatList = () => {
  

  return (
    <div className='chatlist-window'>
        <ChatListHeader/>
        <div className='chatlist-items-container'>
          {chats.map(chat => {
            return(
              <ChatItem key={chat.id} {...chat}/>
            )
          })}
        </div>
        
        <ChatListFooter/>

      
    </div>
  )
}

export default ChatList