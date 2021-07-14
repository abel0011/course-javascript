//poo en javascript , todo son functions y todas las functions son objetos
export default class Model {
  constructor() {
    //almacena la vista
    this.view = null;
    //parse a partir de una cadena dame el objeto
    this.todos = JSON.parse(localStorage.getItem("todos"));
    if (!this.todos || this.todos.length < 1) {
      this.todos = [
        {
          id: 0,
          title: "Learn JS",
          description: "Watch JS Tutorials",
          completed: false,
        },
      ];
      this.currentId = 1;
    } else {
      this.currentId = this.todos[this.todos.length - 1].id + 1;
    }
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    //  envio de la copia de los todos
    //  const todos = [];
    //  for (const todo of this.todos) {
    //    todos.push(...todo);
    //  }
    //  return this.todos;
    return this.todos.map((todo) => ({ ...todo }));
  }
  editTodo(id, values) {
    const index = this.findTodo(id);
    Object.assign(this.todos[index], values);
    this.save();
  }
  save() {
    //convirtiendo a cadena (enviando un objeto)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  findTodo(id) {
    //obtener el index
    return this.todos.findIndex((todo) => todo.id === id);
  }
  toggleCompleted(id) {
    console.log(id);
    const index = this.findTodo(id);
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.save();
  }

  removeTodo(id) {
    const index = this.findTodo(id);
    //splice elimianr (index,elementos a eliminar)
    this.todos.splice(index, 1);
    this.save();
  }
  addTodo(title, description) {
    //creando un obj
    const todo = {
      //id: 0, si una propiedad es igual a su valor solo se asigna una palabra
      //title: title,
      id: this.currentId++,
      title,
      description,
      completed: false,
    };
    //push añadir a una lista [1] push(2) [1,2]
    this.todos.push(todo);
    this.save();
    console.log(this.todos);
    //clonando el objeto , para evitar su manipulación
    //return Object.assign({}, todo);

    //prexsyntax , expanda las propiedades de otro obj
    return { ...todo };
  }
}
//en el navegador existe un local storage localStorage , localStorage.clear
