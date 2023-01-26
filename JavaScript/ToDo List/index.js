let list = document.querySelector(".list__items");
let container = document.querySelector(".container");
let firstitem;
let lists = [];
let items = 0;

function closelist(list) {
  let lista = list.closest(".list");
  items -= lista.children[1].children.length;
  let index = lists.indexOf(lista.className.replace("list list__", ""));
  lists.splice(index, 1);
  lista.remove();
}

function createList(name) {
  if (
    lists.includes(name.replace(" ", "-")) ||
    name == "" ||
    name.includes("[") ||
    name.includes("]")
  ) {
    return alert(
      "List name cannot contain [ or ] and cannot be empty. Also it cannot have same name as other list"
    );
  } else {
    let newList = `<div class="list list__${name.replace(" ", "-")}">
        <div class="list__controls">
            <input type="text" value="${name}">
            <span onclick="closelist(this)">X</span>
        </div>
        <ul class="list__items list__items__${name.replace(" ", "-")}">
            
        </ul>
        <button class="add__btn" onClick="addItemToList(this)">Add</button>
        </div>`;
    container.innerHTML += newList;
    lists.push(`${name.replace(" ", "-")}`);
  }
}

function addItemToList(list) {
  let itemList = list.closest(".list").classList[1];
  let itemValue = prompt(`Add new item to ${itemList.replace(`list__`, ``)}`);
  let item = document.createElement("li");
  let menu = `<menu class="item__menu__${items}" title="" style="display: none;">
  <li onclick="renameItem(this)">Rename</li>
  <li onclick="deleteItem(this)">Delete</li>
</menu>`;

  item.className = `item__${items}`;
  if (items.length == 0) {
    firstitem = document.querySelector(".item__0");
    addEventListener("contextMenu", function (e) {
      e.preventDefault();
      openmenu(item, e);
    });
    addEventListener("click", function (e) {
      e.preventDefault();
      check(item, e);
    });
  }
  item.oncontextmenu = function (e) {
    e.preventDefault();
    openmenu(item, e);
  };
  item.onclick = function (e) {
    e.preventDefault();
    check(this, e);
  };
  item.textContent = itemValue;
  let lista = document.querySelector(
    `.list__items__${itemList.replace(`list__`, ``)}`
  );

  lista.appendChild(item);
  items += 1;
  item.innerHTML += menu;
}

function openmenu(item, event) {
  let menu = item.querySelector("menu");
  menu.style.display = "none";
  let li = item.querySelector("menu>li");
  menu.style.display = "block";
  const rect = item.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(x, y);
  menu.style.left = x + "px";
  menu.style.top = y - 4 + "px";
}

function renameItem(item) {
  let oldItem = item.closest("ul>li");
  let menu = oldItem.querySelector("menu");
  menu.style.display = "none";
  let name = prompt("Rename item: ");
  oldItem.textContent = name;
  oldItem.appendChild(menu);
}

function deleteItem(item) {
  let oldItem = item.closest("ul>li");
  oldItem.remove();
  items -= 1;
}

function check(item, event) {
  if (item.style.background !== "limegreen") {
    item.style.background = "limegreen";
  } else {
    item.style.background = "darkred";
  }
}
