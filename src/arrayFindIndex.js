
const fruits = ['mango','banana','apple','grape','berry','kiwi','orange','pineapple'];


let selectedFruit = fruits.findIndex(element => element === 'kiwi' );
let testFruit = fruits.findIndex(element => element === 'ovacado');

console.log(selectedFruit);
console.log(testFruit);