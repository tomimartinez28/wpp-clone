import React, { useEffect, useContext } from 'react'
import { ChatsContext } from '../../../contexts/ChatsContext'
import ChatHeader from '../ChatHeader/ChatHeader'
import MessagesContainer from '../MessagesContainer./MessagesContainer'
import ChatFooter from '../ChatFooter/ChatFooter'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import './Chat.css'



const Chat = () => {
  const { chat_id } = useParams()
  const { getChatById, getChatTitle, getChatImgSrc } = useContext(ChatsContext)
  const { user } = useContext(AuthContext)
  const chat = getChatById(chat_id)
  
  
  if (!chat) return <p>Loading</p>

  

  
  return (
    <div className='chat-window'>
      <ChatHeader chat_title={getChatTitle(chat, user)} avatar={getChatImgSrc(chat, user)} />
      <MessagesContainer messages={chat.messages} />
      <ChatFooter chat_id={chat_id} />
    </div>
  )
}

export default Chat