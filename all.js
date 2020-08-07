let todoData = [];
let addTodo = document.getElementById('addTodo');
let clearTask = document.getElementById('clearTask');
let todoList = document.getElementById('todoList');
let taskCount = document.getElementById('taskCount');
let newTodo = document.getElementById('newTodo');



addTodo.addEventListener('click', addTodobtn);
clearTask.addEventListener('click', clear);
todoList.addEventListener('click', remove);
todoList.addEventListener('click', complete);


function clear() {
    todoData = [];
    Tempalte(todoData);
};
function Tempalte(todoData) {
    var str = "";
    todoData.forEach(function (item) {
        str += `<li class="list-group-item">
  <div class="d-flex">
  <div class="form-check">
  <input type="checkbox" class="form-check-input" ${item.completed ? 'checked' : ''} data-action="complete" data-id="${item.id}">
  <label class="form-check-label ${item.completed ? 'completed' : ''}" data-action="complete" data-id="${item.id}"> ${item.title}</label>
  </div>
  <button type="button" class="close ml-auto" aria-label="Close">
  <span aria-hidden="true" data-action="remove" data-id="${item.id}">&times;</span>
  </button>
  </div>
  </li>`;
    })
    todoList.innerHTML = str;
    taskCount.textContent = todoData.length;
    newTodo.value = '';
};
function addTodobtn() {
    if (newTodo.value.trim() !== '') {
        todoData.push({
            id: Math.floor(Date.now()),
            title: newTodo.value,
            completed: false,
        })
        Tempalte(todoData);
    }
};
function remove(e){
    var newIndex = 0;
   if (e.target.dataset.action == 'remove') {
     todoData.forEach(function (item, key) {
       if (e.target.dataset.id == item.id) {
         newIndex = key;
       }
     })
     todoData.splice(newIndex, 1);
   }
    Tempalte(todoData);
 };
 function complete(e){
    if (e.target.dataset.action == 'complete') {
    todoData.forEach(function (item) {
      if (e.target.dataset.id == item.id) {
        if (item.completed) {
          item.completed = false;
        } else {
          item.completed = true;
        }
      }
    })
  }
   Tempalte(todoData);
};