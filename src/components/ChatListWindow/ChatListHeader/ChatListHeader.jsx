import './ChatListHeader.css'
import { BiMessageSquareAdd } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import Input from '../../Input/Input';
import React from 'react'

const ChatListHeader = () => {
  return (
    <header className='chatlist-header'>
        <div className='chatlist-header-title'>
            <h3>Chats</h3>
            <div className='chatlist-header-icons'>
                <BiMessageSquareAdd />
                <SlOptionsVertical />
            </div>
        </div>
        <div className='chat-searcher'>
          <span><IoSearch /></span>
          <Input placeholder='Buscar' name='searcher'/>
        </div>
    </header>
  )
}

export default ChatListHeader