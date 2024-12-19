

function addTodo(){
    var todo = document.getElementById("todo");
    var list = document.getElementById("list");
    list.innerHTML += `<li> 
     <input type='text' value='${todo.value}' disabled/> 
      <button onclick="deleteTodo(event)" class="delete">Delete</button> 
     <button onclick="editTodo(event)" class="edit">Edit</button> 
    </li>` 
    console.log(todo.value);
    todo.value = ""
}

function addTodoEnter(event) {
    if (event.keyCode === 13) {
        addTodo()
    }
}

function deleteTodo(event) {
   event.target.parentNode.remove();
}
function editTodo(event) {
    var input = event.target.parentNode.childNodes[1]
    input.setAttribute("class", "focus-input")
    input.disabled = false;
    input.focus();
    event.target.innerHTML = "Update"
    event.target.setAttribute("onclick", 'updateTodo(event)')
    
}

function updateTodo(event){
    var input = event.target.parentNode.childNodes[1]
    input.setAttribute("class", "")
    input.disabled = true;
    event.target.innerHTML = "Edit"
}

function deleteAll(){
    list.innerHTML = '';

}