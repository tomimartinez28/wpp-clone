import { useState } from "react"
import { ServerError } from "../utils/errors.utils";

export const useApiRequest = (url) => {

    const [responseApiState, setResponseApiState] = useState({
        loading: false,
        error: null,
        data: null
    })

    // Verificar si hay usuario en sessionStorage antes de hacer JSON.parse
    const storedUser = sessionStorage.getItem('user');
    const { authorization_token } = storedUser ? JSON.parse(storedUser) : {}

    // si hay authorization token lo mando al header
    const headers = {
        'Content-type' : 'application/json',
    }

    if(authorization_token) {
        headers['Authorization'] = `Bearer ${authorization_token}`
    }


    const sendPostRequest = async (body) => {

        setResponseApiState(prev => {
            return { ...prev, loading: true }
        })


        try {
            // aca hay que hacer una petición http
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(body)
                }
            )


            // trasnformo la response a json
            const data = await response.json()

            if (data.ok) {
                setResponseApiState(prev => {
                    return { ...prev, data, error: null }
                })
            } else {
                throw new ServerError(data.message, data.status)
            }


        } catch (err) {
            setResponseApiState(prev => {
                return { ...prev, error: err.message }


            })
        } finally {
            setResponseApiState(prev => {
                return { ...prev, loading: false }
            })
        }
    }

    const sendGetRequest = async () => {

        setResponseApiState(prev => {
            return { ...prev, loading: true }
        })
        try {
            // aca hay que hacer una petición http


            const response = await fetch(url, {
                method: 'GET',
                headers,
            });

            // trasnformo la response a json
            const data = await response.json()


            if (data.ok) {
                setResponseApiState(prev => {
                    return { ...prev, data, error: null }
                })
            } else {
                throw new ServerError(data.message, data.status)
            }


        } catch (err) {
            setResponseApiState(prev => {
                if (err.status) {
                    return { ...prev, error: err.message }
                }
                return { ...prev, error: 'No se pudo obtener la información al servidor.' }
            })
        } finally {
            setResponseApiState(prev => {
                return { ...prev, loading: false }
            })
        }
    }

    return { responseApiState, sendPostRequest, sendGetRequest }

}