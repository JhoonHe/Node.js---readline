const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function leerNota(i) {
    return new Promise((resolve, reject) => {
        rl.question(`Ingrese la nota #${i}: `, (value) => {
            resolve(parseFloat(value));
        })
    });
}

async function main() {

    let nota = 0;
    let notas = 0;
    let promedio = 0;

    for (let i = 1; i <= 3; i++) {
        nota = await leerNota(i);
        notas += nota;
    }

    promedio = notas / 3;

    rl.output.write(`El promedio de las notas ingresadas es de: ${promedio.toFixed(2)}\n`);
    rl.close();
}

main();
