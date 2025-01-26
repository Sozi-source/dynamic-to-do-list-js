// Attach Event Listeners:
document.addEventListener ('DOMContentLoaded', ()=>{

// Select DOM Elements:
const addButton = document.getElementById ('add-task-btn')
const taskInput = document.getElementById ('task-input')
const taskList = document.getElementById ('task-list')


// Create the addTask Function:
function addTask (){
   const taskText = taskInput.value.trim()

   if (taskText=== ""){
    alert('please enter a task')
    return;
   }
// Task Creation and Removal:
const taskItem = document.createElement ('li')
taskItem.classList.add('task-item')
taskItem.textContent = taskText
taskList.appendChild(taskItem)

const removeBt= document.createElement('button')
removeBt.textContent = "Remove"
removeBt.className = "remove-btn"
removeBt.addEventListener ('click', () => {
    taskList.removeChild (taskItem)
})


taskItem.appendChild(removeBt)


taskList.appendChild(taskItem)


taskInput.value = ""

}

addButton.addEventListener ('click', addTask);
taskInput.addEventListener ('keypress', (event) =>{
if (event.key==='Enter'){
    addTask ();
}
})

})