const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejemplo',
    post: '3306'
})

conexion.connect(function(error) {
    if(error) {
        console.log('Ocurrio un error en la base de datos')
    } else {
        console.log('Base de datos conectada!')
    }
})

module.exports = conexion;