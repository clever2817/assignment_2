// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

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
