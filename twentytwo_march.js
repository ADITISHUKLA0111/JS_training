// Calculate the sum of all numbers in the array with reduce function
function sumWithReduce(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Calculate the sum of all numbers in the array with for loop
function sumWithForLoop(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// Find the maximum value in the array after sorting it
function findMax(arr) {
//   return Math.max(...arr);
  const arr2=arr.sort(function(a, b){return a - b});
return arr2[arr.length-1];
}

// Find the minimum value in the array after sorting it
function findMin(arr) {

const arr2=arr.sort(function(a, b){return a - b});
return arr2[0];
}

// Filter out even numbers from the array with filter function
function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Filter out odd numbers from the array with filter function
function filterOdd(arr) {
  return arr.filter(num => num % 2 !== 0);
}

// Convert each number in the array to its square by map function
function squareArray(arr) {
  return arr.map(num => num * num);
}

// Check if a number is prime
function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n < 2) return false;
    let m = Math.sqrt(n);
    for (let i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

// Find prime numbers from the array elements
function findPrimeNumbers(arr) {
  return arr.filter(num => isPrime(num));
}

// Print Fibonacci sequence up to a certain limit using a while loop
function printFibonacciWhile(limit) {
  let a = 0, b = 1, temp;
  while (a <= limit) {
    console.log(a);
    temp = a;
    a = b;
    b = temp + b;
  }
}

// Print Fibonacci sequence up to a certain limit using a do while loop
function printFibonacciDoWhile(limit) {
  let a = 0, b = 1, temp;
  do {
    console.log(a);
    temp = a;
    a = b;
    b = temp + b;
  } while (a <= limit);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(" reduce:", sumWithReduce(numbers));
console.log("for loop:", sumWithForLoop(numbers));
console.log("Max value:", findMax(numbers));
console.log("Min value:", findMin(numbers));
console.log("Even num:", filterEven(numbers));
console.log("Odd num:", filterOdd(numbers));
console.log("Squared num:", squareArray(numbers));
console.log("Prime num:", findPrimeNumbers(numbers));
console.log("Fibonacci while loop:");
printFibonacciWhile(50);
console.log("Fib with do while loop:");
printFibonacciDoWhile(50);
