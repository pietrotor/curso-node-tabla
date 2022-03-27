const fs = require('fs')
const colors = require('colors')
const crearArchivo = async (base = 5, listar, hasta) => {
    try {
        let salida = ''    
        console.log('=========================='.blue);
        console.log(`   Tabla del: ${base}`);
        console.log('=========================='.blue);    
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} * ${index} = ${base * index} \n `;
        }        
        listar && console.log(salida);    
        // fs.writeFileSync(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err
        //     console.log(`tabla-${base}.txt creada correctamente`);
        // })    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)  
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
        
}

module.exports = {
    crearArchivo
}