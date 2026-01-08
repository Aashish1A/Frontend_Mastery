// 🟩 Problem Title: Make a Counter
function makeCounter(initialValue = 0) {
    // Create a private variable to keep track of the count
    let count = initialValue;

    // Return an object with increment, decrement, and reset methods
    return {
        increment: () => {
            count++; // Increase count by 1
            return count;
        },
        decrement: () => {
            count--; // Decrease count by 1
            return count;
        },
        reset: () => {
            count = initialValue; // Reset count to initial value
            return count;
        }
    };
}

// 🟩 Problem Title: groupBy (arr, key)
function groupBy(arr, key) {
    // Use reduce to group items by the given key
    return arr.reduce((acc, item) => {
        const keyValue = item[key]; // get the key's value (e.g., age)
        if (!acc[keyValue]) {
            acc[keyValue] = []; // initialize group if not exists
        }
        acc[keyValue].push(item); // push current item into its group
        return acc;
    }, {});
}

// 🔍 Example:
const result = groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
], 'age');

console.log(result); // Output: { 25: [ {...}, {...} ], 30: [ {...} ] }

// 🟩 Problem Title: customSort
// Sort the array so that:
// 1. All strings come first (in alphabetical order)
// 2. Then all numbers (in ascending order)

function customSort(arr) {
  // Filter and sort strings alphabetically
  const strings = arr.filter(item => typeof item === 'string').sort();

  // Filter and sort numbers in ascending order
  const numbers = arr.filter(item => typeof item === 'number').sort((a, b) => a - b);

  // Clear original array and push strings first, then numbers
  arr.length = 0;
  arr.push(...strings, ...numbers);

  return arr;
}

// 🔍 Example:
const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input)); // Output: [ 'a', 'c', 'e', 'g', 's', 1, 2, 5, 6 ]


// 🟩 Problem Title: getResultByPath
// Given a dot/bracket path string (e.g. 'a.b.c'), return the nested value from an object.

function getResultByPath(path, obj) {
  // Extract keys from path: handles dot and bracket notation
  const keys = path.match(/([^[.\]]+)/g);

  let current = obj;
  for (let key of keys) {
    if (current == null) return null;         // if null/undefined encountered
    if (!(key in current)) return undefined;  // if key doesn't exist
    current = current[key];                   // go deeper
  }
  return current;
}

// 🔍 Example:
const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    }
  }
};

console.log(getResultByPath(path, obj)); // Output: "completed"

// 🟩 Problem Title: Array Chunking
// Split an array into chunks of size 'n'. Each chunk is a sub-array.

function chunkArray(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        // Use slice to extract chunks of size n
        result.push(arr.slice(i, i + n));
    }
    return result;
}

// 🔍 Example:
console.log(chunkArray([1, 2, 3], 5)); // Output: [ [1, 2, 3] ]

// 🟩 Problem Title: Validate Palindrome
// Check if a string is a valid palindrome (ignore cases and non-alphanumeric chars)

function validatePalindrome(str) {
    const original = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // clean string
    const reversed = original.split("").reverse().join("");       // reverse it
    return original === reversed;
}

// 🔍 Example:
console.log(validatePalindrome("race a car")); // Output: false

// 🟩 Problem Title: Largest Number Formed
// Arrange numbers to form the largest possible number (as a string)

function formLargestNumber(arr) {
  const nums = arr.map(num => num.toString()); // convert all to strings

  // sort using custom comparator
  nums.sort((a, b) => (b + a).localeCompare(a + b));

  // edge case: if first is '0', whole number is zero
  if (nums[0] === '0') return '0';

  return nums.join("");
}

// 🔍 Example:
const inputs = [3, 30, 34, 5, 9];
console.log(formLargestNumber(inputs)); // Output: "9534330"

// 🟩 Problem Title: Flatten Nested Array
// Recursively flatten a nested array into a single-level array

function flattenArray(arr) {
    return arr.reduce((acc, curr) =>
        // If current item is an array, flatten it recursively
        Array.isArray(curr)
            ? acc.concat(flattenArray(curr)) // flatten and merge
            : acc.concat(curr),              // else just add to result
        []
    );
}

// 🔍 Example:
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]