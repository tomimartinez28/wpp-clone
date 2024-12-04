import React, {useContext, useId, useState} from 'react'
import './ChatFooter.css'
import Input from '../../ui/Input/Input';
import { BsEmojiLaughing } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { ChatsContext } from '../../../contexts/ChatsContext';
import Dropdown from '../../ui/Dropdown/Dropdown';

const ChatFooter = ({chat_id}) => {
  const [isWriting, setIsWriting] = useState(false)
  const { createNewMessage } = useContext(ChatsContext)
  
  const handleFormChange = (e) => {
    const writtenText = e.target.value
    setIsWriting(writtenText !== '')
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const newMessageText = event.target['text'].value
    if (newMessageText === '') return

    createNewMessage(newMessageText, chat_id)
    
  

    // Limpia el formular io 
    event.target.reset()
    setIsWriting(false)
  }


  return (
    <footer className='chat-footer'>
      <div className='chat-footer-icons'>
        
          <Dropdown buttonContent={<BsEmojiLaughing />} >

          <div className='dropdown-message'>
            Esta funcionalidad no esta lista aún.
          </div>
          </Dropdown>
        
        <Dropdown buttonContent={<FaPlus />}>
          <div className="dropdown-message">
              Esta funcionalidad no esta lista aún.
          </div>
        </Dropdown>
        
        
      </div>
      
      <form className='message-form' onChange={handleFormChange} onSubmit={handleSubmit}>
        <div className='message-input-container'>
          <Input placeholder={'Escribe un mensaje'} name={'text'}/>
        </div>
        {
          isWriting
          ? <button type='submit'><IoSend /></button>
          : <Dropdown buttonContent={<IoMdMic />}>
              <div className="dropdown-message">Todavía no es posible enviar audios.</div>
            </Dropdown>
        }
       
      </form>
    </footer>
  )
}

export default ChatFooter