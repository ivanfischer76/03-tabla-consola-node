
//importamos el paquete yargs, la propiedad argv
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    deafult: 0,
                    demandOption: true,
                    describe: 'indica multiplicando'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    demandOption: false,
                    describe: 'muestra la tabla de multiplicar en pantalla'
                })
                .option('i',{
                    alias: 'inicio',
                    type: 'number',
                    default: 1,
                    demandOption: false,
                    describe: 'indica el mínimo multiplicador'
                })
                .option('f',{
                    alias: 'fin',
                    type: 'number',
                    default: 10,
                    demandOption: false,
                    describe: 'indica el máximo multiplicador'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;