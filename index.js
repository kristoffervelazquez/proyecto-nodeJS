import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 3000;

// Obtener el año actual
app.use( (req, res, next) =>{

    const year= new Date();
        
    res.locals.actualYear = year.getFullYear(); 
    console.log(res.locals)
    next();
})


// Agregar router
app.use('/', router); 

// Habilitar PUG
app.set('view engine', 'pug');



// Definir carpeta publica
app.use(express.static('public'));




app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
})