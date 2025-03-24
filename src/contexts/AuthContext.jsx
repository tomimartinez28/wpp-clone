import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ENVIRONMENT from "../config/environment";
export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
    


    


    const verifyJwt = async () => {
        const userData = JSON.parse(sessionStorage.getItem('user'))
        const token = userData?.authorization_token
        if (!token) return logout()
        try {
            const response = await fetch(ENVIRONMENT.API_URL + '/api/auth/verify-jwt', {
                method: "GET",
                headers: {Authorization: `Bearer ${token}`}
            })

            const data = await response.json()
            if(!data.ok) throw new Error(data.message)
            setUser(data.payload.user)
            
        } catch(err) {
            console.error('Token invalido o expirado: ', err)
            logout()
        }
    }

    useEffect(()=> {
        verifyJwt()
    }, [])

    const logout = () => {
        sessionStorage.removeItem('user')
        setUser(null)

    }
    const login = (userData) => {
        sessionStorage.setItem('user', JSON.stringify(userData))
        setUser(userData)
    }

    useEffect(() => {
        if (user) {
            navigate('/home')
        } else {
            navigate('/login')
        }
    }, [user])

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            user

        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider