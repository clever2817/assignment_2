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
*/

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
