import './ChatListHeader.css'
import { BiMessageSquareAdd } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import Input from '../../ui/Input/Input';
import React, {useContext, useState} from 'react'
import { ChatsContext } from '../../../contexts/ChatsContext';

const ChatListHeader = ({setFilteredChats}) => {
  const {chatsState} = useContext(ChatsContext)

  const handleInputChange = (e) => {
    const searchedValue = e.target.value.toLowerCase()
    const filteredChats = chatsState.filter(chat => chat.name.toLowerCase().includes(searchedValue))
    setFilteredChats(filteredChats)
  }


  return (
    <header className='chatlist-header'>
        <div className='chatlist-header-title'>
            <h3>Chats</h3>
            <div className='chatlist-header-icons'>
                <BiMessageSquareAdd />
                <SlOptionsVertical />
            </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='chat-searcher'>
            <span><IoSearch /></span>
            <Input placeholder='Buscar' name='searcher' onChange={handleInputChange} />
          </div>
        </form>
    </header>
  )
}

export default ChatListHeader