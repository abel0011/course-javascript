//btnadd.addEventListener("click", () => {
//  console.log("Hola como estas aprendiendo javascript");
//});

//DOMContentLoaded: cargar java scripit hasta que el html este cargado
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const btnadd = document.getElementById("add");
  const table = document.getElementById("table");
  const alert = document.getElementById("alert");

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
      //removerla clase de bootstrap
      alert.classList.remove("d-none");
      //sobre escribir la cadea de texto de alert
      alert.innerText = "Title and Description are required";
      console.error("Title and Description are required");
      return;
    }
    const row = table.insertRow();
    row.innerHTML = `
    <td>${title.value}</td>
    <td>${description.value}</td>
    <td class="text-center">
      <input type="checkbox" />
    </td>
    <td class="text-right">
      <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
      </button>
          <button class="btn btn-danger mb-1 ml-1">
            <i class="fa fa-trash"></i>
        </button>
    </td>

    `;
    alert.classList.add("d-none");
  }

  btnadd.onclick = addTodo;

  //  btnadd.addEventListener("click", () => {
  //    console.log("El titulo es : ", title.value);
  //  });
});
