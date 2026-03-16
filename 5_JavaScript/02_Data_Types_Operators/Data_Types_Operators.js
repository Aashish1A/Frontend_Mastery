/*
====================================================
JavaScript Data Types & Operators - Coding Revision
====================================================

Topics Covered

1. Primitive Data Types
2. Non-Primitive Data Types
3. typeof operator
4. Arithmetic Operators
5. Assignment Operators
6. Comparison Operators
7. == vs ===
8. Logical Operators
9. Unary Operators
10. Ternary Operator
11. Important Interview Edge Cases

====================================================
*/


// ===========================================
// 1️⃣ STRING
// ===========================================

let firstName = "Aashish";
let lastName = 'Kumar';
let city = `Delhi`;

console.log(firstName);
console.log(typeof firstName); // string



// ===========================================
// 2️⃣ NUMBER
// ===========================================

let age = 21;
let price = 199.99;

console.log(age);
console.log(typeof age); // number



// ===========================================
// 3️⃣ BOOLEAN
// ===========================================

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(typeof isLoggedIn); // boolean



// ===========================================
// 4️⃣ UNDEFINED
// ===========================================

let score;

console.log(score); // undefined
console.log(typeof score); // undefined



// ===========================================
// 5️⃣ NULL
// ===========================================

let selectedUser = null;

console.log(selectedUser);
console.log(typeof selectedUser); // object (JS bug)



// ===========================================
// 6️⃣ SYMBOL
// ===========================================

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false



// ===========================================
// 7️⃣ BIGINT
// ===========================================

let bigNumber = 123456789012345678901234567890n;

console.log(typeof bigNumber); // bigint



// ===========================================
// 8️⃣ OBJECT (Non Primitive)
// ===========================================

let user = {
  name: "Aashish",
  age: 21
};

console.log(user);
console.log(typeof user); // object



// ===========================================
// 9️⃣ ARRAY
// ===========================================

let numbers = [10, 20, 30];

console.log(numbers);
console.log(typeof numbers); // object



// ===========================================
// 🔟 FUNCTION
// ===========================================

function greet(){
  return "Hello";
}

console.log(typeof greet); // function



// ===========================================
// 1️⃣1️⃣ typeof Examples
// ===========================================

console.log(typeof "JavaScript"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object



// ===========================================
// 1️⃣2️⃣ Arithmetic Operators
// ===========================================

let a = 10;
let b = 5;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus
console.log(a ** b); // exponentiation



// ===========================================
// 1️⃣3️⃣ Assignment Operators
// ===========================================

let x = 10;

x += 5; // x = x + 5
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);

x /= 4;
console.log(x);



// ===========================================
// 1️⃣4️⃣ Comparison Operators
// ===========================================

console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 8);  // false

console.log(10 == "10");  // true (type conversion)
console.log(10 === "10"); // false (strict check)

console.log(10 != "10");  // false
console.log(10 !== "10"); // true



// ===========================================
// 1️⃣5️⃣ Logical Operators
// ===========================================

let ageCheck = 20;

console.log(ageCheck > 18 && ageCheck < 30); // true
console.log(ageCheck < 18 || ageCheck > 15); // true
console.log(!(ageCheck > 18)); // false



// ===========================================
// 1️⃣6️⃣ Unary Operators
// ===========================================

let num = 5;

num++; // increment
console.log(num); // 6

num--; // decrement
console.log(num); // 5



// ===========================================
// 1️⃣7️⃣ Ternary Operator
// ===========================================

let age2 = 18;

let result = age2 >= 18 ? "Adult" : "Minor";

console.log(result);

// ===========================================
// 1️⃣9️⃣ Type Coercion (Implicit Conversion)
// ===========================================

// JavaScript automatically converts types during operations

console.log("5" + 2); // "52" (number converted to string)

console.log("5" - 2); // 3 (string converted to number)

console.log("5" * 2); // 10

console.log("5" / 2); // 2.5

console.log("5" - "2"); // 3



// ===========================================
// 2️⃣0️⃣ Explicit Type Conversion
// ===========================================

// String conversion

let num1 = 100;
let str = String(num1);

console.log(str); // "100"
console.log(typeof str); // string


// Number conversion

let strNum = "50";

let convertedNum = Number(strNum);

console.log(convertedNum); // 50
console.log(typeof convertedNum); // number


// Boolean conversion

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false



// ===========================================
// 2️⃣1️⃣ Truthy and Falsy Values
// ===========================================

// Falsy values (only 6)

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


// Truthy values examples

console.log(Boolean("Aashish"));
console.log(Boolean(100));
console.log(Boolean([]));
console.log(Boolean({}));



// ===========================================
// 2️⃣2️⃣ Short Circuit Evaluation
// ===========================================

// OR operator

console.log("" || "Default Value"); 
// first truthy value is returned


// AND operator

console.log("Hello" && "World");
// returns last truthy value



// ===========================================
// 2️⃣3️⃣ Nullish Coalescing Operator
// ===========================================

// returns right value if left is null or undefined

let username = null;

let results = username ?? "Guest";

console.log(results);



// ===========================================
// 2️⃣4️⃣ NaN Examples
// ===========================================

console.log("Hello" * 5); // NaN

console.log(typeof NaN); // number

console.log(NaN === NaN); // false



// checking NaN

console.log(isNaN("Hello")); // true

console.log(Number.isNaN(NaN)); // true



// ===========================================
// 2️⃣5️⃣ Important JavaScript Edge Cases
// ===========================================

// empty array comparison
console.log([] == false); // true

// empty string comparison
console.log("" == false); // true

// null comparison
console.log(null == undefined); // true

// strict comparison
console.log(null === undefined); // false



// ===========================================
// 2️⃣6️⃣ Double NOT (!!) Trick
// ===========================================

// convert value to boolean

console.log(!!"Hello"); // true
console.log(!!0); // false
console.log(!!1); // true

// ===========================================
// 1️⃣8️⃣ Important Interview Edge Cases
// ===========================================

// typeof null
console.log(typeof null); // object

// typeof array
console.log(typeof []); // object

// typeof NaN
console.log(typeof NaN); // number

// NaN comparison
console.log(NaN === NaN); // false

// string + number
console.log("5" + 2); // "52"

// string - number
console.log("5" - 2); // 3