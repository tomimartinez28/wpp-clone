import React, { useEffect, useState } from 'react'
import './NewChatScreen.css'
import { useApiRequest } from '../../hooks/useApiRequest'
import ENVIRONMENT from '../../config/environment'
import { useParams } from 'react-router-dom'
import Loader from '../../components/ui/Loader/Loader'
import CreateChatForm from './CreateChatForm'
const NewChatScreen = () => {
  const { user_id } = useParams()

  const { responseApiState, sendGetRequest } = useApiRequest(ENVIRONMENT.API_URL + `/api/auth/get-user/${user_id}`)
  const [foundUser, setFoundUser] = useState('')

  useEffect(() => {
    sendGetRequest()
  }, [user_id])

  useEffect(() => {
    if (responseApiState?.data?.payload) {
      setFoundUser(responseApiState.data.payload.foundUser)
    }
  }, [responseApiState])



  return (
    <div className='new-chat-screen'>

      {
        foundUser
          ? <>
              <span className='user-avatar'>
                <img src={`${ENVIRONMENT.API_URL}${foundUser.avatar}`} alt={`Foto de perfil de ${foundUser.username}`} />
              </span>

            <h2>Iniciá una conversación con
              <span> {foundUser.username}</span>
            </h2>
          </>
          : <Loader />
      }
      <CreateChatForm invited_ids={user_id} />

    </div>
  )
}

export default NewChatScreen