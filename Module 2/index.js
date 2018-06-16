'use strict'
let userInput;
const numbers = [];
let total = 0;
do {
    userInput = prompt('Введите число', '');
    numbers.push(Number(userInput));
  } while (userInput !== null);
  
  console.log(numbers);
  for(let i = 0; i < numbers.length; i++) {
     total += numbers[i];
  }
  alert ('Общая сумма чисел равна ' + total )

  console.log(total)