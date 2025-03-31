import React, { useContext } from 'react'
import './ChatItem.css'
import { Link, useParams } from 'react-router-dom'
import ENVIRONMENT from '../../../config/environment'
import { ChatsContext } from '../../../contexts/ChatsContext'
import useChatInfo from '../../../hooks/useChatInfo'
import getFormattedTime from '../../../helpers/getFormattedTime'
const ChatItem = ({ chat }) => {
  const { chat_id } = useParams()
  const { handleToggleChatlist } = useContext(ChatsContext)
  const { chatTitle, chatAvatar, lastMessage } = useChatInfo(chat)





  return (
    <Link to={`/chat/${chat._id}`} onClick={handleToggleChatlist}>
      <div className={`chat-item ${chat_id == chat._id ? 'selected' : ''}`}>
        <span className='user-avatar'>
          <img src={`${chatAvatar}`} alt={`Foto de perfil de ${chatTitle}`} />
        </span>
        <div className='chat-item-info'>
          <div className='chat-item-info header'>
            <h3>{chatTitle}</h3>
            <p className='time'>
              {lastMessage
                && getFormattedTime(lastMessage.created_at)
              }</p>
          </div>

          <div className='chat-item-info last-message'>
            {/* {
              lastMessage.type === 'sent'
              && renderMessageStatus(lastMessage.status)
            } */}
            <p className='message'>{
              lastMessage
              && lastMessage.content
            }</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ChatItem