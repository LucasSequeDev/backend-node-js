const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    post: process.env.DB_PORT
})

conexion.connect(function(error) {
    if(error) {
        console.log('Ocurrio un error en la base de datos')
    } else {
        console.log('Base de datos conectada!')
    }
})

module.exports = conexion;