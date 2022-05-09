import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js'


const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, res) => { // req - lo que enviamos : res - lo que express responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {

    // Consultar base de datos
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes
    })
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (e) {
        console.error(e)
    }
}

// Muestra un viaje por su slug

const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const resultado = await Viaje.findOne({
            where: { slug }
        });

        res.render('viaje', {
            pagina: 'Informacion viaje',
            resultado
        })
    } catch (error) {
        console.error(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}