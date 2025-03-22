import React from 'react'
import './ErrorAlert.css'
const ErrorAlert = ({ errorMessage, type = 'error' }) => {

  return (
    <span className={`error-alert ${type}`}>{errorMessage}</span>
  )
}

export default ErrorAlert