/**
 * 
 * @param {array} array // todos array
 * @returns one arry element;
 */

let arrayElement = (array) => {
  for (let i = 0; i < array.length; i++) {
    return array[i];
  }
};



/**
 * 
 * @param {string} parentElement // existing tag, to which the child element will be appended
 * @param {string} newElement // new created tag - child element to parentElement
 * @param {array} array // array of items
 * 
 * The function creates new elements and belonging attributes (class, id, href, alt, src)
 */

const setElementAttributes = (parentElement, newElement, array) => {
  newElement.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between"
  );
  parentElement.appendChild(newElement);
  newElement.innerHTML = arrayElement(array); // !!!

  let a = document.createElement("a");
  a.setAttribute("id", "deleteItem");
  a.setAttribute("href", "#");
  newElement.appendChild(a);

  let img = document.createElement("img");
  img.setAttribute("src", "imgs/trash.svg");
  img.setAttribute("alt", "Delete item");
  img.classList.add("icon-delete");
  a.appendChild(img);
};


// array.forEach(function (item) {
   /* newElement.innerHTML += item;
})

todos.forEach(function (item) {

})
*/