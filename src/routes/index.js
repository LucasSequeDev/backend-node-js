const { Router } = require('express');
const router = Router();

const conexion = require('../server/basedatos');


// localhost:3000/api/
router.get('/',(req, res) => {
    console.log('Ruta ejecuta');

    res.send();
})

// localhost:3000/api/empleados
router.get('/empleados',(req, res) => {
    console.log('Ruta empleados ejecutada');

    const query = 'SELECT * from empleados';

    conexion.query(query, function(err,resultado){
        if (err) {
            console.log('Ocurrio un error al consultar en la BD',err)
            res.status(500).json({
                mensaje: 'Ocurrio un error en la base de datos'
            });
            return;
        }

        res.json(resultado);
    })
})

module.exports = router;