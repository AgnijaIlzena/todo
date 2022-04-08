/**
 * Function to show items in the list
 */

const viewTodo = (todos) => {
  const ul = document.querySelector("ul");
  ul.classList.add(
    "list-group",
    "list-group-flush",
    "pt-5"
  )
  // vider la liste avant de remplir
  ul.innerText = "";

  // loop on the todos array
  todos.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item",
    "d-flex",
    "justify-content-between");
    li.innerText = item;

    const a = document.createElement("a");
    a.href = "#";
   //a.id = `${index}`;
    a.id = `item-${index}`;
    a.classList.add("deleteItem");

    const img = document.createElement("img");
    img.setAttribute("src", "imgs/trash.svg");
    img.setAttribute("alt", "Delete item");
    img.classList.add("icon-delete");

    a.append(img);
    li.appendChild(a);
    // add li at the end of list, etc a and img
    ul.appendChild(li);   

      
    /*
  a.addEventListener("click", () => {
   todos.splice(`${index}`, 1)
   if (`${index}` === a.id) {
     a.parentElement.remove();
   }
   console.log(todos);
      })   
  */
  });

  eventsLinks(todos);
}

// appliquer un ecouter d'evenement sur tous les liens de suppression
const eventsLinks = (todos) => {
  // recuper tous les buttons de suppression
  const links = document.querySelectorAll(".deleteItem");  // visi a

  //ajoute un ecouter d evenement sur les buttons de suppression
  links.forEach(link => {
    link.addEventListener("click", () => {
      removeItem(link.id, todos);
    });
  });

}

// suprime un element de la liste
const removeItem = (id, todos) => {
    // extraire le numero de la chaine
  //   let idPart = id.substr(5);
  const index = id.split("item-");
  console.log(index[1]);

  todos.splice(index[1], 1);

viewTodo(todos);
}
