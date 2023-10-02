console.log("funcionando");

const formulario = document.getElementById("formulario");
const pintarToDo = document.getElementById("pintarToDo");
const templateTareas = document.getElementById("alertasTareas").content;
const alert = document.querySelector(".alert");

let tareas = [];


document.addEventListener("DOMContentLoaded",()=>{ //El DOMContentLoadedevento se activa cuando el documento HTML se ha analizado por completo y todos los scripts diferidos 

  localStorage.getItem("tareas");
  
  if(localStorage.getItem("tareas")){

    tareas = JSON.parse(localStorage.getItem("tareas")); // pasando de JSON a Array
    pintarTarea();//pintando las tareas almacenadas
  }

});

document.addEventListener("click", (event) =>{
  
    console.log(event.target);

    if(event.target.matches(".eliminar")){

        tareas = tareas.filter(item => item.id !== event.target.dataset.id);
        pintarTarea();
    }

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

    localStorage.setItem('tareas', JSON.stringify(tareas));

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








