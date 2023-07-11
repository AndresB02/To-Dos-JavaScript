//seleciconamos el evento de html desde js por medio del query selector
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

//---------------------------------------------------------------------
//ahora queremos escuchar ese boton, quiere decir que pasa saber cuando alguien da click saber cuando ocurre eso
//esto se hace mediante un listener en este para sera el evento de "click"
//y para agregar un listener se hace mediante =
//btn.addEventListener("click", function (evento) {
//se pausa el funcionamiento del evento al llamarlo en la funcion y luego añadirle el metodo .preventDefault, asi se evita que al darle click al boton la pagina se refresque y lo escrito se reinicie
//evento.preventDefault();
//al usar el value para poder acceder al valor del elemento y no encontrar nada, debemos incorporar dicha variable a la funcion del boton para que cuando se escriba algo en el input y el boton escuche la accion, alli el valor del input se tomara y lo absorbera el .value
//const input = document.querySelector("[data-form-input]");
//console.log(input.value);
//});

//--------------------------------------------------------------------
//arrow function o funciones anonimas

// btn.addEventListener("click", (evento) => {
//   evento.preventDefault();
//   const input = document.querySelector("[data-form-input]");
//   console.log(input.value);
// });

//-------------------------------------------------------------------------
//se crea un variable ya como arrow funcion para crear una tare y el codigo pasaria a quedar asi =

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]");
  const value = input.value;
  input.value = "";
  const task = document.createElement("li");
  task.classList.add("card");
  //traemos toda la seccion div del html para que en js se pueda moficiar dinamicamente cada tarear a ingresar
  const taskContent = document.createElement("div");
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);

  //task.innerHTML = content;
  task.append(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
};

btn.addEventListener("click", createTask);

//creamos una nueva funcion
