require('dotenv').config();

const app = require('./server/config');

function main() {
    try {
        app.listen(process.env.PORT || 5000);
        console.log('Servidor UP en puerto',process.env.PORT || 5000);
    } catch (error) {
        console.log('Ocurrio un error',error);
    }
}

main();

