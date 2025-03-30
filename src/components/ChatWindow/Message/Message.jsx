import React, { useContext } from 'react'
import './Message.css'
import renderMessageStatus from '../../../helpers/renderMessageSatus'
import { AuthContext } from '../../../contexts/AuthContext'
import useMessageInfo from '../../../hooks/useMessageInfo'

const Message = ({ message }) => {

  const { messageType, getFormatedDate, getFormatedTime } = useMessageInfo(message)



  return (

    <div className={`message-bubble-container ${messageType}`}>
      <div className={`message-bubble ${messageType}`}>
        <p>{message.content}</p>
        <span className='message-bubble-data'>
          <p>{getFormatedTime(message.created_at)}</p>
          {
            messageType === 'sent'
            && <span className={`status-icon ${status}`}>{renderMessageStatus(status)}</span>
          }
        </span>
      </div>
    </div>

  )
}

export default Message