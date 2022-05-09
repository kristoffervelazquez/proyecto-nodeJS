import express from "express"
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje} from  '../controllers/paginasController.js'

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
            // :slug es el comodin que va tomar los el parametro de busqueda y lo manda al controlador
router.get('/viajes/:slug', paginaDetalleViaje);


router.get('/testimoniales', paginaTestimoniales);
export default router;