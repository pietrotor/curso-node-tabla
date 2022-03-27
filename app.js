const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')

console.clear()


crearArchivo(argv.base, argv.listar, argv.hasta)
    .then( archvio => console.log(`${archvio} creado correctamente`))
    .catch(err => console.log(err))

