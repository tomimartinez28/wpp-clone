import React, { useState, useEffect, useContext, useRef } from 'react'
import Loader from '../../components/ui/Loader/Loader'
import { useApiRequest } from '../../hooks/useApiRequest'
import './ProfileScreen.css'
import ENVIRONMENT from '../../config/environment'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const ProfileScreen = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const { responseApiState, sendGetRequest } = useApiRequest(ENVIRONMENT.API_URL + `/api/auth/get-user/${user._id}`)
  const [userInfo, setUserInfo] = useState()
  const fileInputRef = useRef()
  const storedUser = sessionStorage.getItem('user');
  const { authorization_token } = storedUser ? JSON.parse(storedUser) : {}
  const [file, setFile] = useState()



  useEffect(() => {
    if (responseApiState?.data) {
      setUserInfo(responseApiState.data.payload.foundUser)
    }
  }, [responseApiState])

  useEffect(() => {
    sendGetRequest()
  }, [])

  const handleAvatarClick = () => {
    fileInputRef.current.click()
  }
  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      setFile(reader.result)
    }
    reader.readAsDataURL(file)
  }

  useEffect(() => {
    if (file) {
      const updateAvatar = async () => {

        const body = {
          avatar: file,
        }
        try {

          const response = await fetch(ENVIRONMENT.API_URL + '/api/auth/update-user-avatar', 
            {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${authorization_token}`,
              'Content-Type' : 'Application/json'
            },
            body: JSON.stringify(body),
            
          })

          if (response.ok) {
            console.log('Avatar atualizado correctamente');
            
          }

        } catch (err) {
          console.log(err);
        }
      }
      updateAvatar()

    }

  }, [file])

  return (
    < div className='profile-screen' >
      {
        userInfo
          ?
          <>
            <h2>Mi perfil</h2>


            <div className='user-avatar-container'>

              <img src={`${file ? file : userInfo.avatar}`} alt={`avatar de ${userInfo.username}`} />
              <div className='avatar-overlay' onClick={handleAvatarClick}>
                Cambiar imagen
              </div>
              <form action="" encType='multipart/form-data'>
                <input
                  id='avatar'
                  name='avatar'
                  type="file"
                  accept='image/*'
                  ref={fileInputRef}
                  onChange={handleAvatarChange}
                  style={{ display: 'none' }}
                />

              </form>

            </div>



            <div className='user-info'>
              <div className="user-info-username">
                <span>Nombre de usuario</span>
                <p>{userInfo && userInfo.username}</p>
              </div>
              <div className="user-info-info">
                <span>Email</span>
                <p>{userInfo.email}</p>
              </div>
            </div>
          </>
          : <Loader />
      }


    </div >

  )
}

export default ProfileScreen