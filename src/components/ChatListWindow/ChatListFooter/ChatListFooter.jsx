import React from 'react'
import './ChatListFooter.css'
import LogoWpp from '../../ui/Logos/LogoWpp'
const ChatListFooter = () => {
  return (
    <footer className='chatlist-footer'>
        <span className='logo-wpp'>
            <LogoWpp/>
        </span>
        Obtener Whatsapp para Mac
    </footer>
  )
}

export default ChatListFooter