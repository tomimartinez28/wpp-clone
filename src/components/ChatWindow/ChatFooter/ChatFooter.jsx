import React, {useId, useState} from 'react'
import './ChatFooter.css'
import Input from '../../Input/Input'
import { BsEmojiLaughing } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
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
      <BsEmojiLaughing />
      <FiPlus />
      
      <form className='message-form' onChange={handleFormChange} onSubmit={handleSubmit}>
        <div className='message-input-container'>
          <Input placeholder={'Escribe un mensaje'}/>
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