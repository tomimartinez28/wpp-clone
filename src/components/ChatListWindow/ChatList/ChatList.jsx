import React, { useContext, useEffect, useState } from 'react'
import './ChatList.css'
import ChatItem from '../ChatItem/ChatItem'
import ChatListHeader from '../ChatListHeader/ChatListHeader'
import ChatListFooter from '../ChatListFooter/ChatListFooter'
import { ChatsContext } from '../../../contexts/ChatsContext'

import Loader from '../../ui/Loader/Loader'


const ChatList = ({ setIsUserListOpen }) => {
  const { chatsState, isChatlistOpen } = useContext(ChatsContext)
  const [filteredChats, setFilteredChats] = useState()




  useEffect(() => {
    setFilteredChats(chatsState); 
  }, [chatsState]);

  
  return (
    <div className={`chatlist-window ${isChatlistOpen ? 'open' : 'close'}`}>
      <ChatListHeader setFilteredChats={setFilteredChats} setIsUserListOpen={setIsUserListOpen} />
      <div className='chatlist-items-container'>


        {
          filteredChats
            ?
            filteredChats.map(chat => {


              return (
                <ChatItem key={chat._id} chat={chat} />
              )
            })
            : <Loader />
        }
      </div>

      <ChatListFooter />


    </div>
  )
}

export default ChatList