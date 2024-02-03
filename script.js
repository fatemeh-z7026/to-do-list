let $ = document;
let listGroup = $.querySelector(".list-group");
let listGroupItem = $.querySelectorAll(".list-group-item");
let addBtn = $.querySelector(".btn");
let inputBox = $.querySelector(".form-control");
let trash = $.querySelectorAll(".delete");
let toDoArray = [];
function addNewItem() {
  let newObj = {
    id: toDoArray.length + 1,
    title: inputBox.value,
    complete: false,
  };
  inputBox.value = "";

  toDoArray.push(newObj);
  setLocalStorage(toDoArray);
  toDoGenerator(toDoArray);
}

function setLocalStorage(toDoList) {
  localStorage.setItem("todo", JSON.stringify(toDoList));
}
function toDoGenerator(toDoList) {
  //Empty todolist to Avoid Adding Previous todos
  listGroup.innerHTML = "";

  toDoList.forEach((todo) => {
    let newLi = $.createElement("li");
    newLi.className = "list-group-item";

    let newIconTrash = $.createElement("i");
    newIconTrash.className = "fa fa-trash-o delete";

    let newIconContainer = $.createElement("div");
    newIconContainer.className = "icon-container";

    newIconTrash.addEventListener("click", function (event) {
      event.target.parentElement.parentElement.remove();
    });
    let newIconCheck = $.createElement("i");
    newIconCheck.className = "fa fa-solid-o fa-check check";

    newIconCheck.addEventListener("click", function () {
      newSpan.classList.toggle("active");
    });
    newIconContainer.append(newIconTrash, newIconCheck);

    let newSpan = $.createElement("span");
    newSpan.innerHTML = todo.title;

    newLi.append(newSpan, newIconContainer);

    listGroup.append(newLi);
  });
}
function getLocalStorage() {
  //Get Data From LocalStorage
  let localStorageToDo = JSON.parse(localStorage.getItem("todo"));
   //If Localstorage Be Not false(null) Or (Has Data) Save Gotten Data In "toDoArray"
   //Push Item At The End Of "toDoArray"
  if (localStorageToDo) {
    toDoArray = localStorageToDo;
  }
  //If Localstorage Be false(null) Or (Doesnt Has Data)
  else {
    toDoArray = [];
  }
  //Show ToDoList In Dom After Reload
  toDoGenerator(toDoArray);
}
window.addEventListener("load", getLocalStorage);
addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (inputBox.value === "" || event.keyCode === 13) {
    alert("Insert Task!");
  } else {
    addNewItem();
  }
});
