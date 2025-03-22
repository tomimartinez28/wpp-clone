import React, { useContext } from 'react'
import './ChatHeader.css'
import Dropdown from '../../ui/Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { ChatsContext } from '../../../contexts/ChatsContext';


const ChatHeader = ({ chat_title, avatar }) => {
  const { handleToggleChatlist } = useContext(ChatsContext)
  
  

  return (
    <header className='chat-header'>
      <div className='user-profile'>

        <button onClick={handleToggleChatlist}><MdOutlineKeyboardArrowLeft size={25} /></button>

        <span className='user-avatar'>
          <img src={avatar} alt={`Foto de perfil de `} />
        </span>
        <div>
          <h4>{

          
chat_title
          }</h4>
        </div>
      </div>
      <div className='header-menu-buttons'>

        <Dropdown buttonContent={<VideoCallBtnIcon />}>
          <div className='dropdown-message'>Haz llamadas con la aplicación de MAC.</div>
        </Dropdown>
        <Dropdown buttonContent={<SearchBtnIcon />}>
          <div className="dropdown-message">Todavía no es posible realizar búsquedas.</div>
        </Dropdown>


        <Dropdown buttonContent={<MenuBtnIcon />}>
          <nav className='dropdown-menu'>
            <Link to='/home'>Cerrar chat</Link>
          </nav>
        </Dropdown>


      </div>
    </header>
  )
}

const VideoCallBtnIcon = () => {
  return (
    <span className='video-call-icon'>
      <i className="bi bi-camera-video-fill"></i>
      <i className="bi bi-chevron-down"></i>
    </span>
  )
}

const SearchBtnIcon = () => {
  return (
    <i className="bi bi-search"></i>
  )
}

const MenuBtnIcon = () => {
  return (
    <i className="bi bi-three-dots-vertical"></i>
  )
}

export default ChatHeader