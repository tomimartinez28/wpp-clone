import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import ErrorAlert from '../../components/ui/ErrorAlert.jsx/ErrorAlert'
import getServerErrorMessage from '../../helpers/getErrorServerMessage'
import ENVIRONMENT from '../../config/environment'
import { useApiRequest } from '../../hooks/useApiRequest'
import Loader from '../../components/ui/Loader/Loader'
const ResetPasswordScreen = () => {

    const { handleInputChange, formState, resetForm } = useForm({ email: "" })
    const { responseApiState, sendPostRequest } = useApiRequest(ENVIRONMENT.API_URL + '/api/auth/reset-password')


    useEffect(() => {
        if(responseApiState?.data?.payload) {
            console.log(responseApiState);
        }
    }, [responseApiState])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        sendPostRequest(formState)

    }

    return (
        <div className='form-container'>
            <h2>Restablecer contraseña</h2>
            <div className='form-container-columns'>
                <form action="" onSubmit={handleFormSubmit} className='form'>

                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id='email'
                            name='email'
                            onChange={handleInputChange}
                            value={formState.email} />
                    </div>

                    {
                        responseApiState?.error
                        && <ErrorAlert errorMessage={getServerErrorMessage(responseApiState.error)} />


                    }

                    {
                        responseApiState?.loading
                            ? <Loader />
                            : <button type='submit'>Restablecer contraseña</button>
                    }

                    {
                        responseApiState?.data.ok
                        && <ErrorAlert type='success' errorMessage={getServerErrorMessage(responseApiState.data.message)} />
                    }





                    <Link to="/login">Iniciá sesión</Link>


                </form>
                <img src="/forgot-password.svg" alt="Ilustración de olvide mi contraseña" />
            </div>


        </div>
    )
}

export default ResetPasswordScreen