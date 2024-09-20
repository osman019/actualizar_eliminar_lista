import agregarTarea from './agregarTarea.js';
import tareaInput from './tareaInput.js';

const botonEnviar = document.createElement('button');
botonEnviar.textContent = 'Enviar';
botonEnviar.style = `
  padding: 8px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;



export default botonEnviar;