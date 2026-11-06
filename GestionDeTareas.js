// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  //Se itera sobre caba tarea de la lista de tareas
  for(let tarea of lista){
    //Si la tarea esta completada (es decir es igual a true) se imprime con el estado completada
    if(tarea.completada === true){
      console.log(`nombre: ${tarea.nombre}, estado: Completada`);
    }else{
      //Si no se cumple la validación de arriba lo imprime con estado pendiente
      console.log(`nombre: ${tarea.nombre}, estado: Pendiente`);
    }
  }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  //El filter es como el map que puede recibir una función flecha como parametro (una función flecha dentro de una función dentro de otra 
  //función flecha)
  return lista.filter(objetoLista => objetoLista.completada === true);
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  //Copio lo de arriba pero le agrego false (lo que significa que la tarea sigue pendiente)
  return lista.filter(objetoLista => objetoLista.completada === false);
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  //se creará una copia del arreglo donde por cada elemento del arreglo se conservará sólo su nombre
  return lista.map(e => e.nombre);
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  //bastante simple, sólo devuelve la cantidad de elementos (tareas) en el arreglo, que en este caso serían 3
  return lista.length;
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    return mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    return obtenerCompletadas(this.tareas);
  },

  mostrarPendientes: function() {
    return obtenerPendientes(this.tareas);
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
function ejercicioCondicionalQueElProfeNoLePusoFirmaAlMetodo(lista){
  //Si el tamaño del arreglo es 0 es porque está vacío
  if(lista.length === 0){
    console.log("No hay Tareas");
    return;
  }
  //Se itera por cada tarea y si una de ellas no está completada termina la ejecución del método
  for(let tarea of lista){
    if(tarea.completada === false){
      return;
    }
  }
  //Si la condición del for no se cumple entonces se puede asumir que todas las tareas están completadas.
  console.log("Todas las tareas completadas")
}

// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 1;

switch (opcion) {
  case 1:
    sistema.mostrarTareas();
    break;

  case 2:
    console.log(sistema.mostrarCompletadas());
    break;

  case 3:
    console.log(sistema.mostrarPendientes());
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/
//Como el switch case no está envuelto en ningún método siempre se ejecuta la opción 1 al inicio
console.log("prueba del método mostrar tareas\n");
mostrarTareas(tareas);
console.log("Pueba del método obtener completadas\n");
console.log(obtenerCompletadas(tareas));
console.log("Prueba del método obtener pendientes\n");
console.log(obtenerPendientes(tareas));
console.log("Prueba del método obtener nombres\n");
console.log(obtenerNombres(tareas));
console.log("Prueba del método contar tareas\n");
console.log(contarTareas(tareas));
console.log("Prueba del método ejercicioCondicionalQueElProfeNoLePusoFirmaAlMetodo\n");
//No imprime nada porque no se cumple ninguna de las condiciones.
ejercicioCondicionalQueElProfeNoLePusoFirmaAlMetodo(tareas);