// Jaime Fernández Calvo
// https://github.com/jaimecamocha/ejemploExamenT4DWECDIW.git

export class Tarea{
    constructor(id, descripcion){
        this.id = id;
        this.descripcion = descripcion;
    }

    editar(descripcion){
        this.descripcion = descripcion;
    }
}