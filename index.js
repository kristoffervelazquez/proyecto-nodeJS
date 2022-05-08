import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 3000;

// Agregar router
app.use('/', router);

// Habilitar PUG
app.set('view engine', 'pug');








app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})