//poo en javascript , todo son functions y todas las functions son objetos
export default class Model {
  constructor() {
    //almacena la vista
    this.view = null;
    this.todos = [];
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title, description) {
    //creando un obj
    const todo = {
      //id: 0, si una propiedad es igual a su valor solo se asigna una palabra
      //title: title,
      id: 0,
      title,
      description,
      completed: false,
    };
    //push añadir a una lista [1] push(2) [1,2]
    this.todos.push(todo);
    console.log(this.todos);
    //clonando el objeto , para evitar su manipulación
    return Object.assign({}, todo);
  }
}
//en el navegador existe un local storage localStorage , localStorage.clear
