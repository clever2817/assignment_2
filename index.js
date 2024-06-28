/* // 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(calculateSum(10, 20));
console.log(calculateSum(10, 10));

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(6));
console.log(isEven(9));


// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(numArray) {
  let max = numArray[0];

  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
  }

  return max;
}

let numbers = [5, 1, 4, 3, 18, 7, 2, 9];
console.log(findMax(numbers));


// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(str) {
  let result = str.split("").reverse().join("");

  return result;
}

console.log(reverseString("hello"));


// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(number) {
  return number % 2 !== 0;
}

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let output = numArray.filter(filterOddNumbers);

console.log(output);
*/

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(numbers) {
  let sum = 0;
  for (let i in numbers) {
    sum = sum + numbers[i];
  }

  return sum;
}

let numArray = [1, 2, 3, 4, 5];

console.log(sumArray(numArray));
