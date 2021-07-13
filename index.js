//btnadd.addEventListener("click", () => {
//  console.log("Hola como estas aprendiendo javascript");
//});

//DOMContentLoaded: cargar java scripit hasta que el html este cargado
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const btnadd = document.getElementById("add");
  const table = document.getElementById("table");

  //  btnadd.onclick = () => {
  //    console.log(
  //      "Title: ",
  //      title.value,
  //      "\n",
  //      "Description: ",
  //      description.value
  //    );
  //  };
  //
  function addTodo() {
    if (title.value === "" || description.value === "") {
      console.error("Title and Description are required");
    } else {
      console.log(
        "El Titulo es => ",
        title.value,
        "\n",
        "Description es =>",
        description.value
      );
    }
  }

  btnadd.onclick = addTodo;

  //  btnadd.addEventListener("click", () => {
  //    console.log("El titulo es : ", title.value);
  //  });
});
