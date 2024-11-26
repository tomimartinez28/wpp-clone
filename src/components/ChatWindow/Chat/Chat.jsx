import React, { useEffect, useState } from 'react'
import ChatHeader from '../ChatHeader/ChatHeader'
import MessagesContainer from '../MessagesContainer./MessagesContainer'
import ChatFooter from '../ChatFooter/ChatFooter'
import './Chat.css'
import chats from '../../../data/chats'
import { useParams } from 'react-router-dom'
import useIsDesktop from '../../../customHooks/useIsDesktop'


const Chat = ({handleToggleChatList}) => {
  const { chat_id } = useParams()
  const selectedChat = chats.find(chat => chat.id == chat_id)
  const [messages, setMessages] = useState(selectedChat.messages)

  // actualizo el estado de mensajes al cambiar de conversacion
  useEffect(()=>{
    setMessages(selectedChat.messages)
  },[chat_id])

  // handleNewMessage
  const handleNewMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }



  return (
    <div className='chat-window'>
        <ChatHeader {...selectedChat} handleToggleChatList={handleToggleChatList} />
        <MessagesContainer messages={messages} />
        <ChatFooter handleNewMessage={handleNewMessage} />
    </div>
  )
}

export default Chat