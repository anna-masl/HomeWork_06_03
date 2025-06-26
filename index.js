const array = [1, 3, 4, 6, 2, 5, 7, 4, 4, 5, 6];


console.log(array);
debugger
function removeElement(array, element) {
  let position;
  const num = element;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      position = i;
      console.log(position);
      array.splice(position, 1);
      console.log(array);
      i--;
    }
  }
}

removeElement(array, 4);
console.log(array);
