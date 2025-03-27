import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useApiRequest } from '../../hooks/useApiRequest'
import ENVIRONMENT from '../../config/environment'
import Loader from '../../components/ui/Loader/Loader'
import Alert from '../../components/ui/Alert/Alert'
const RewritePasswordScreen = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const reset_token = searchParams.get('reset_token')
  const { sendPostRequest, responseApiState } = useApiRequest(ENVIRONMENT.API_URL + '/api/auth/rewrite-password')
  

  const { formState, handleInputChange, resetForm, errors } = useForm({
    password: "",
    password2: ""
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(Object.values(errors).some(error => error)) return; 
    sendPostRequest({
      password: formState.password,
      reset_token,

    })
    resetForm()
  }



  useEffect(() => {
    if (!reset_token) navigate('/')
  }, [])

  /* useEffect(() => {
    if (responseApiState.data) navigate('/')
  }, [responseApiState]) */


  return (

    <div className='form-container'>
      <h2>Restablecer tu contraseña</h2>
      <div className='form-container-columns'>
        <form action="" onSubmit={handleFormSubmit} className='form'>
          <div className='input-container'>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id='password'
              name='password'
              onChange={handleInputChange}
              value={formState.password} />
              {errors.password && <Alert errorMessage={errors.password} />}
          </div>
          <div className='input-container'>
            <label htmlFor="password2">Repetir contraseña</label>
            <input
              type="password"
              id='password2'
              name='password2'
              onChange={handleInputChange}
              value={formState.password2} />
              {errors.password2 && <Alert errorMessage={errors.password2} />}
          </div>


          {
            responseApiState.loading
            ? <Loader />
            : <button type='submit'>Cambiar contraseña</button>
          }

          {
            responseApiState.data
            && <Alert errorMessage='Contraseña restablecida'  type='success'/>
          }

{
            responseApiState.error
            && <Alert errorMessage={responseApiState.error} />
          }


          
          <Link to="/">Volver al login</Link>


        </form>
        <img src="/signup.svg" alt="Ilustración de registro de usuario" />
      </div>
    </div>


  )
}

export default RewritePasswordScreen