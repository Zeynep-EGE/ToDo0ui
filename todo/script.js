let taskCount = 0;

document.getElementById("saveBtn").addEventListener("click", function () {
    let input = document.getElementById("taskInput");
    let text = input.value;

    if (text === "") {
      alert("Please Write down what to do...!!");
      return;
    }

    taskCount = taskCount + 1;

    let date = new Date();
    let dateText = date.toLocaleDateString("tr-TR");

    let newTodo = document.createElement("div");
    newTodo.className = "task";

    newTodo.innerHTML = `
      <h3>Task ${taskCount}</h3>
      <p><strong>things to do:</strong> <span class="gorevYazi">${text}</span></p>
      <p><strong>Date:</strong> ${dateText}</p>
      <div class="task-buttons">
        <button class="editBtn">Düzenle</button>
        <button class="deleteBtn">Sil</button>
      </div>
    `;

    document.getElementById("taskList").appendChild(newTodo);

    input.value = "";

    let deleteBtn = newTodo.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function () {
      newTodo.remove();
    });

    
    let changeBtn = newTodo.querySelector(".editBtn");
    changeBtn.addEventListener("click", function () {
    let newTextContent = newTodo.querySelector(".gorevYazi"); // doğru class bu!
    let newText = prompt("Write new things to do:", newTextContent.textContent); // doğru olan bu

    if (newText !== null && newText !== "") {
        newTextContent.textContent = newText;
    }
    });

});
    