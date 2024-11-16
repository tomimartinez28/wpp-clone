import Reactm, { useState } from 'react'
import './ChatList.css'
import chats from '../../../data/chats'
import ChatItem from '../ChatItem/ChatItem'
import ChatListHeader from '../ChatListHeader/ChatListHeader'
import ChatListFooter from '../ChatListFooter/ChatListFooter'


const ChatList = () => {
  const [filteredChats, setFilteredChats] = useState(chats)



  return (
    <div className='chatlist-window'>
        <ChatListHeader setFilteredChats={setFilteredChats} />
        <div className='chatlist-items-container'>
          {filteredChats.map(chat => {
            return(
              <ChatItem key={chat.id} {...chat}/>
            )
          })}
        </div>
        
        <ChatListFooter/>

      
    </div>
  )
}

export default ChatList