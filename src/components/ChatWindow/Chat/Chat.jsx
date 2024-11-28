import React, { useEffect, useContext } from 'react'
import { ChatsContext } from '../../../contexts/ChatsContext'
import ChatHeader from '../ChatHeader/ChatHeader'
import MessagesContainer from '../MessagesContainer./MessagesContainer'
import ChatFooter from '../ChatFooter/ChatFooter'
import { useParams } from 'react-router-dom'
import './Chat.css'



const Chat = ({handleToggleChatList}) => {
  const { chat_id } = useParams() 
  const { getChatById } = useContext(ChatsContext)
  const chat = getChatById(chat_id)

  return (
    <div className='chat-window'>
        <ChatHeader chat={chat} handleToggleChatList={handleToggleChatList} />
        <MessagesContainer chat={chat} />
        <ChatFooter chat_id={chat_id} />
    </div>
  )
}

export default Chat