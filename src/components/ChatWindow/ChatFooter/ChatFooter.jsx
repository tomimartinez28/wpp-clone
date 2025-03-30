import React, { useContext, useEffect, useId, useState } from 'react'
import './ChatFooter.css'
import Input from '../../ui/Input/Input';
import { BsEmojiLaughing } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { ChatsContext } from '../../../contexts/ChatsContext';
import Dropdown from '../../ui/Dropdown/Dropdown';
import { useForm } from '../../../hooks/useForm';
import { useApiRequest } from '../../../hooks/useApiRequest';
import ENVIRONMENT from '../../../config/environment';
const ChatFooter = ({ chat_id }) => {

  const [isWriting, setIsWriting] = useState(false)
  const { handleInputChange, formState, resetForm } = useForm({ text: '' })
  const { sendMessage } = useContext(ChatsContext)
  const { responseApiState, sendPostRequest } = useApiRequest(ENVIRONMENT.API_URL + `/api/message/create/${chat_id}`)
  const [newMessageState, setNewMessageState] = useState()

  useEffect(() => {
    if (responseApiState?.data?.ok) {
      sendMessage({
        content: newMessageState,
        chat_id: chat_id
      })
    }
  }, [responseApiState.data])

  const handleFormChange = (e) => {
    const writtenText = e.target.value
    setIsWriting(writtenText !== '')
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessageText = e.target['text'].value
    if (newMessageText === '') return
    setNewMessageState(newMessageText)
    


   
    sendPostRequest({content: newMessageText})


    // Limpia el formular io 
    resetForm()
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
          <Input placeholder={'Escribe un mensaje'} name='text' handleInputChange={handleInputChange} value={formState?.text} />
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