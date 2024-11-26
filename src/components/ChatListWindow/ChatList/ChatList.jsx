import Reactm, { useState } from 'react'
import './ChatList.css'
import chats from '../../../data/chats'
import ChatItem from '../ChatItem/ChatItem'
import ChatListHeader from '../ChatListHeader/ChatListHeader'
import ChatListFooter from '../ChatListFooter/ChatListFooter'
import useIsDesktop from '../../../customHooks/useIsDesktop'


const ChatList = ({isChatListOpen, handleToggleChatList}) => {
  const [filteredChats, setFilteredChats] = useState(chats)
 
  
  return (
    <div className={`chatlist-window ${!isChatListOpen && 'close'}`}>
        <ChatListHeader setFilteredChats={setFilteredChats} />
        <div className='chatlist-items-container'>
          {filteredChats.map(chat => {
            return(
              <ChatItem key={chat.id} {...chat} onClick={handleToggleChatList} />
            )
          })}
        </div>
        
        <ChatListFooter/>

      
    </div>
  )
}

export default ChatList