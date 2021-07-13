export default class view {
  constructor() {
    this.model = null;
    this.table = document.getElementById("table");
    const btnadd = document.getElementById("add");

    btnadd.onclick = () => this.addTodo("title", "description");
  }

  setModel(model) {
    this.model = model;
  }

  addTodo(title, description) {
    const todo = this.model.addTodo(title, description);
    todo.title = "HOLA Bro";
  }
}
