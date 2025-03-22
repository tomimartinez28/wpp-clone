const serverErrorMessages = {
    "Incorrect password": "Contraseña incorrecta",
    "Email not found": "Email no encontrado",
    "User email is not verified": "El email no está verificado",
    "This chat already exist": "Ya existe un chat con estos usuarios.",
    "Some users are not verified": "Alguno de los usuarios seleccionados, no estan verificados.",
    "Username already in use": "El nombre de usuario ya está en uso, proba uno diferente.",
    "Email already in use": "El email ya está en uso. Si no recordás tu contraseña podes restablecerla.",
    "User not found": "Usuario no encontrado",
    "User has already been verified": "El usuario ya fue verificado.",
    "Reset mail sent" : "Se ha enviado un correo para restablecer tu contraseña."

};

const getServerErrorMessage = (serverMessage) => {
    return serverErrorMessages[serverMessage] || "Ocurrió un error inesperado";
};


export default getServerErrorMessage