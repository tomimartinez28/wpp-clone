import React, { useContext } from 'react'
import './ChatItem.css'
import { Link, useParams } from 'react-router-dom'
import renderMessageStatus from '../../../helpers/renderMessageSatus'
import { ChatsContext } from '../../../contexts/ChatsContext'
import useChatInfo from '../../../hooks/useChatInfo'

const ChatItem = ({ chat }) => {
  const { chat_id } = useParams()
  const { handleToggleChatlist } = useContext(ChatsContext)
  const {chatTitle, chatAvatar } = useChatInfo(chat)
  
  

  const lastMessage = "messages[messages.length - 1]"

  return (
    <Link to={`/chat/${chat._id}`} onClick={handleToggleChatlist}>
      <div className={`chat-item ${chat_id == chat._id ? 'selected' : ''}`}>
        <div className='profile-picture'>
          <img src={chatAvatar} alt={`Foto de perfil de ${chatTitle}`} />
        </div>
        <div className='chat-item-info'>
          <div className='chat-item-info header'>
            <h3>{chatTitle}</h3>
            <p className='time'>{lastMessage.time}</p>
          </div>

          <div className='chat-item-info last-message'>
            {
              lastMessage.type === 'sent'
              && renderMessageStatus(lastMessage.status)
            }
            <p className='message'>{lastMessage.text}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ChatItem