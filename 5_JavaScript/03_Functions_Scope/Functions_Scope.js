/*
========================================================
JavaScript Functions, Scope, Hoisting & Closures
Coding Revision for Interviews
========================================================

Topics Covered

1. Function Declaration
2. Function Expression
3. Arrow Functions
4. Parameters vs Arguments
5. Default Parameters
6. Rest Parameters
7. Callback Functions
8. Scope (Global, Function, Block)
9. Lexical Scope
10. Hoisting
11. Temporal Dead Zone
12. Closures
13. IIFE
14. Important Interview Edge Cases

========================================================
*/


// ==========================================
// 1️⃣ Function Declaration
// ==========================================

function greet() {
  console.log("Hello JavaScript");
}

greet();


// ==========================================
// 2️⃣ Function with Parameters
// ==========================================

function add(a, b) {
  return a + b;
}

console.log(add(5, 3));



// ==========================================
// 3️⃣ Function Expression
// ==========================================

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5));



// ==========================================
// 4️⃣ Arrow Function
// ==========================================

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 3));


// short arrow function

const square = n => n * n;

console.log(square(6));



// ==========================================
// 5️⃣ Default Parameters
// ==========================================

function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser();
greetUser("Aashish");



// ==========================================
// 6️⃣ Rest Parameters
// ==========================================

function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1,2,3,4,5));



// ==========================================
// 7️⃣ Callback Functions
// ==========================================

function processUser(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log("Hello " + name);
}

processUser("Aashish", sayHello);



// ==========================================
// 8️⃣ Global Scope
// ==========================================

let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar);
}

showGlobal();



// ==========================================
// 9️⃣ Function Scope
// ==========================================

function testScope() {
  let localVar = "Inside Function";

  console.log(localVar);
}

testScope();

// console.log(localVar); ❌ error



// ==========================================
// 🔟 Block Scope
// ==========================================

{
  let blockVar = "Block scope";
  console.log(blockVar);
}

// console.log(blockVar); ❌ error



// ==========================================
// 1️⃣1️⃣ Lexical Scope
// ==========================================

function outer() {

  let outerVar = "Outer Variable";

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer();



// ==========================================
// 1️⃣2️⃣ Hoisting
// ==========================================

// function declaration hoisting

sayHi();

function sayHi(){
  console.log("Hello");
}



// variable hoisting with var

console.log(x); // undefined

var x = 10;



// let and const hoisting

// console.log(y); ❌ ReferenceError
let y = 20;



// ==========================================
// 1️⃣3️⃣ Temporal Dead Zone (TDZ)
// ==========================================

// console.log(z); ❌ ReferenceError

let z = 50;



// ==========================================
// 1️⃣4️⃣ Closure
// ==========================================

function outerFunction() {

  let counter = 0;

  return function innerFunction() {
    counter++;
    console.log(counter);
  };

}

const counterFn = outerFunction();

counterFn();
counterFn();
counterFn();



// ==========================================
// 1️⃣5️⃣ IIFE (Immediately Invoked Function)
// ==========================================

(function(){
  console.log("IIFE executed");
})();



// ==========================================
// 1️⃣6️⃣ Important Interview Edge Cases
// ==========================================


// var scope issue

for (var i = 0; i < 3; i++) {

  setTimeout(function(){
    console.log(i);
  }, 1000);

}

// prints 3 3 3



// fix using let

for (let j = 0; j < 3; j++) {

  setTimeout(function(){
    console.log(j);
  }, 1000);

}

// prints 0 1 2