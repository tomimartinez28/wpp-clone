import { useState } from "react"

export const useForm = (initialState) => {

    const [formState, setFormState] = useState(initialState)

    const handleInputChange = (e) => {
        setFormState(prev => {
            return { ...prev, [e.target.name]: e.target.value}
        }
        )
    }

    const resetForm = () => {
        setFormState(initialState)
    }

    return { formState, handleInputChange, resetForm }

}   