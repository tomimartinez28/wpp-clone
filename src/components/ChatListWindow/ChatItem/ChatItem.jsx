import React, { useContext } from 'react'
import './ChatItem.css'
import { Link, useParams } from 'react-router-dom'
import renderMessageStatus from '../../../helpers/renderMessageSatus'
import { ChatsContext } from '../../../contexts/ChatsContext'

const ChatItem = ({id, name, img, messages, onClick}) => {
  const {chat_id} = useParams()
  const {handleToggleChatlist} = useContext(ChatsContext)
  
  const lastMessage = messages[messages.length - 1]
 
  return (
    <Link to={`/chat/${id}`} onClick={handleToggleChatlist}>
      <div className={`chat-item ${chat_id == id ? 'selected' : ''}`}>
        <div className='profile-picture'>
          <img src={img} alt={`Foto de perfil de ${name}`}/>
        </div>
        <div className='chat-item-info'>
          <div className='chat-item-info header'>
            <h3>{name}</h3>
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