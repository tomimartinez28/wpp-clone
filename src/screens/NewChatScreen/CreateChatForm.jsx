import React, { useContext, useEffect } from 'react'
import { useApiRequest } from '../../hooks/useApiRequest'
import ENVIRONMENT from '../../config/environment'
import Loader from '../../components/ui/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import './CreateChatForm.css'

const CreateChatForm = ({ invited_ids }) => {
    const navigate = useNavigate()
    const { responseApiState, sendPostRequest } = useApiRequest(ENVIRONMENT.API_URL + '/api/chat/create')



    const handleFormSubmit = (e) => {
        e.preventDefault()

        sendPostRequest({
            invited_ids
        })


        

    }

    useEffect(() => {

        if (responseApiState?.data?.payload) {
            navigate('/home', { replace: true })
            window.location.reload()
        }
    }, [responseApiState])

    return (
        <form onSubmit={handleFormSubmit}>
            {
                responseApiState.loading
                    ? <Loader />
                    : <button type='submit' className='create-chat-btn'>Iniciar chat</button>
            }
        </form>
    )
}

export default CreateChatForm