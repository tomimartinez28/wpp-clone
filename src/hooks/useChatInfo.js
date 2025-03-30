import React, { useContext, useState, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"

const useChatInfo = (chat) => {
    const { user } = useContext(AuthContext)
    const [chatTitle, setChatTitle] = useState()
    const [chatAvatar, setChatAvatar] = useState()
    const [lastMessage, setLastMessage] = useState()

    

    useEffect(() => {
        if (!chat) return;
        const messages = chat.messages
        setLastMessage(messages[messages.length - 1])
        /* setLastMessage(chat.messages[messages.length - 1]) */
        if (chat.is_group) {
            setChatTitle(chat.group_name);
            setChatAvatar("https://cdn-icons-png.flaticon.com/512/69/69589.png");
        } else {


            const other_user = chat.members.find(member => member._id !== user?._id);

            setChatTitle(other_user?.username || "");
            setChatAvatar(other_user?.avatar || "");
        }
    }, [chat, user]);


    return { chatTitle, chatAvatar, lastMessage }

}

export default useChatInfo