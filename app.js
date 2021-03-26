//para utilizar correr en consola:
// node app -b=[base] -i=[inicio] -f=[fin] -l

// importamos el archivo que realiza la operación
const { boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// imprimir en consola la tabla de multiplicar del 5 del 1 al 10
crearArchivo(argv.b, argv.i,  argv.f, argv.l)
    .then(nombreArchivo => console.log(colors.brightBlue.italic.bold(nombreArchivo, 'creado')))
    .catch(err => console.log(err));

