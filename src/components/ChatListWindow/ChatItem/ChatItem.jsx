import React, { useState } from 'react'
import './ChatItem.css'
import { Link, useParams } from 'react-router-dom'
import renderMessageStatus from '../../../helpers/renderMessageSatus'

const ChatItem = ({id, name, img, messages}) => {
  const {chat_id} = useParams()
  const lastMessage = messages[messages.length - 1]

  return (
    <Link to={`/chat/${id}`}>
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