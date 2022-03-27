const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Sirve para imprimir la tabla'
    })
    .option('h', {
        alias: 'hast',
        type: 'numbre',
        default: 10,
        description: 'Sirve para poner el limite'
    })
    .check ((argv, optoins) => {
        if (isNaN(argv.base)) {
            throw ('Debe ser un número')
        }
        return true
    })
    .argv

module.exports = argv