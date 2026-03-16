/*
===========================================
JavaScript Fundamentals Revision
===========================================
Topics Covered:
1. What is JavaScript
2. How JS runs in browser
3. Variables
4. var vs let vs const
5. Naming Rules
6. Data Types
7. typeof operator
8. Comments
===========================================
*/


// ===========================================
// 1. Hello World
// ===========================================

console.log("Hello JavaScript");


// ===========================================
// 2. Variables
// ===========================================

// var (old way)
var name = "Aashish";

// let (modern)
let age = 21;

// const (cannot be reassigned)
const country = "India";

console.log(name, age, country);


// ===========================================
// 3. var vs let vs const
// ===========================================

// var can be redeclared
var x = 10;
var x = 20;

console.log(x); // 20


// let cannot be redeclared
let y = 30;
// let y = 40  ❌ Error

y = 40; // ✅ allowed

console.log(y);


// const cannot be reassigned
const PI = 3.14;
// PI = 3.15 ❌ Error

console.log(PI);


// ===========================================
// 4. Naming Rules
// ===========================================

// allowed
let userName = "Aashish";
let _price = 200;
let $value = 100;

// not allowed
// let 1name
// let user-name


// ===========================================
// 5. Primitive Data Types
// ===========================================

let str = "JavaScript"; // string
let num = 100; // number
let isLoggedIn = true; // boolean
let empty = null; // null
let notDefined; // undefined
let unique = Symbol("id"); // symbol
let big = 12345678901234567890n; // bigint


console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof empty);  // object (this is a quirk in JavaScript, null is considered an object)
console.log(typeof notDefined); // undefined


// ===========================================
// 6. typeof Operator
// ===========================================

console.log(typeof "Hello");   // string
console.log(typeof 100);       // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined


// ===========================================
// 7. Comments
// ===========================================

// single line comment

/*
multi
line
comment
*/