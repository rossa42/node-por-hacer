const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por eliminar'

};

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca tarea como completado de la tarea por hacer'

};

const argv = require('yargs')
    .command('actualizar', 'actualiza estado completado de una tarea', { descripcion, completado })
    .command('listar', 'lista todas las tareas', { completado })
    .command('borrar', 'borra una tarea', { descripcion })
    .command('crear', 'crea una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}