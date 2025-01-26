document.addEventListener ('DOMContentLoaded', ()=>{

const addButton = document.getElementById ('add-task-btn')
const taskInput = document.getElementById ('task-input')
const taskList = document.getElementById ('task-list')


function addTask (){
   const taskText = taskInput.value.trim ()

   if (taskText=== ""){
    alert('please enter a task')
    return;
   }

const taskitem = document.createElement ('li')
taskitem.textContent = taskText
taskList.appendChild(taskitem)

const removebt= document.createElement('button')
removebt.textContent = "Remove"
removebt.className = "remove-btn"
removebt.addEventListener ('click', () => {
    taskList.removeChild (taskitem)
})


taskitem.appendChild(removebt)


taskList.appendChild(taskitem)


taskInput.value = ""

}

addButton.addEventListener ('click', addTask);
taskInput.addEventListener ('keypress', (event) =>{
if (event.key===Enter){
    addTask ();
}
})












})