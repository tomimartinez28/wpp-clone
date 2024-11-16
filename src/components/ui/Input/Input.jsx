import React from 'react'
import './Input.css'

const Input = ({placeholder, name, onChange}) => {
  return (
    <div className='input-cointainer'>
      <label htmlFor={name} hidden></label>
      <input type="text" className='custom-input' placeholder={placeholder} name={name} id={name} onChange={onChange} />
    </div>
  )
}

export default Input