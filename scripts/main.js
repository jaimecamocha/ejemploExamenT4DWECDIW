// Jaime Fernández Calvo
// https://github.com/jaimecamocha/ejemploExamenT4DWECDIW.git

import { TareasManager } from "./tareasManager.js";

const boton_agregar = document.getElementById('boton-agregar');
const lista_tareas = document.querySelector('.lista-tareas');
const boton_limpiar = document.querySelector('.boton-limpiar');

const tareaMananager = new TareasManager(lista_tareas);

//iniciamos la app web
tareaMananager.inicializarContador();
tareaMananager.listarTareas();

boton_agregar.addEventListener('click', () => {
    tareaMananager.agregarTarea("");
});

boton_limpiar.addEventListener('click', () => {
    tareaMananager.limpiarTodo();
})

lista_tareas.addEventListener('click', (event) => {
    const target = event.target;

    if(target.type === 'submit'){
        tareaMananager.eliminarTarea(target.parentElement.id);
    }
})
