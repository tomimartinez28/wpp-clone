import React from 'react'
import ChatList from '../ChatListWindow/ChatList/ChatList'


const Layout = ({children}) => {
  


  return (
        <div className='main-container'>
            <ChatList />
            {children}
        </div>
    
  )
}

export default Layout