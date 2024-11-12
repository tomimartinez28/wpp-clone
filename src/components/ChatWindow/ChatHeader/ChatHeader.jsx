import React from 'react'
import './ChatHeader.css'



const ChatHeader = ({name, img}) => {
  return (
    <header className='chat-header'>
      <div className='user-profile'>
        <span className='user-avatar'>
          <img src={img} alt={`Foto de perfil de ${name}`}/>
        </span>
        <div>
          <h4>{name}</h4>
        </div>
      </div>
      <div className='header-menu-buttons'>
        <span className='video-call-buttons'>
          <i className="bi bi-camera-video-fill"></i>
          <i className="bi bi-chevron-down"></i>
        </span>
        <i className="bi bi-search"></i>
        <i className="bi bi-three-dots-vertical"></i>
      </div>
    </header>
  )
}

export default ChatHeader