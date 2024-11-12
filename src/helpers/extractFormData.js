const extractFormData = (formJsx) => {
    const formData = new FormData(formJsx)

    const formKeys = formData.keys().toArray()

    const formValues = {}

    for (let key of formKeys) {
        formValues[key] = formData.get(key)
    }
    return formValues
}

export default extractFormData