

const getFormattedTime = () => {
    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()
    
    const formattedTime = `${hour}:${minutes}`
    return formattedTime
}

export default getFormattedTime