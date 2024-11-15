import React, {useId, useState} from 'react'
import './ChatFooter.css'
import Input from '../../ui/Input/Input';
import { BsEmojiLaughing } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import extractFormData from '../../../helpers/extractFormData';
import getFormattedTime from '../../../helpers/getFormattedTime';


const ChatFooter = ({handleNewMessage}) => {
  const [isWriting, setIsWriting] = useState(false)
  const newMessageId = useId()
  const handleFormChange = (e) => {
    const writtenText = e.target.value
    setIsWriting(writtenText !== '')
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const newMessage = extractFormData(event.target)
    if (newMessage.text === '') return
    newMessage['id'] = new Date().getMilliseconds()
    newMessage['time'] = getFormattedTime()
    newMessage['status'] = 'received'
    newMessage['type'] = 'sent'
    handleNewMessage(newMessage)

    // Limpia el formular io 
    event.target.reset()
    setIsWriting(false)

    
  }


  return (
    <footer className='chat-footer'>
      <div className='chat-footer-icons'>
        <span>
          <BsEmojiLaughing />
        </span>
        <span>
        <FaPlus />
        </span>
      </div>
      
      <form className='message-form' onChange={handleFormChange} onSubmit={handleSubmit}>
        <div className='message-input-container'>
          <Input placeholder={'Escribe un mensaje'} name={'text'}/>
        </div>
        {
          isWriting
          ? <button type='submit'><IoSend /></button>
          : <button type='submit'><IoMdMic /></button>
        }
       
      </form>
    </footer>
  )
}

export default ChatFooter