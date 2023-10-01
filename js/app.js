console.log("funcionando");

const formulario = document.getElementById("formulario");
const pintarToDo = document.getElementById("pintarToDo");
const templateTareas = document.getElementById("alertasTareas").content;
const alert = document.querySelector(".alert");

let tareas= [];

formulario.addEventListener("submit",e=>{
    e.preventDefault();
    // console.log("fomulario funcionando");

    const data = new FormData(formulario);
    const [todo] = [...data.values()]; //esto devuelve un array de los elementos y los valores de estos que contiene los input en este caso solo capturamos un input con su valor

    console.log(todo);

    alert.classList.add("d-none");

    if (!todo.trim()){
        console.log("Escriba una tarea para poder agregarla a la lista");
        alert.classList.remove("d-none");
        return;
    }


});