import React, { useRef, useEffect } from 'react'
import './MessagesContainer.css'
import Message from '../Message/Message'


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
        messages &&
        messages.map(message => {
          return (
            <Message key={message._id} {...message} />
          )
        })
      }
    </div>
  )
}

export default MessagesContainer