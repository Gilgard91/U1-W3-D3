window.onload = () => {
  const form = document.getElementById("myForm");
  form.onsubmit = function (e) {
    e.preventDefault();

    const taskInput = document.getElementById("task");
    const taskText = taskInput.value;
    const tableContainer = document.getElementById("table-container");

    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const button = document.createElement("button");

    const textClicked = function (e){
        e.target.style.textDecoration = "line-through";
    }
    button.innerText = "Cancella";
    td.innerText = taskText;
    td.addEventListener("click", textClicked);
    tr.appendChild(td);
    tr.appendChild(button);
    table.appendChild(tr);
    tableContainer.appendChild(table);

    
    button.onclick = function (e) {
      const clickedBtn = e.target;
      clickedBtn.parentNode.remove();
    };

    taskInput.value = "";
  };
};
