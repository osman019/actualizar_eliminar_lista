import agregarTarea from "./componentes/agregarTarea.js";
import contenedorTareas from "./componentes/contenedorTareas.js";
import crearTareaContenedor from "./componentes/crearTareaContenedor.js";
import titulo from "./componentes/titulo.js";
import tareaInput from "./componentes/tareaInput.js";
import botonEnviar from "./componentes/botonEnviar.js";

const root = document.getElementById("root");

root.append(titulo);
root.append(tareaInput);
root.append(botonEnviar);
root.append(contenedorTareas);
root.append(crearTareaContenedor);