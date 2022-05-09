import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express();

// Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada con éxito'))
    .catch( err => console.error(err))



// Definir puerto
const port = process.env.PORT || 3000;

// Obtener el año actual
app.use( (req, res, next) =>{

    const year= new Date();
        
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes'; 
    
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))


// Agregar router
app.use('/', router); 

// Habilitar PUG
app.set('view engine', 'pug');



// Definir carpeta publica
app.use(express.static('public'));




app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port} http://localhost:3000/`);
})