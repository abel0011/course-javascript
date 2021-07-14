import Alert from "./alert.js";

export default class AddTodo {
  constructor() {
    this.btnadd = document.getElementById("add");
    this.title = document.getElementById("title");
    this.description = document.getElementById("description");
    this.alert = new Alert("alert");
  }
  //creando mi propio manejador de eventos, callback es una function
  onClick(callback) {
    this.btnadd.onclick = () => {
      if (title.value === "" || description.nodeValue === "") {
        this.alert.show("The title and description are required");
      } else {
        this.alert.hide();
        callback(this.title.value, this.description.value);
      }
    };
  }
}
