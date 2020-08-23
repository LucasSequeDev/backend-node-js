const app = require('./server/config');

function main() {
    try {
        app.listen(3000);
        console.log('Servidor UP en puerto 3000');
    } catch (error) {
        console.log('Ocurrio un error',error);
    }
}

main();

