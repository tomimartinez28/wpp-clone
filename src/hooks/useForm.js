import { useState } from "react"

export const useForm = (initialState) => {

    const [formState, setFormState] = useState(initialState)
    const [errors, setErrors] = useState({})
    // funcion para validar campos
    const validateFields = (name, value) => {
        let error = ""
        if (name === 'password') {
            if (value.length < 6) {
                error = "La contraseña debe tener al menos 6 caracteres"
            } else if (!/[A-Z]/.test(value)) {
                error = "La contraseña debe incluir al menos una letra mayúscula.";
            } else if (!/\d/.test(value)) { // Verifica si hay al menos un número
                error = "La contraseña debe incluir al menos un número.";
            }
        }

        if (name === 'password2') {
            if (value !== formState.password) {
                error = "Las contraseñas no coinciden.";
            }
        }
        return error
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        // Actualiza el estado del formulario
        setFormState(prev => {
            return {
                ...prev,
                [name]: value
            }
        }
        )

        // Validar campo
        setErrors(prev => {
            return {
                ...prev,
                [name]: validateFields(name, value)
            }
        })
    }


    const resetForm = () => {
        setFormState(initialState)
        setErrors({})
    }

    return {
        formState,
        handleInputChange,
        resetForm,
        errors
    }

}   