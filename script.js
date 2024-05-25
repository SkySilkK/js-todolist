const enteredTask = document.getElementById("enteredTask")
const addTaskButton = document.getElementById("add")

// When Add Task button is clicked create a newTask with enteredTask value and append it to empty parent div
addTaskButton.addEventListener("click", () => {
  const parent = document.getElementById("parent")
  const newTask = document.createElement("div")
  newTask.textContent = enteredTask.value
  parent.append(newTask)
  enteredTask.value = ""
  
  //Add delete button to newTask and append to to every newTask that will be created
  const deleteTask = document.createElement("button")
  deleteTask.textContent = "Delete"
  deleteTask.classList.add("btn", "btn-primary");
  newTask.append(deleteTask)
  
  // Listen on Delete Button when clicked remove the newTask
  deleteTask.addEventListener("click", () => {
    newTask.remove()
  })
  
  //Add update button to every newTask created
  const updateTask = document.createElement("button")
  updateTask.textContent = "Edit"
  newTask.append(updateTask)
  
  //Listen on Submit button when clicked 
  updateTask.addEventListener("click", () => {
    newTask.textContent = prompt("Change value")
    newTask.append(deleteTask)
    newTask.append(updateTask)
  })

  //Add deleteTaskAll to delete all the newTasks
  const deleteTaskAll = document.getElementById("deleteAll")
  deleteTaskAll.addEventListener("click", () => {
    //delete all child elements in parent
    parent.replaceChildren()
  })
  
})
