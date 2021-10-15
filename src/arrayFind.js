const numbers = [12, 6,7,23,56,66,1,5,677,90];

let selectedNumber = numbers.find(element => element < 10);
let testNumber = numbers.find(element => element < 1);

console.log(selectedNumber);
console.log(testNumber);