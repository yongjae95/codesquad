const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

function paintToDo(dataToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = dataToDo;
    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener("click",deleteList);
}
function deleteList(event){
    const delLi = event.target.parentElement;
    delLi.remove();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const dataToDo = todoInput.value;
    todoInput.value="";
    paintToDo(dataToDo);
}
todoForm.addEventListener("submit",handleToDoSubmit);