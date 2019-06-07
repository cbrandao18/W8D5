let todos = JSON.parse(localStorage.getItem('todos'))|| [];
let ul = document.querySelector(".todos");
let form = document.querySelector(".add-todo-form");

populateList(todos);

function addTodo(event) {
  event.preventDefault();

  let input = document.getElementsByName("add-todo");
  let todoToAdd = input[0].value;
  let todoObj = {
    value: todoToAdd,
    done: false
  }
  todos.push(todoObj);
  form.reset();

  populateList(todos);

  localStorage.setItem('todos', JSON.stringify(todos));
}

function populateList(todos) {
  ul.innerHTML = ""; //clears all the lis before re-populating on the DOM
  for (let i=0; i<todos.length; i++){
    let label = document.createElement("label");
    label.innerHTML = todos[i].value;

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-index", i);
    if (todos[i].done){
      checkbox.checked = true;
    }

    let li = document.createElement("li");
    li.appendChild(checkbox);
    li.appendChild(label);

    ul.appendChild(li);
  }
  
}

function tickCheckbox(event) {
  event.preventDefault();

  if (event.target.matches('input')){ //if the click happened on a checkbox
    let el = event.target;
    let index = el.dataset.index;
    todos[index].done = !todos[index].done;
    localStorage.clear();
    localStorage.setItem('todos', JSON.stringify(todos));
    populateList(todos);
  }
}

form.addEventListener('submit', addTodo);
ul.addEventListener('click', tickCheckbox);