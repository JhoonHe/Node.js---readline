const rl = require('./rl-config');
const lectura = require('./lectura')

const main = async () => {

    let entero = await lectura.leerEntero('Ingrese un número entero: ');
    let flotante = await lectura.leerFlotante('Ingrese un número flotante: ');
    let texto = await lectura.leerTexto('Ingrese un texto: ');

    rl.output.write(`El número entero ingresado es: ${entero}\n`);
    rl.output.write(`El número flotante ingresado es: ${flotante}\n`);
    rl.output.write(`El texto ingresado es: ${texto}\n`);

    rl.close();
}

main();