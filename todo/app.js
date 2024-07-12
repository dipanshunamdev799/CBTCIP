let descInput = document.getElementsByClassName("desc-input")[0];
let taskInput = document.getElementsByClassName("task-input")[0];
let submitButton = document.getElementsByClassName("submit-button")[0];
let list = document.getElementsByClassName("list")[0];
let completedList = document.getElementsByClassName("completed")[0];

submitButton.addEventListener('click',()=>{
    let task = String(taskInput.value);
    let desc = descInput.value;
    if(task=='' || desc==''){
        alert("Give some input");
    }else{

        taskInput.value = "";
        descInput.value = "";

        let element = document.createElement('div');
        element.classList.add("task-element");

        let para = document.createElement('p');
        let fullTaskDescription = task.toUpperCase() + " : " + desc;
        para.append(fullTaskDescription);

        element.append(para);

        let button = document.createElement('button');
        button.onclick = ()=>{
            let parentElement = button.parentElement;
            console.log();
            let completedElement = document.createElement('li');
            completedElement.classList.add("completed-element");
            let completedTaskDesc =document.createElement('p');
            completedTaskDesc.innerText =parentElement.children[0].innerText;
            completedElement.append(completedTaskDesc);
            completedElement.append(document.createElement('br'));
            completedElement.append("Date and time of task completion: " + String(new Date()));    
            completedList.append(completedElement);
            button.parentElement.remove();
        }

        button.classList.add('del');
        button.innerText = "DELETE";
        
        element.append(button);
        list.append(element);
    }
});
