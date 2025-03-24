import React, { useRef, useEffect, useContext } from 'react'
import './MessagesContainer.css'
import Message from '../Message/Message'

import Loader from '../../ui/Loader/Loader'


const MessagesContainer = ({ messages }) => {

  
  const containerRef = useRef(null)

  

  useEffect(() => {

    // Desplaza el contenedor al final cuando los mensajes cambien
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className='messages-container' ref={containerRef}>
      {

        messages
        ? messages.map(message => {
          return (
            <Message 
              key={message._id} 
              message={message}
              
              />
          )
        })
        : <Loader/>
      
        
      }
    </div>
  )
}

export default MessagesContainer