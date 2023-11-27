b// Jaime Fernández Calvo
// https://github.com/jaimecamocha/ejemploExamenT4DWECDIW.git

import { Tarea } from './tarea.js';

export class TareasManager{
    constructor(listaTareas){
        this.arregloTareas = [];
        this.contador = 0;
        this.listaTareas = listaTareas;
    }

    agregarTarea(descripcion){
        this.contador++;
        const nuevaTarea = new Tarea(this.contador, descripcion);
        this.arregloTareas.push(nuevaTarea);
        this.setContador();
        this.setArregloTareas();
    }

    listarTareas(){
        this.listaTareas.innerHTML = ' ';
        this.arregloTareas.reverse().forEach((tarea) => {
            this.listaTareas.innerHTML += `
            <li id="${tarea.id}">
            <input type="text" class "input-tarea" value="${tarea.descripcion}">
            <button class="boton-eliminar>X</button>
            </li>
            `;
        });
    }

    editarTarea(idTarea, descripcion){
        const tarea = this.arregloTareas.find((t) => t.id == idTarea);
        if(tarea){
            tarea.editar(descripcion);
            this.setArregloTareas();
        }
    }

    eliminarTarea(idTarea){
        this.arregloTareas = this.arregloTareas.filter((t) => t.id != idTarea);
        this.setArregloTareas();
    }
}