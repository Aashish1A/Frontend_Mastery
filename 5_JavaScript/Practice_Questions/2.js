// 🟩 Problem Title: Reverse Words
// Reverse each word in a sentence, but keep their positions unchanged

function reverseWords(sentence) {
    const words = sentence.split(" "); // split sentence into words

    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            // reverse each word individually
            words[i] = words[i].split("").reverse().join("");
        }
    }

    return words.join(" "); // re-join the words into a sentence
}

// 🔍 Example:
console.log(reverseWords("Hello World")); // Output: "olleH dlroW"

// 🟩 Problem Title: once(fn)
// Return a function that calls `fn` only once, then always returns the first result

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args); // call with original context and args
      called = true;                 // ensure it runs only once
    }
    return result;                   // return cached result
  };
}

// 🔍 Example:
const addOnce = once((a, b) => a + b);
console.log(addOnce(2, 3)); // Output: 5
console.log(addOnce(100, 200)); // Output: 5

// 🟩 Problem Title: Count Vowels
// Count how many vowels (a, e, i, o, u) are present in a given string

function countVowels(str) {
    const words = str.toLowerCase().split(""); // convert to lowercase and split into characters
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        // check if character is a vowel
        if (words[i] === "a" || words[i] === "e" || words[i] === "i" || words[i] === "o" || words[i] === "u") {
            count++;
        }
    }
    return count;
}

// 🔍 Example:
console.log(countVowels("JavaScript")); // Output: 3

// 🟩 Problem Title: Anagram Checker
// Check if two strings are anagrams (same letters, different order)

function isAnagram(str1, str2) {
    // Remove non-letters and convert to lowercase
    const cleanS = str1.replace(/[^a-z]/gi, '').toLowerCase();
    const cleanT = str2.replace(/[^a-z]/gi, '').toLowerCase();

    if (cleanS.length !== cleanT.length) return false; // early exit on unequal length

    // Sort characters and compare
    const sortedS = cleanS.split('').sort().join('');
    const sortedT = cleanT.split('').sort().join('');

    return sortedS === sortedT;
}

// 🔍 Example:
console.log(isAnagram("listen", "silent")); // Output: true

// 🟩 Problem Title: Remove Duplicates from Array
// Remove duplicate values from an array without using Set

function removeDuplicates(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    // Check if arr[i] already exists in newArray
    for (let j = 0; j < newArray.length; j++) {
      if (arr[i] === newArray[j]) {
        isDuplicate = true;
        break; // stop inner loop once duplicate is found
      }
    }

    // If it's not a duplicate, add it to the result array
    if (!isDuplicate) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// 🔍 Example:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

// 🟩 Problem Title: Implement curry()
// Convert a function to support curried calls like fn(a)(b)(c)

function curry(fn) {
  return function curried(...args) {
    // If we have enough arguments, call the original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      // Otherwise return a function that keeps collecting arguments
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// 🔍 Example:
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // Output: 24

// 🟩 Problem Title: Capitalize Words
// Capitalize the first letter of each word in a sentence

function capitalizeWords(sentence) {
    const words = sentence.trim().split(/\s+/); // split by any whitespace

    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            // Capitalize first letter, lowercase the rest
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }

    return words.join(" "); // join back into a sentence
}

// 🔍 Example:
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// 🟩 Problem Title: Find Missing Number
// Find the missing number in an array containing 0 to n (inclusive), with one missing

function findMissingNumber(nums) {
    const n = nums.length; // since one number is missing, length is n
    const expectedSum = (n * (n + 1)) / 2; // sum of 0 to n
    let actualSum = 0;

    // calculate actual sum of given numbers
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }

    // missing number is the difference
    return expectedSum - actualSum;
}

// 🔍 Example:
console.log(findMissingNumber([3, 0, 1])); // Output: 2