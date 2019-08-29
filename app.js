const argv = require('./config/yargs').argv;
const colors = require('colors');

//console.log(argv);
let comando = argv._[0];
const porHacer = require('./por-hacer/por-hacer');

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        for (let tarea of listado) {
            console.log('======Por hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('====================='.green);
        }
        break;
    case 'actualizar':
        let resultado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(resultado);

        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;
    default:
        console.log('Comando no es reconocido');

}

/* actualizar(argv.d, argv.c)
           .then(resultado => console.log(resultado))
           .catch(e => console.log(e));*/