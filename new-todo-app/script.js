const inputTask = document.querySelector(".top-part .todo-addtask-box");
const addBtn = document.querySelector(".top-part #add-btn");
const clrBtn = document.querySelector(".top-part #clr-btn");

const todoTaskList = document.querySelector(".bottom-part");

const listOfItems = [];

let isChecked = false;

const addNewTask = (task, completedStatus) =>{
    if(task === ''){
        console.warn('Task title cannot be empty');
        return;
    }
    listOfItems.push({
        task,
        completedStatus
    });
    console.log(listOfItems);
}

const displayTask = () =>{

    todoTaskList.innerHTML = '';
    listOfItems.forEach((e,index)=> 
        {
               
        // adding the title of the task
       const title = document.createElement("section");
       title.classList.add('task-list-text');
       title.innerHTML = e.task;

       //displaying the list of tasks
       const tasks = document.createElement("section");
       tasks.classList.add('todo-task-list');
       tasks.appendChild(title);

       
       todoTaskList.appendChild(tasks);

       //adding task status btn
       const check_status= document.createElement('button');
       check_status.innerHTML =  '<i class="fa-regular fa-circle-check fa-2xl"></i>';
       check_status.addEventListener('click', function() {
        isChecked = !isChecked;
        title.innerHTML = isChecked == false ? e.task :`<h5 style="text-decoration: line-through; font-size: 22px;" class="task-list-text">${e.task}</h5>`;
        check_status.innerHTML = isChecked == false  ? `<i class="fa-regular fa-circle-check fa-2xl"></i>` : `<i class="fa-solid fa-circle-check fa-2xl"></i>`;

    });
       check_status.classList.add('status-btn');
       tasks.appendChild(check_status);


       //adding edit btn
       const edit_btn = document.createElement('button');
       edit_btn.innerHTML = `<i onclick="editTask(${index})" class="fa-solid fa-pen-to-square fa-xl"></i>`;
       edit_btn.classList.add('edit-btn');
       tasks.appendChild(edit_btn);

       //adding delete btn
       const delete_btn = document.createElement('button');
       delete_btn.innerHTML = `<i onclick="deleteTask(${index})" class="fa-solid fa-trash fa-xl"></i>`;
       delete_btn.classList.add('del-btn');
       tasks.appendChild(delete_btn);   
    });
}




const addTask = addBtn.addEventListener("click", () => {
    const newTask  = inputTask.value;
    console.log(newTask);

    addNewTask(newTask, isChecked);
    displayTask();

    inputTask.value ='';
    inputTask.focus();
    // deleteTask();
}); 

//clearing the task
const clearTask = clrBtn.addEventListener("click", () => {
    inputTask.value = "";
    console.log('clicked clear button');
});

//delete the task
const deleteTask = (index) => {
    listOfItems.splice(index, 1);
    displayTask();
}

//edit the task
const editTask = (index) => {
    const newEditText = prompt('Edit the task');
    console.log(newEditText);
    if(newEditText !== null){
        listOfItems[index].task = newEditText.trim();
        displayTask();
    }
}