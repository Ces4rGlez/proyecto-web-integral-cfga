// Simulación de Validaciones para el Registro de Usuarios

// Función para validar el formato del correo electrónico
function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}
// Función para validar la fortaleza de la contraseña
function validarContraseña(contraseña) {
    const regexContraseña = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regexContraseña.test(contraseña);
}