// 🟩 Problem Title: Destructure an Object
const obj = {
    name: "Aashish",
    roll: 7,
    age: 18
};

// Destructuring the object to extract its properties into variables
const { name, roll, age } = obj;
console.log(name, roll, age); // Aashish 7 18

// 🟩 Problem Title: Book Class with getAge Method
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Method to calculate age of the book
    getAge() {
        const currentYear = new Date().getFullYear(); // Get current year
        return currentYear - this.year; // Subtract book's year from current year
    }
}
const book = new Book("Java", "John Doe", 1987);
console.log(book.title, book.author, book.year); // Java John Doe 1987
const ageOfBook = book.getAge();
console.log(ageOfBook); // Book age

// 🟩 Problem Title: Magazine Subclass with Issues
class Books {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Magazine extends Books {
    constructor(title, author, year, issue) {
        super(title, author, year); // Call parent constructor
        this.issue = issue;
    }

    // Method to return the issue number
    getIssuesNumber() {
        return this.issue;
    }
}

const myMagazine = new Magazine("Hindustan Times", "hindustan", 1880, 5);
console.log(myMagazine.title); // Hindustan Times
console.log(myMagazine.getIssuesNumber()); // 5

// 🟩 Problem Title: Inheritance Using Object.create()
const person = {
    name: "Aashish",
    age: 18,

    // Method shared with all inheriting objects
    introduce: function () {
        return `Hi my name is ${this.name} and I am ${this.age} years old.`;
    }
};

// Create new object 'student' that inherits from 'person'
const student = Object.create(person);
student.studentId = "2006";

console.log(student.name, student.age, student.studentId); // Aashish 18 2006
console.log(student.introduce()); // Uses parent's method

// 🟩 Problem Title: Check if Array Contains Number with 7
function sevenInclude(arr) {
    for (const num of arr) {
        // Convert number to string and check if it includes "7"
        if (num.toString().includes("7")) {
            return "Boom";
        }
    }
    return "There is not seven";
}
console.log(sevenInclude([3, 4, 5, 6, 7, 8])); // Boom

// 🟩 Problem Title: Return Number of Days in a Month
function isLeapYear(year) {
    // Leap year if divisible by 4 and not 100, or divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function returningDays(month, year) {
    // Months with 30 days
    if ([4, 6, 9, 11].includes(month)) {
        return 30;
    } 
    // February, handle leap year
    else if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    } 
    // All other months have 31 days
    else return 31;
}

console.log(returningDays(2, 2029)); // 28

// 🟩 Q1. Reverse Each Word in Sentence
// Input: "Aashish kaise ho" → Output: "hsihsaA esiak oh"
const str = "Aashish kaise ho";
const reverseStr = str.split(" ").map((word) => 
  word.split("").reverse().join("") // reverse each word
);
console.log(reverseStr.join(" "));

// 🟩 Q2. Check if a Given Object is an Array
const checkArray = (element) => Array.isArray(element);
console.log(checkArray([]));  // true
console.log(checkArray({}));  // false

// 🟩 Q3. Empty an Array Without Reassigning
const arr = [3,4,5,2,5,3];
arr.length = 0;  // truncate the array
console.log(arr); // []

// 🟩 Q4. Check if a Number is an Integer
const num = 23;
console.log(num % 1 === 0 ? "Integer" : "Not Integer");

// 🟩 Q5. Duplicate an Array
function duplicate(arr){
  return arr.concat(arr);  // merge array with itself
}
console.log(duplicate([1,2,3,4,5]));

// 🟩 Q6. Reverse a Number
function reverseNum(num){
  return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNum(124));

// ➕ Another approach using loop
function reverseNo(num){
  let rev = 0;
  while(num > 0){
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverseNo(4321));

// 🟩 Q7. Check if a String is Palindrome
function checkPalindrome(str){
  const cleanedStr = str.toLowerCase();
  const reverse = cleanedStr.split("").reverse().join("");
  console.log(cleanedStr === reverse ? "Palindrome" : "Not Palindrome");
}
checkPalindrome("Aashish");

// 🟩 Q8. Return String with Letters in Alphabetical Order
function alphabetical(str){
  return str.split("").sort().join("");
}
console.log(alphabetical("Apple")); // Aelpp

// 🟩 Q9. Capitalize First Letter of Each Word
function upperCase(str){
  return str.split(" ").map((word) => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
}
console.log(upperCase("aashish kumar kha ho"));

// 🟩 Q10. Count Occurrences of Each Character
function OCC(str){
  let occurrences = {};
  str.split("").forEach((char) => {
    occurrences[char] = (occurrences[char] || 0) + 1;
  });
  return occurrences;
}
console.log(OCC("Aashish"));

// 🟩 Q11. Sum All Elements in an Array
let arr1 = [2,3,5,1,6,6];
let sum = 0;
arr1.forEach((e) => sum += e);
console.log(sum);

// 🟩 Q12. Add Only Number Type Elements from Mixed Array
const arr2 = [3,5,7,2,12,"Aashish","kumar",4];
let sums = 0;
arr2.forEach((elem) => {
  if(typeof elem === "number") sums += elem;
});
console.log(sums);

// 🟩 Q13. Filter Objects Based on Gender == 'Male'
let arr3 = [
  {name: "Aashish", gender: "Male"},
  {name: "Ankit", gender: "Male"},
  {name: "Aditi", gender: "Female"},
  {name: "Arya", gender: "Female"},
  {name: "Aditya", gender: "Male"},
];
const males = arr3.filter(obj => obj.gender === "Male");
console.log(males);

// 🟩 Q14. Return the Type of Given Argument
function typeTeller(arg){
  return typeof arg;
}
console.log(typeTeller([]));           // object
console.log(typeTeller("Aashish"));    // string
console.log(typeTeller(12));           // number
console.log(typeTeller(true));         // boolean
console.log(typeTeller(undefined));    // undefined
console.log(typeTeller(function(){})); // function

// ----------------- 🔹 Array Questions -------------------

// 🟩 Q15. Clone an Array
function cloneArr(arr){
  return [...arr]; // spread operator to clone
}
console.log(cloneArr([4,5,62,15,4]));

// 🟩 Q16. Get First N Elements of an Array
function firstElem(arr, n = 1){
  if(n <= arr.length){
    console.log(arr.slice(0, n));
  } else {
    console.log(`Only ${arr.length} elements exist`);
  }
}
firstElem([1,2,3,4,5], 3);  // [1,2,3]

// 🟩 Q17. Find Most Frequent Item in Array
function frequent(arr){
  let freq = {};
  arr.forEach((elem) => {
    freq[elem] = (freq[elem] || 0) + 1;
  });
  const mostFreq = Object.keys(freq).reduce((a, b) => 
    freq[a] > freq[b] ? a : b
  );
  console.log(mostFreq);
}
frequent([3,4,5,2,1,5,2,5,2,2,62,1,3]);

// 🟩 Q18. Compute Union of Two Arrays
function union(arr1, arr2){
  return [...new Set(arr1.concat(arr2))]; // remove duplicates
}
console.log(union([1,2,3,4], [4,5,6,2]));