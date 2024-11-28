import React, { useContext } from 'react'
import './HomeScreen.css'
import { Link } from 'react-router-dom'
import { FaLock } from "react-icons/fa";

const HomeScreen = () => {

  
  
  return (
    <div className='home-screen'>
        <div className='home-screen image-container'>
            <img src="https://static.whatsapp.net/rsrc.php/v3/yS/r/aGcVD59xVTb.png" alt="Imagen de una notebook con WhatsApp abierto" />
        </div>
        <h1 className='home-screen-title'>Descarga WhatsApp para Mac</h1>
        <p className='home-screen-text'>Descarga la aplicación para Mac y haz llamadas con mayor rapidez.</p>

        <Link to='https://web.whatsapp.com/' target='_blank'><button className='home-screen-btn'>Descargar del App Store</button></Link>
        <div className='home-screen-security-msg'><FaLock />Tus mensajes personales están cifrados de extremo a extremo.</div>
    </div>
  )
}

export default HomeScreen