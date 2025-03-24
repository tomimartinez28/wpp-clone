import React, { useEffect, useContext, useState } from 'react'
import { ChatsContext } from '../../../contexts/ChatsContext'
import ChatHeader from '../ChatHeader/ChatHeader'
import MessagesContainer from '../MessagesContainer./MessagesContainer'
import ChatFooter from '../ChatFooter/ChatFooter'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import './Chat.css'
import Loader from '../../ui/Loader/Loader'
import useChatInfo from '../../../hooks/useChatInfo'

const Chat = () => {
  const { chat_id } = useParams()
  const { chatsState } = useContext(ChatsContext)
  const { user } = useContext(AuthContext)
  const [selectedChatState, setSelectedChatState] = useState(null)
  const { chatTitle, chatAvatar } = useChatInfo(selectedChatState)


  useEffect(() => {
    if (chat_id) {
      const selectedChat = chatsState.find(chat => chat._id === chat_id)
      setSelectedChatState(selectedChat)

    }

  }, [chatsState, chat_id])





  return (
    <div className='chat-window'>

      {
        selectedChatState
        &&
        <>
          <ChatHeader chat_title={chatTitle} avatar={chatAvatar} />
          <MessagesContainer messages={selectedChatState.messages} />
          <ChatFooter chat_id={chat_id} />
        </>

      }

    </div>
  )
}

export default Chat