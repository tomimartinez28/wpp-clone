import React, { useContext, useEffect, useState } from 'react'
import './ChatList.css'
import ChatItem from '../ChatItem/ChatItem'
import ChatListHeader from '../ChatListHeader/ChatListHeader'
import ChatListFooter from '../ChatListFooter/ChatListFooter'
import { ChatsContext } from '../../../contexts/ChatsContext'
import { AuthContext } from '../../../contexts/AuthContext'
import Loader from '../../ui/Loader/Loader'


const ChatList = ({setIsUserListOpen}) => {
  const { chatsState, isChatlistOpen, getChatTitle, getChatImgSrc } = useContext(ChatsContext)
  const [filteredChats, setFilteredChats] = useState([])
  const { user } = useContext(AuthContext)





  return (
    <div className={`chatlist-window ${isChatlistOpen ? 'open' : 'close'}`}>
      <ChatListHeader setFilteredChats={setFilteredChats} setIsUserListOpen={setIsUserListOpen} />
      <div className='chatlist-items-container'>
        {
          chatsState
            ?
            chatsState.map(chat => {

              return (
                <ChatItem key={chat._id} _id={chat._id} avatar={getChatImgSrc(chat, user)} chat_title={getChatTitle(chat, user)} />
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