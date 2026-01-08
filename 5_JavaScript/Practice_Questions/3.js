// 🟩 Problem Title: Custom Reduce Method
// Implement a custom version of Array.prototype.reduce called myReduce

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    // If initialValue is not provided
    if (accumulator === undefined) {
        if (this.length === 0) {
            throw new TypeError("called on null or undefined");
        }
        accumulator = this[0];  // First element becomes initial accumulator
        startIndex = 1;         // Start reducing from the second element
    }

    // Throw error if callback is not a function
    if (typeof callback !== "function") {
        throw new TypeError("callback not a function");
    }

    // Loop through array and apply reducer logic
    for (let i = startIndex; i < this.length; i++) {
        if (!this.hasOwnProperty(i)) continue; // skip empty slots (sparse arrays)
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

// 🔍 Example:
// const arr = [1, 2, 3, 4];
const result = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(result); // Output: 10

// 🟩 JavaScript Revision Sheet (With Explanatory Comments)

// ✅ Q1: Factorial of a Number (Loop + Recursion)

// 🔁 Iterative (loop) approach to calculate factorial
function factorialIterative(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i; // Multiply current number with factorial
    }
    return fact;
}
console.log(factorialIterative(5)); // Output: 120

// 🔁 Recursive approach to calculate factorial
function factorialRecursive(n) {
    if (n === 1) return 1; // Base case
    return n * factorialRecursive(n - 1); // Recursive call
}
console.log(factorialRecursive(5)); // Output: 120

// ✅ Q2: Generate Random Number in a Given Range
function randomNumber(min, max) {
    // Math.random() gives value from 0 to 1, multiply and shift it into range
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(50, 100)); // Output: random number between 50 and 100

// ✅ Q3: Filter Even Numbers from an Array
let arr = [3, 4, 3, 3, 50, 7, 32];
function getEvenNumbers(arr) {
    // Use filter to return only even numbers
    return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers(arr)); // Output: [4, 50, 32]

// ✅ Q4: Double All Elements in an Array using map()
let arr1 = [2, 3, 4, 5, 6];
const doubled = arr1.map(num => num * 2); // Multiply each element by 2
console.log(doubled); // Output: [4, 6, 8, 10, 12]

// ✅ Q5: Find Largest Element in an Array using reduce()
const largest = arr.reduce((acc, curr) => {
    // Compare current with accumulator
    return acc > curr ? acc : curr;
});
console.log(largest); // Output: 50

// ✅ Q6: Remove All Occurrences of a Specific Element
let target = 3;
function removeOccurrences(arr, target) {
    // Filter out elements that are equal to target
    return arr.filter(item => item !== target);
}
console.log(removeOccurrences(arr, target)); // Output: [4, 50, 7, 32]

// ✅ Q7: Display Current Date and Time
function getCurrentDateTime() {
    const now = new Date(); // Create date object
    return now.toLocaleString(); // Convert to readable format
}
console.log(getCurrentDateTime()); // Output: e.g. "20/7/2025, 14:15:32"

// ✅ Q8: Handle API Fetch with try-catch
async function fetchData() {
    try {
        // Make API request
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json(); // Parse JSON response
        console.log(data);
    } catch (err) {
        // Handle network or response errors
        console.error("Error fetching data:", err);
    }
}
fetchData();

// ✅ Q9: Find nth Fibonacci Number (Recursive)
function fibonacci(n) {
    // Base case: 0th or 1st term is 1
    if (n <= 1) return 1;

    // Sum of previous two terms
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // Output: 8

// ✅ Q10: Implement Private Variable using Closure
function createPrivateVariable() {
    let privateVar = "This is private"; // Private variable inside closure

    // Return an object with getter and setter
    return {
        get: function () {
            return privateVar;
        },
        set: function (value) {
            privateVar = value;
        }
    };
}
const privateAccess = createPrivateVariable();

console.log(privateAccess.get()); // Output: This is private
privateAccess.set("Updated value");
console.log(privateAccess.get()); // Output: Updated value