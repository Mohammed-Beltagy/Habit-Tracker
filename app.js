// ==> Get The Current And Pervious Days
const habitTracker = document.getElementById("habit-tracker");
let days = habitTracker.children;
for (let i = 1; i <= days.length; i++) {
  let currentDay = new Date().getDate() - i + 1;
  if (currentDay <= 0) {
    // Find The Day In The Previous Month
    currentDay =
      new Date(
        `${new Date().getFullYear() + 1} ${new Date().getMonth() + 1} 0`
      ).getDate() + currentDay;
  }
  days[days.length - i].innerHTML = currentDay;
}

// ==> Tasks
let main = document.querySelector("main"),
  tasks = new Array();
// ==> New Task
document.getElementById("new-task").addEventListener("click", createTask);

function createTask() {
  // Remove no-tasks Paragraph
  if (tasks.length === 0) {
    console.log(main);
    main.innerHTML = "";
  }
  // Create The DOM
  let task = document.createElement("div");
  task.className = "task";
  let checkbox = document.createElement("span");
  checkbox.className = "checkbox";
  let taskTitle = document.createElement("h3");
  taskTitle.className = "task-title";
  taskTitle.innerText = "Task Name";
  let btns = document.createElement("div");
  btns.className = "btns";
  let delBtn = document.createElement("button");
  delBtn.className = "delete";
  delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  let editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  btns.append(delBtn, editBtn);
  let details = document.createElement("p");
  details.className = "details";
  details.innerText = "Type Details.";

  task.append(checkbox, taskTitle, btns, details);
  // Adding The Task To Main And Tasks Array
  main.append(task);
  console.log(main.children);
  taksEvents(task);
  tasks.push(task);
}

// ==> Applying Events On Tasks
function taksEvents(task) {
  let btns = task.lastElementChild.previousElementSibling;
  // edit btn
  let details = task.querySelector(".details"),
    taskTitle = task.querySelector(".task-title");
  task.querySelector(".btns .edit").onclick = function () {
    if (task.classList.contains("editable")) {
      details.contentEditable = "false";
      taskTitle.contentEditable = "false";
    } else {
      details.contentEditable = "true";
      taskTitle.contentEditable = "true";
    }
    task.classList.toggle("editable");
    this.classList.toggle("active");
  };
  // delete btn
  task.querySelector(".btns .delete").onclick = function () {
    task.remove();
    delete task;
    tasks = tasks.filter((value) => {
      if (value !== task) {
        return value;
      }
    });
    if (tasks.length === 0) {
      main.innerHTML =
        '<p id="no-tasks" class="no-tasks">Click (+) Button To Create A New Task!</p>';
    }
  };
}
