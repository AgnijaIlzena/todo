/**
 * TODO LIST
 */

/**
 * Notes :
 * ---
 * Un élément ajouté à la liste devra systématiquement posséder ce code HTML :
 * <li class="list-group-item d-flex justify-content-between">
 *     An item
 *     <a href="#" class="deleteItem">
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
 
  viewTodo(todos);

  /*
  let strike = document.querySelector("li");
  strike.addEventListener("click", () => {
   li.addclist.add("strikeThrough");
 })
 */

});

 