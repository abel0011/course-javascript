import AddTodo from "./components/add-todo.js";
import Modal from "./components/modal.js";
export default class view {
  constructor() {
    this.model = null;
    this.table = document.getElementById("table");
    this.addTodoForm = new AddTodo();
    this.modal = new Modal();
    this.modal.onClick((id, values) => this.editTodo(id, values));
    this.addTodoForm.onClick((title, description) =>
      this.addTodo(title, description)
    );
  }

  setModel(model) {
    this.model = model;
  }
  editTodo(id, values) {
    this.model.editTodo(id, values);
    const row = document.getElementById(id);
    row.children[0].innerText = values.title;
    row.children[1].innerText = values.description;
    row.children[2].children[0].checked = values.completed;
  }

  render() {
    const todos = this.model.getTodos();
    todos.forEach((todo) => this.createRow(todo));
    //for each
    //    for (const todo of todos) {
    //     this.createRow(todo);
    //  }
  }
  toggleCompleted(id) {
    this.model.toggleCompleted(id);
  }
  addTodo(title, description) {
    const todo = this.model.addTodo(title, description);
    this.createRow(todo);
  }

  removeTodo(id) {
    this.model.removeTodo(id);
    document.getElementById(id).remove();
  }
  createRow(todo) {
    const row = table.insertRow();
    row.setAttribute("id", todo.id);
    row.innerHTML = `
    <td>${todo.title}</td>
    <td>${todo.description}</td>
    <td class="text-center">
    </td>
    <td class="text-right">
    </td>
    `;
    const checkbox = document.createElement("input");
    //asignando tipo checkbox al input
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.onclick = () => this.toggleCompleted(todo.id);
    row.children[2].appendChild(checkbox);

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-primary", "mb-1");
    editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
    //hacer toggle de un modal
    editBtn.setAttribute("data-toggle", "modal");
    //aquien va hacer el toggle
    editBtn.setAttribute("data-target", "#modal");
    editBtn.onclick = () => this.modal.setValues(todo);
    row.children[3].appendChild(editBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-danger", "mb-1", "ml-1");
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
    removeBtn.onclick = () => this.removeTodo(todo.id);
    row.children[3].appendChild(removeBtn);
  }
}
