export default class Filters {
  constructor() {
    this.form = document.getElementById("filters");
    this.btnSearch = document.getElementById("search");
  }

  onClick(callback) {
    this.btnSearch.onclick = (e) => {
      //no enviar al servidor
      e.preventDefault();

      //type word => son atributos name del html
      const data = new FormData(this.form);
      callback({
        type: data.get("type"),
        words: data.get("words"),
      });
    };
  }
}
