import React, { useContext, useEffect } from 'react'
import ChatList from '../../components/ChatListWindow/ChatList/ChatList'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


const ChatLayout = () => {

  

  return (
    <div className='main-container'>
      <ChatList />
      <Outlet />
    </div>

  )
}

export default ChatLayout