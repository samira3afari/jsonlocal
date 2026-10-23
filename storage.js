const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

let items = [];

function saveToStorage() {
  localStorage.setItem("myList", JSON.stringify(items));
}

function render() {
  list.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "حذف";

    deleteBtn.addEventListener("click", () => {
      items.splice(index, 1);
      saveToStorage();
      render();
      
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;
  items.push(value);
  input.value = "";
  saveToStorage();
  render();
});

function loadFromStorage() {
  const saved = localStorage.getItem("myList");
  if (saved) {
    items = JSON.parse(saved);
  }
  render();
}

loadFromStorage();

