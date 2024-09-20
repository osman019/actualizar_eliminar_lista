import contenedorTareas from "./contenedorTareas.js";

function agregarTarea(input) {
  const tarjeta = document.createElement("div");
  tarjeta.style = `
    margin: 12px;
    display: flex;
    gap: 8px;
  `;

  const parrafoTarea = document.createElement("p");
  parrafoTarea.textContent = input.value.trim();

  input.value = null;

  const botonActualizar = document.createElement("button");
  botonActualizar.textContent = "actualizar";
  botonActualizar.style = `
    color: white;
    background-color: green;
    border: 1px solid grey;
  `;
  botonActualizar.addEventListener("click", () =>
    actualizarTarea(input, parrafoTarea)
  );

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "eliminar";
  botonEliminar.style = `
    color: white;
    background-color: red;
    border: 1px solid grey;
  `;
  botonEliminar.addEventListener("click", () => eliminarTarea(tarjeta));

  tarjeta.append(parrafoTarea, botonActualizar, botonEliminar);
  contenedorTareas.append(tarjeta);
}

function actualizarTarea(nuevaTarea, tarea) {
  tarea.textContent = nuevaTarea.value;
  nuevaTarea.value = "";
  nuevaTarea.placeholder = "¡Tarea actualizada!";

  setTimeout(() => {
    nuevaTarea.placeholder = "Ingresa tu tarea";
  }, 3000);
}

function eliminarTarea(tarjetaTarea) {
  tarjetaTarea.remove(); // elimina la tarea
}

export default agregarTarea;