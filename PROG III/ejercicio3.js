class Tarea {
    constructor(titulo, estado = 'pendiente') {
        this.titulo = titulo;
        this.estado = estado;
    }

    marcarComoCompleta() {
        this.estado = 'completa';
    }
}

class ListaDeTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(titulo) {
        const nuevaTarea = new Tarea(titulo);
        this.tareas.push(nuevaTarea);
    }

    mostrarTareas() {
        this.tareas.forEach(tarea => {
            console.log(`Título: ${tarea.titulo} - Estado: ${tarea.estado}`);
        });
    }
}

// Ejemplo de uso
const listaTareas = new ListaDeTareas();

listaTareas.agregarTarea('Hacer la compra');
listaTareas.agregarTarea('Estudiar JavaScript');

// Marcamos la primera tarea como completa
listaTareas.tareas[0].marcarComoCompleta();

// Mostramos las tareas y sus estados
listaTareas.mostrarTareas();
