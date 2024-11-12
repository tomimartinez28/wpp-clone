import React from 'react'
import ChatList from '../ChatListWindow/ChatList/ChatList'
import Chat from '../ChatWindow/Chat/Chat'
const MainContainer = () => {

  return (
    <div className='main-container'>
        <ChatList />

        <Chat />
    </div>
  )
}

export default MainContainer