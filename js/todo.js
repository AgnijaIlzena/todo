/**
 * TODO LIST
 */

/**
 * Notes :
 * ---
 * Un élément ajouté à la liste devra systématiquement posséder ce code HTML :
 * <li class="list-group-item d-flex justify-content-between">
 *     An item
 *     <a href="#" id="deleteItem">
 *         <img src="imgs/trash.svg" alt="Delete item" class="icon-delete">
 *     </a>
 * </li>
 */

// Contiendra les éléments de notre liste à cocher

let todos = [];

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newItem = document.querySelector("#element");
  todos.push(newItem.value);
  newItem.value = "";
  console.log(todos);

  let ul = document.querySelector("ul"); //parentElement
  let li = document.createElement("li"); //newElement

  setElementAttributes(ul, li, todos);
});
