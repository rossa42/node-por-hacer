const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('Archivo No Guardado!', err);
        console.log('Archivo Guardado!');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        istadoPorHacer = [];

    }
    // console.log(listadoPorHacer);
}
const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = (completado) => {
    cargarDB();
    let listado = listadoPorHacer.filter(tarea => {


        //     console.log("resultado", JSON.parse(tarea.completado) == JSON.parse(completado));
        return JSON.parse(tarea.completado) == JSON.parse(completado);
    });

    return listado;
}


const actualizar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
        console.log('borrar');
        cargarDB();

        let index = listadoPorHacer.findIndex(tarea => {
            return tarea.descripcion === descripcion;
        })
        console.log(index);
        if (index >= 0) {
            listadoPorHacer.splice(index);
            guardarDB();
            return true;
        } else {
            return false;
        }

    }
    /*
    let actualizar = (descripcion, completado) => {
        return new Promise((resolve, reject) => {
            if (completado == false) {
                reject('No se actualiza ' + completado);
            } else {
                resolve('Tarea Actualizada !' + descripcion);
            }
        });
    }

    */
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}