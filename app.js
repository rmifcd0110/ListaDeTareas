//Seleccionar los elementos del DOM que vamos a usar
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

//Hacer la función para agregar la tarea
addTaskBtn.addEventListener('click', function(){
    const taskText = taskInput.value;
    if (taskText === ''){
        alert('Por favor, introduce una tarea');
        return;
    }

    //Creamos un nuevo li
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    //Creamos un botón para eliminar la tarea
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.style.marginLeft = '10px';

    //Marcar la tarea como completada al hacer clic
    newTask.addEventListener('click', function(e){
        e.stopImmediatePropagation();
        newTask.classList.toggle('complete');//añade y quita la clase
    });

    //Eliminar la tarea al hacer clic en el botón eliminar
    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(newTask);
    });

    //Agregar el bóton eliminar al elemento li
    newTask.appendChild(deleteBtn);

    //Agregar un nuevo li a la lista de tareas
    taskList.appendChild(newTask);

    //Limpiar el campo de entrada
    taskInput.value = '';


});
