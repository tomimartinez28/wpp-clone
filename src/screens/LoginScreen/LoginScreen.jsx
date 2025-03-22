import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useApiRequest } from '../../hooks/useApiRequest'
import ENVIRONMENT from '../../config/environment'
import { AuthContext } from '../../contexts/AuthContext'
import Loader from '../../components/ui/Loader/Loader'
import ErrorAlert from '../../components/ui/ErrorAlert.jsx/ErrorAlert'
import getServerErrorMessage from '../../helpers/getErrorServerMessage'

const LoginScreen = () => {

  const { login } = useContext(AuthContext)

  const { responseApiState, sendPostRequest } = useApiRequest(ENVIRONMENT.API_URL + '/api/auth/login')

  const { formState, resetForm, handleInputChange } = useForm({
    email: "",
    password: "",
  })


  useEffect(() => {
    if (responseApiState.data?.payload) {
      const { user } = responseApiState.data.payload
      login(user)
      resetForm()

    }
  }, [responseApiState])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    await sendPostRequest(formState)

  }

  
  return (

    <div className='form-container'>
      <h2>Iniciá sesión en Fake WhatsApp</h2>
      <div className='form-container-columns'>
        <form action="" onSubmit={handleFormSubmit} className='form'>
          <div className='input-container'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id='email'
              name='email'
              placeholder='ejemplo@correo.com'
              onChange={handleInputChange}
              value={formState.email}

            />
          </div>
          <div className='input-container'>
            <label htmlFor="email">Contraseña</label>
            <input
              type="password"
              name='password'
              id='password'
              onChange={handleInputChange}
              value={formState.password}
            />
          </div>
         

          {
            responseApiState?.error
            && <ErrorAlert errorMessage={getServerErrorMessage(responseApiState.error)} />
            

          }

          {
            responseApiState?.loading
              ? <Loader />
              : <div className='buttons-container'>
                <button type='submit'>Iniciar sesión</button>
                <Link to={'/reset-password'}>Olvidé mi contraseña</Link>
              </div>
          }





          <span>No tenes una cuenta? <Link to='/register'>Registrate</Link></span>


        </form>
        <img src="/login.svg" alt="Ilustracion de login" />
      </div>

    </div>



  )
}

export default LoginScreen