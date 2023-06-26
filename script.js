function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskDate = document.getElementById("taskDate");
    var todoList = document.getElementById("todoList");

    var taskText = taskInput.value.trim();
    var taskDateValue = taskDate.value.trim();

    if (taskText !== "" && taskDateValue !== "") {
      var newTask = document.createElement("div");
      newTask.className = "task";
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      var label = document.createElement("label");
      label.textContent = taskText + " - " + taskDateValue;

      checkbox.addEventListener("change", function() {
        if (this.checked) {
          label.classList.add("completed");
          moveTask(newTask, "todoList", "doneList");
        } else {
          label.classList.remove("completed");
          moveTask(newTask, "doneList", "todoList");
        }
      });

      newTask.appendChild(checkbox);
      newTask.appendChild(label);
      todoList.appendChild(newTask);

      taskInput.value = "";
      taskDate.value = "";
    }
  }

  function moveTask(task, sourceListId, destinationListId) {
    var sourceList = document.getElementById(sourceListId);
    var destinationList = document.getElementById(destinationListId);

    sourceList.removeChild(task);
    destinationList.appendChild(task);
  }