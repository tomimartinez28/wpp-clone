import React from 'react'
import { useApiRequest } from '../../hooks/useApiRequest'
import { useForm } from '../../hooks/useForm'
import ENVIRONMENT from '../../config/environment'
import { Link, useNavigate } from 'react-router-dom'



const RegisterScreen = () => {
    const navigate = useNavigate()
    const { responseApiState, sendPostRequest } = useApiRequest(ENVIRONMENT.API_URL + '/api/auth/register')

    const { formState, handleInputChange, resetForm } = useForm({
        username: "",
        password: "",
        email: ""
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        sendPostRequest(formState)
        resetForm()
        navigate('/login')
    }


    return (


        <div className='form-container'>
            <h2>Create una cuenta</h2>
            <div className='form-container-columns'>
                <form action="" onSubmit={handleFormSubmit} className='form'>
                    <div className='input-container'>
                        <label htmlFor="username">Nombre de usuario</label>
                        <input
                            type="text"
                            id='username'
                            name='username'
                            onChange={handleInputChange}
                            value={formState.username} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            onChange={handleInputChange}
                            value={formState.email} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            onChange={handleInputChange}
                            value={formState.password}
                        />
                    </div>

                    <button type='submit'>Crear cuenta</button>
                    <Link to="/login">Ya tengo una cuenta</Link>


                </form>
                <img src="/signup.svg" alt="Ilustración de registro de usuario" />
            </div>


        </div>



    )
}

export default RegisterScreen