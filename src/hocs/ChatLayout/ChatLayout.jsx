import React, { useEffect, useState } from 'react'
import ChatList from '../../components/ChatListWindow/ChatList/ChatList'
import { Outlet } from 'react-router-dom'
import UserList from '../../components/UserList/UserList'


const ChatLayout = () => {


  const [isUserListOpen, setIsUserListOpen] = useState(false)

  return (
    <div className='main-container'>
      <UserList isUserListOpen={isUserListOpen} setIsUserListOpen={setIsUserListOpen} />
      <ChatList setIsUserListOpen={setIsUserListOpen} />
      <Outlet />
    </div>

  )
}

export default ChatLayout