import React from 'react'
import { useApiRequest } from '../../hooks/useApiRequest'
import { useForm } from '../../hooks/useForm'
import ENVIRONMENT from '../../config/environment'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../../components/ui/Alert/Alert'
import Loader from '../../components/ui/Loader/Loader'
import getServerErrorMessage from '../../helpers/getErrorServerMessage'

const RegisterScreen = () => {
    const { responseApiState, sendPostRequest } = useApiRequest(ENVIRONMENT.API_URL + '/api/auth/register')

    const { formState, handleInputChange, resetForm, errors } = useForm({
        username: "",
        password: "",
        password2: "",
        email: ""
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (Object.values(errors).some(error => error)) return;
        sendPostRequest(formState)
        resetForm()
        
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
                        {errors.username && <Alert errorMessage={errors.username} />}
                    </div>
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            onChange={handleInputChange}
                            value={formState.email} />
                        {errors.email && <Alert errorMessage={errors.email} />}
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
                        {errors.password && <Alert errorMessage={errors.password} />}
                    </div>
                    <div className='input-container'>
                        <label htmlFor="password2">Confirmar contraseña</label>
                        <input
                            type="password"
                            id='password2'
                            name='password2'
                            onChange={handleInputChange}
                            value={formState.password2}
                        />
                        {errors.password2 && <Alert errorMessage={errors.password2} />}
                    </div>



                    {
                        responseApiState.loading
                            ? <Loader />
                            : <button type='submit'>Crear cuenta</button>
                    }
                    {
                        responseApiState.error
                        && <Alert errorMessage={getServerErrorMessage(responseApiState.error)} />
                    }
                    {
                        responseApiState?.data?.ok
                        && <Alert type='success' errorMessage='Usuario creado. Revisá tu correo electrónico.' />
                    }

                    <Link to="/">Ya tengo una cuenta</Link>

                </form>
                <img src="/signup.svg" alt="Ilustración de registro de usuario" />
            </div>


        </div>



    )
}

export default RegisterScreen