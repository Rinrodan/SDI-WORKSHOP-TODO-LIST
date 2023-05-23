let taskInput = document.getElementById("new-task"); // new-task
let addButton = document.getElementById("addButton"); //first button
let incompleteTasks = document.getElementById("incomplete-tasks"); //incomplete-tasks
let completedTasks = document.getElementById("completed-tasks"); //completed-tasks
let clearButton = document.getElementById("clear");

let addTask = function() {
    if (taskInput.value == "") {
        alert("You gotta type something to do it!");
        return;
    }
    let listItem = createNewTask(taskInput.value);
        incompleteTasks.appendChild(listItem); //<ul id="incomplete-tasks"> 
        bindTaskEvents(listItem, taskCompleted);
        taskInput.value = ""; //clears the input after click
}

addButton.addEventListener("click", addTask);

let createNewTask = function(taskName) {
    // create List Item
    let listItem = document.createElement("li");
    // input checkbox
    let checkBox = document.createElement("input");
    // label
    let label = document.createElement("label");
    // input (text)
    let editInput = document.createElement("input");
    // button.edit
    let editButton = document.createElement("button");
    // button.delete
    let deleteButton = document.createElement("button");

    //Each element needs modified 
    checkBox.type = "checkBox";
    editInput.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskName;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    // select listitems chidlren
    let checkBox = taskListItem.querySelector('input[type="checkbox"]');
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
    //bind editTask to edit button
    editButton.onclick = editTask;
    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}