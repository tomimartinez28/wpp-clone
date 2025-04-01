import React from 'react'
import './Input.css'

const Input = ({placeholder, name, handleInputChange, value}) => {
  
  return (
    <div className='input-cointainer'>
      <label htmlFor={name} hidden></label>
      <input type="text" className='custom-input' placeholder={placeholder} name={name} id={name} onChange={handleInputChange} value={value}/>
    </div>
  )
}

export default Input