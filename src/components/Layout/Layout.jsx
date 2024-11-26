import React from 'react'
import ChatList from '../ChatListWindow/ChatList/ChatList'


const Layout = ({children, isChatListOpen, handleToggleChatList}) => {
  


  return (
        <div className='main-container'>
            <ChatList isChatListOpen={isChatListOpen} handleToggleChatList={handleToggleChatList} />
            {children}
        </div>
    
  )
}

export default Layout