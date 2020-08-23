const conexion = require('../server/basedatos');

exports.obtenerEmpleados = (req, res) => {
    const query = 'SELECT e.*,sector,gerencia from empleados e left join sectores s on e.sector_id = s.id';

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
}

exports.obtenerEmpleado = (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).json({
                mensaje: 'El id del usuario es obligatorio'
            })
            return;
        }

        const query = `SELECT e.*,sector,gerencia from empleados e 
        left join sectores s on e.sector_id = s.id
        where e.id = ` + conexion.escape(id);

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
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrio un error en el servidor'
        });
    }
}

exports.obtenerEmpleadosSector = (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).json({
                mensaje: 'El sector es obligatorio'
            })
            return;
        }
        const query = `SELECT e.*,sector,gerencia from empleados e 
        left join sectores s on e.sector_id = s.id
        where s.id = ` + conexion.escape(id);

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
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrio un error en el servidor'
        });
    }

}

exports.actualizarEmpleado = (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).json({
            mensaje: 'El id del empleado es obligatorio.'
        })
        return;
    }

    const {nombre,legajo,sector_id} = req.body;
    
    if (!nombre || !legajo || !sector_id) {
        res.status(400).json({
            mensaje: 'Todos los campos son obligatorios.'
        })
        return;
    }

    const query = `UPDATE empleados set
        nombre = ${conexion.escape(nombre)}, legajo = ${conexion.escape(legajo)}, sector_id = ${conexion.escape(sector_id)}
        where id = ${conexion.escape(id)}`

    conexion.query(query, function(err,resultado){
        if (err) {
            console.log('Ocurrio un error al consultar en la BD',err)
            res.status(500).json({
                mensaje: 'Ocurrio un error en la base de datos'
            });
            return;
        }
        res.json({
            mensaje: "Se actualizo correctamente el empleado."
        });
    })
}