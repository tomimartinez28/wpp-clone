import React, {useContext} from 'react'
import './MessagesContainer.css'
import Message from '../Message/Message'


const MessagesContainer = ({chat}) => {
  
  const {messages} = chat

return (
    <div className='messages-container'>
      {
        messages.map(message => {
          return(
            <Message key={message.id} {...message} />
          )
        })
      }
    </div>
  )
}

export default MessagesContainer