const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

let todos = [];

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    li.innerHTML = `
      <span class="todo-text ${todo.completed ? "completed" : ""}">${todo.text}</span>
      <div class="actions">
        <button onclick="toggleTodo(${index})">
          ${todo.completed ? "Undo" : "Done"}
        </button>
        <button onclick="editTodo(${index})">Edit</button>
        <button onclick="deleteTodo(${index})">Delete</button>
      </div>
    `;

    todoList.appendChild(li);
  });
}

function addTodo() {
  const text = todoInput.value.trim();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  todos.push({
    text,
    completed: false,
  });

  todoInput.value = "";
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function editTodo(index) {
  const newText = prompt("Edit your todo:", todos[index].text);

  if (newText !== null && newText.trim() !== "") {
    todos[index].text = newText.trim();
    renderTodos();
  }
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
