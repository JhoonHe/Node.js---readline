const rl = require('./rl-config');

function leerEntero(mensaje) {
    return new Promise((resolve, reject) => {
        rl.question(mensaje, (value => {
            resolve(parseInt(value));
        }));
    });
}

function leerFlotante(mensaje) {
    return new Promise((resolve, reject) => {
        rl.question(mensaje, (value => {
            resolve(parseFloat(value));
        }));
    });
}

function leerTexto(mensaje) {
    return new Promise((resolve, reject) => {
        rl.question(mensaje, (value => {
            resolve(value);
        }));
    });
}

module.exports = {
    leerEntero,
    leerFlotante,
    leerTexto
};