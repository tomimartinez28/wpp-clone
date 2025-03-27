import React from 'react'
import './Alert.css'
const Alert = ({ errorMessage, type = 'error' }) => {

  return (
    <span className={`error-alert ${type}`}>{errorMessage}</span>
  )
}

export default Alert