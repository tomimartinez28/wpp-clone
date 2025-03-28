import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
const useMessageInfo = (message) => {

    const { user } = useContext(AuthContext)
    const [messageType, setMessageType] = useState()
    



    useEffect(() => {
      if(!user) return
    
        
        if (message.sender === user._id) {
           
            setMessageType('sent')
        } else {
            setMessageType('received')
        }
    }, [message, user]);


    return { messageType }

}

export default useMessageInfo