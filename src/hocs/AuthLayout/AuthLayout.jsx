import React from 'react'
import WppLogo from '../../components/WppLogo'
import { Outlet } from 'react-router-dom'
import './AuthLayout.css'
import { Link } from 'react-router-dom'
const AuthLayout = () => {
    return (

        <div className='auth-layout'>
            <Link to="/">
                <span className='fake-wpp-logo'>
                    <WppLogo />
                    Fake Whatsapp
                </span>
            </Link>
            <Outlet />
        </div>

    )

}

export default AuthLayout