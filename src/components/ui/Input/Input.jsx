import React from 'react'
import './Input.css'

const Input = ({placeholder, name}) => {
  return (
    <div className='input-cointainer'>
      <label htmlFor={name} hidden></label>
      <input type="text" className='custom-input' placeholder={placeholder} name={name} id={name} />
    </div>
  )
}

export default Input