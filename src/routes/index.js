const { Router } = require('express');
const router = Router();

const empleadosController = require('../controller/empleadosController')

// localhost:3000/api/
router.get('/',(req, res) => {
    console.log('Ruta ejecuta');

    res.send();
})

// localhost:3000/api/empleados
router.get('/empleados',empleadosController.obtenerEmpleados);
router.get('/empleado/:id',empleadosController.obtenerEmpleado);
router.get('/empleados/sector/:id',empleadosController.obtenerEmpleadosSector);
router.put('/empleado/:id',empleadosController.actualizarEmpleado);

module.exports = router;