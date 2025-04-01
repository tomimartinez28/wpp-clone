import React, { useState, useRef, useEffect } from 'react'
import './Dropdown.css'

const Dropdown = ({buttonContent, children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({})
  const [isDropdownBtnActive, setIsDropdownBtnActive] = useState(false)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState)
    setIsDropdownBtnActive(prev => !prev)

  }

  const closeDropdown = () => {
    setIsOpen(false)
    setIsDropdownBtnActive(false)

  }


  useEffect(() => {
    // Posiciona el menú dropdown en función de la ubicación del botón
    const calculatePosition = () => {
      if (buttonRef.current && dropdownRef.current) { // si ambos elementos existen en el dom, sigue...
        
        // devuelve un objeto con las dimensiones y la posición del elemento en relación con el viewport
        const buttonRect = buttonRef.current.getBoundingClientRect() 
        const dropdownRect = dropdownRef.current.getBoundingClientRect() 

        // Verifico si se sale del viewport para la derecha o para abajo, nunca podria ser para izquierda o para arriba por como seteo la posicion.
        const isOverflowingRight = buttonRect.left + dropdownRect.width > window.innerWidth
        const isOverflowingBottom = buttonRect.bottom + dropdownRect.height > window.innerHeight

        
        console.log('isOverflowingRight', isOverflowingRight);

        setPosition({
          top: isOverflowingBottom ? 'auto' : buttonRect.bottom + window.scrollY, 
          bottom: isOverflowingBottom ? window.innerHeight - buttonRect.top : 'auto',
          left: isOverflowingRight ? 'auto' : buttonRect.left,
          right: isOverflowingRight ? window.innerWidth - buttonRect.right : 'auto',
        })
      }
    }

    if (isOpen) calculatePosition()

    // Cerrar el dropdown si se hace clic fuera de él
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        closeDropdown()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])


  return (
    <div>
        <button ref={buttonRef} onClick={toggleDropdown} className={`dropdown-btn ${isDropdownBtnActive && 'active'}`}>
          {buttonContent}
        </button>

        {/* Dropdown menu */}
        {
          isOpen &&
          (
            <div 
              className='dropdown'
              ref={dropdownRef}
              style={{
                position: 'absolute',
                top: position.top,
                bottom: position.bottom,
                left: position.left,
                right: position.right,
                zIndex: 10,
              }}
              >
              {children}
            </div>
          )
        }
    </div>
  )
}

export default Dropdown