import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js'


const paginaInicio = async (req, res) => {

    // Consultar 3 viajes del modelo viaje y 3 testimoniales
    const promiseDB = []; 
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))

    try {
        // Se crea el promise que tiene los multiples awaits de entidades diferentes
        const result = await Promise.all(promiseDB);
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: result[0],
            testimoniales: result[1]
        })
    } catch (error) {
        console.error(error)
    }

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