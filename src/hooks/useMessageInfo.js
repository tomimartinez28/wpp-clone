import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
const useMessageInfo = (message) => {

    const { user } = useContext(AuthContext)
    const [messageType, setMessageType] = useState()
    

    const getFormatedDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const getFormatedTime = (isoDate) => {
        const date = new Date(isoDate);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    useEffect(() => {
      if(!user) return
    
        
        if (message.sender === user._id) {
           
            setMessageType('sent')
        } else {
            setMessageType('received')
        }
    }, [message, user]);


    return { messageType, getFormatedDate, getFormatedTime }

}

export default useMessageInfo