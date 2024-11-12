import React from 'react'
import './Message.css'
import renderMessageStatus from '../../../helpers/renderMessageSatus'

const Message = ({time, status, text, type}) => {

  return (

    <div className={`message-bubble-container ${type}`}>
      <div className={`message-bubble ${type}`}>
        <p>{text}</p>
        <span className='message-bubble-data'>
          <p>{time}</p>
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