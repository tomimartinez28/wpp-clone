import React from 'react'
import './Input.css'

const Input = ({placeholder}) => {
  return (
    <div>
      <label htmlFor="text" hidden></label>
      <input type="text" className='custom-input' placeholder={placeholder} name='text' id='text' />
    </div>
  )
}

export default Input