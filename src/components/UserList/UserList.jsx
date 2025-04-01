import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './UserList.css'
import Input from '../ui/Input/Input'
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useApiRequest } from '../../hooks/useApiRequest';
import ENVIRONMENT from '../../config/environment';
import { ChatsContext } from '../../contexts/ChatsContext';

const UserList = ({ isUserListOpen, setIsUserListOpen }) => {

    const { responseApiState, sendGetRequest } = useApiRequest(ENVIRONMENT.API_URL + '/api/auth/get-all-users')
    const [users, setUsers] = useState([])
    const { handleToggleChatlist } = useContext(ChatsContext)
    const [filteredUsers, setFilteredUsers] = useState(users)

    const handleInputChange = (e) => {
        const searchedValue = e.target.value.toLowerCase();
    
        if (searchedValue === "") {
          // Si el input está vacío, mostrar todos los chats
          setFilteredUsers(users);
          return;
        }
    
        const filteredUsers = users.filter(user => user.username.toLowerCase().includes(searchedValue));
    
        setFilteredUsers(filteredUsers);
      };
    

    useEffect(() => {
        setFilteredUsers(users)
    },[users])

    useEffect(() => {
        sendGetRequest()
        
    }, [])

    useEffect(() => {
        if (responseApiState?.data) {
            setUsers(responseApiState.data.payload.usersList)
        }
    }, [responseApiState])

    const onClick = () => {
        setIsUserListOpen(prev => !prev)
        handleToggleChatlist()


    }


    return (
        <header className={`user-list ${isUserListOpen ? 'open' : 'close'}`}>
            <header className='user-list-header'>

                <div className='user-list-header-title'>
                    <FaArrowLeft onClick={() => setIsUserListOpen(false)} />
                    <h3>Iniciá un nuevo chat</h3>

                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='chat-searcher'>
                        <span><IoSearch /></span>
                        <Input placeholder='Buscar' name='searcher' handleInputChange={handleInputChange} />
                    </div>
                </form>

            </header>
            <div className='user-list-items-container'>

                {
                    filteredUsers.map(user => {
                        return (
                            <Link key={user._id} to={`/new-chat/${user._id}`} onClick={onClick}>
                                <div className='chat-item'>
                                    <span className='user-avatar'>
                                        <img src={user.avatar} alt={`Foto de perfil de `} />
                                    </span>
                                    <div className='chat-item-info'>
                                        <div className='chat-item-info header'>
                                            <h3>{user.username}</h3>
                                        </div>

                                        <div className='chat-item-info info'>
                                            <p className='email'>{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })

                }

            </div>
            <div className="user-list-footer">

            </div>
        </header>
    )
}

export default UserList