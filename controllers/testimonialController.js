const guardarTestimonial = (req, res) => {
    // Validar
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacío' })
    }
    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo está vacío' })
    }
    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje está vacío' })
    }

    if(errores.length > 0) {
        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'testimoniales',
            errores,
            nombre, 
            correo, 
            mensaje
        })
    }else{
        // Almacenarlo en la base de datos
    }
}


export {
    guardarTestimonial
}