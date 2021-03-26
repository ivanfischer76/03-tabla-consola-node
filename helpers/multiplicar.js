
// importamos la librería de node para manejar archivos
const fs = require('fs'); 
// para más información sobre este paquete consultar la documentación en
// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

//importamos la librería colores para manejar los colores de la consola
const colors = require('colors');

// creamos una función que recibe un argumento
const crearArchivo = async (base = 5, inicio=1, fin = 10, listar = false) => {
    try {
        // creamos encabezado
        let salida = '\n====================\n    Tabla del '+base+'\n====================\n';
        // limpiamos la consola
        console.clear();
        // creamos la tabla
        
        for (let i=inicio; i<=fin; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        // mostramos la tabla en la consola con colores
        if(listar){
            console.log(colors.rainbow('\n===================='));
            console.log(colors.brightBlue.bold('   Tabla del ')+colors.red.bold(base));
            console.log(colors.brightBlue.bold('   del ')+colors.yellow.bold(inicio)+colors.brightBlue.bold(' al ')+colors.yellow.bold(fin));
            console.log(colors.rainbow('====================\n'));
            for (let i=inicio; i<=fin; i++){
                console.log(colors.brightRed.italic.bold(' ' +base)+colors.green(' x ')+colors.yellow.bold(i)+ colors.green(' = ')+colors.magenta.bold(`${base*i}`));
            }
        }
        // guardamos la tabla en un archivo en la carpeta tablas
        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);
        // retornamos el nombre del archivo con la tabla creada
        return `tabla-${base}.txt`;
    }catch(error){
        // si se produce un error lo lanzamos
        throw error;
    }
}

//exportamos el archivo para poder utilizarlo en otro archivo
module.exports = {
    crearArchivo
}