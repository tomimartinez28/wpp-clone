import React, { useContext } from 'react'
import './ChatHeader.css'
import Dropdown from '../../ui/Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { ChatsContext } from '../../../contexts/ChatsContext';


const ChatHeader = ({chat}) => {
  const {handleToggleChatlist} = useContext(ChatsContext)
  const {img, name} = chat

  return (
    <header className='chat-header'>
      <div className='user-profile'>
        
          <button onClick={handleToggleChatlist}><MdOutlineKeyboardArrowLeft size={25} /></button>
        
        <span className='user-avatar'>
          <img src={img} alt={`Foto de perfil de ${name}`}/>
        </span>
        <div>
          <h4>{name}</h4>
        </div>
      </div>
      <div className='header-menu-buttons'>
          
          <Dropdown buttonContent={<VideoCallBtnIcon />}>
              <div className='dropdown-message'>Haz llamadas con la aplicación de MAC.</div>
          </Dropdown>
          <SearchBtnIcon />

          <Dropdown buttonContent={<MenuBtnIcon/>}>
            <nav className='dropdown-menu'>
              <Link>Info. de contacto</Link>
              <Link to='/'>Cerrar chat</Link>
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