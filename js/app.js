console.log("funcionando");

const formulario = document.getElementById("formulario");
const pintarToDo = document.getElementById("pintarToDo");
const templateTareas = document.getElementById("alertasTareas").content;
const alert = document.querySelector(".alert");

let tareas = [];

document.addEventListener("click", (event) =>{
  
    console.log(event.target);




});





formulario.addEventListener("submit", e => {
    e.preventDefault();
    // console.log("fomulario funcionando");

    const data = new FormData(formulario);
    const [todo] = [...data.values()]; //esto devuelve un array de los elementos y los valores de estos que contiene los input en este caso solo capturamos un input con su valor


    alert.classList.add("d-none");

    if (!todo.trim()) {
        console.log("Escriba una tarea para poder agregarla a la lista");
        alert.classList.remove("d-none");
        return;
    }

    agregarTodo(todo);
    pintarTarea();

});



const agregarTodo = (todo) => {

    const tarea = {
        nombre: todo,
        id: `${Date.now()}`
    }

    tareas.push(tarea);
    // console.log(tareas);

}

const pintarTarea = () => {

    pintarToDo.textContent = "";
    const fragment = document.createDocumentFragment();

    tareas.forEach(item => {
        const clone = templateTareas.cloneNode(true);
        clone.querySelector("p").textContent = item.nombre;
        clone.querySelector(".eliminar").dataset.id = item.id;
        fragment.appendChild(clone);
        
    });

    pintarToDo.appendChild(fragment);

}








