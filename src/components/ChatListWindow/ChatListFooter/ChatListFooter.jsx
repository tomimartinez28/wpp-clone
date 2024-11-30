import React from 'react'
import './ChatListFooter.css'
import LogoWpp from '../../ui/Logos/LogoWpp'
const ChatListFooter = () => {
  return (
    <footer className='chatlist-footer'>
        <span className='logo-wpp'>
            <LogoWpp/>
        </span>
        <a href="https://web.whatsapp.com/" target='_blank' rel='noreferrer'>
          Obtener Whatsapp para Mac
        </a>
    </footer>
  )
}

export default ChatListFooter