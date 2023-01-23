let list = document.querySelector(".list__items");

function closelist(list) {
  console.log(list);
}

function createList(name) {
  let newList = `<div class="list list__${name.replace(" ", "-")}">
        <div class="list__controls">
            <input type="text" value="${name}">
            <span onclick="closelist(this)">X</span>
        </div>
        <ul class="list__items list__items__${name.replace(" ", "-")}">
            
        </ul>
        <button class="add__btn" onClick="addItemToList(this)">Add</button>
    </div>`;
  document.body.innerHTML += newList;
}

function addItemToList(list) {
  let itemList = list.closest(".list").classList[1];
  let itemValue = prompt(`Add new item to ${itemList.replace(`list__`, ``)}`);
  let item = document.createElement("li");
  item.textContent = itemValue;
  let lista = document.querySelector(
    `.list__items__${itemList.replace(`list__`, ``)}`
  );
  lista.appendChild(item);
}
