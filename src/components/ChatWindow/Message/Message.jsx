import React, { useContext } from 'react'
import './Message.css'
import renderMessageStatus from '../../../helpers/renderMessageSatus'
import { AuthContext } from '../../../contexts/AuthContext'
import { ChatsContext } from '../../../contexts/ChatsContext'

const Message = ({ content, created_at, sender }) => {
  const { user } = useContext(AuthContext)
  const { getMessageType } = useContext(ChatsContext)
  const type = getMessageType(sender, user)
  

  return (

    <div className={`message-bubble-container ${type}`}>
      <div className={`message-bubble ${type}`}>
        <p>{content}</p>
        <span className='message-bubble-data'>
          <p>{created_at}</p>
          {
            type === 'sent'
            && <span className={`status-icon ${status}`}>{renderMessageStatus(status)}</span>
          }
        </span>
      </div>
    </div>

  )
}

export default Message