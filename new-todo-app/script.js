const inputTask = document.querySelector(".top-part .todo-addtask-box");
const addBtn = document.querySelector(".top-part #add-btn");
const clrBtn = document.querySelector(".top-part #clr-btn");

const todoTaskList = document.querySelector(".bottom-part");

// const infoContainer = document.querySelector(".info-container .info-msg");


const listOfItems = [];

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
    if(listOfItems.length === 0){
        console.warn('You Dont have any task Here!');
        infoContainer.textContent = 'You Dont have any task Here!';
        return;
    }
 

    todoTaskList.innerHTML = '';
    listOfItems.forEach(e => {
    console.log(e.title);
               
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
       check_status.innerHTML =  '<i class="fa-solid fa-circle-check fa-2xl"></i>';
       check_status.classList.add('status-btn');
       tasks.appendChild(check_status);
     
       //adding edit btn
       const edit_btn = document.createElement('button');
       edit_btn.innerHTML = '<i class="fa-solid fa-pen-to-square fa-xl"></i>';
       edit_btn.classList.add('edit-btn');
       tasks.appendChild(edit_btn);

       //adding delete btn
       const delete_btn = document.createElement('button');
       delete_btn.innerHTML = '<i class="fa-solid fa-trash fa-xl"></i>';
       delete_btn.classList.add('del-btn');
       tasks.appendChild(delete_btn);

       const delTaskBtn = document.querySelectorAll('.del-btn');
       
        for (var i = 0; i < delTaskBtn.length; i++) {
        delTaskBtn[i].addEventListener('click', () => {
            // listOfItems.splice(i,i);
            // const selectedIndex = listOfItems.findIndex((item) => item.id == i);
            listOfItems.splice(1,1);
            // this.displayTask();
            
            
            // listOfItems.forEach(e => {
            //     console.log(e);
            //     e.value.pop();
            // });

    
            // console.log(i);
            // const dItem = document.getElementById(delTaskBtn.value);

            // listOfItems.removeChild();
            // delTaskBtn.splice(i);
            // if (!confirm("sure u want to delete " + this.title)) {
            //     event.preventDefault();
            // }
        });
    }
    
    });
}


const addTask = addBtn.addEventListener("click", () => {
    const newTask  = inputTask.value;
    console.log(newTask);

    addNewTask(newTask, true);
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

// deleting the task

// const deletTask = delTaskBtn.addEventListener("click", () =>{
//     // listOfItems.pop();
//     console.log("deletinggggg");
// });


// var el = document.querySelectorAll(".del-btn"); 
// // this element contains more than 1 DOMs.
//     console.log("Heloo", el);
//     for(var i =0; i < el.length; i++) {
//         el[i].onclick = function() { console.log("target name should be here")};
//     }





