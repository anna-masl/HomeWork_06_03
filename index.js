const array = [1, 3, 4, 6, 2, 5, 7, 4, 5, 6];
let position;

console.log(array);

function removeElement(array, element) {
  const num = element;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      position = i;
      console.log(position);
      array.splice(position, 1);
    }
  }
}

removeElement(array, 4);
console.log(array);
