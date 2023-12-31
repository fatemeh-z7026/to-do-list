let $ = document;
let listGroup = $.querySelector(".list-group");
let listGroupItem = $.querySelectorAll(".list-group-item");
let addBtn = $.querySelector(".btn");
let inputBox = $.querySelector(".form-control");
let trash = $.querySelectorAll(".delete");

function addNewItem() {
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
  newSpan.innerHTML = inputBox.value;

  newLi.append(newSpan, newIconContainer);

  listGroup.append(newLi);

  inputBox.value = "";
}

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (inputBox.value === "" || event.keyCode === 13) {
    alert("Insert Task!");
  } else {
    addNewItem();
  }
});
