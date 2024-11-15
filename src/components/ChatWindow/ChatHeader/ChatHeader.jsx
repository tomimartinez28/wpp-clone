import React from 'react'
import './ChatHeader.css'
import Dropdown from '../../ui/Dropdown/Dropdown'


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
          
          <Dropdown buttonContent={<VideoCallBtnIcon />}>
              <div>Haz llamadas con la aplicación de MAC.</div>
          </Dropdown>
          <SearchBtnIcon />

          <Dropdown buttonContent={<MenuBtnIcon/>}>
            <nav>
              <p>Opcion 1</p>
              <p>Opcion 2</p>
            </nav>
          </Dropdown>
          
        
      </div>
    </header>
  )
}

const VideoCallBtnIcon = () => {
  return(
    <span className='video-call-icon'>
            <i className="bi bi-camera-video-fill"></i> 
            <i className="bi bi-chevron-down"></i>
    </span> 
  )
}

const SearchBtnIcon = () => {
  return(
    <i className="bi bi-search"></i>
  )
}

const MenuBtnIcon = () => {
  return(
    <i className="bi bi-three-dots-vertical"></i>
  ) 
}

export default ChatHeader