app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});const express = require('express');
const app = express();

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta de saludo
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta que recibe un nombre
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
