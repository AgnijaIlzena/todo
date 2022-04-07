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

   const newItem = document.querySelector("#element").value;
   todos.push(newItem);
   console.log(todos);
   
   let node = document.createElement("li");
   node.innerText.
})



// todos.forEach(item => {
//     item;
//     console.log(todos[item]);
// })


// todos.forEach(item => {
//     return item;  }
    





