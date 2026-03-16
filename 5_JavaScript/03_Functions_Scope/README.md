# JavaScript Functions, Scope, Hoisting & Closures – Interview Questions

This section covers **very important JavaScript interview concepts** related to:

* Functions
* Scope
* Hoisting
* Closures

These topics are **frequently asked in frontend interviews** because they explain how JavaScript works internally.

---

# 1. What is a Function in JavaScript?

A function is a **block of reusable code** that performs a specific task.

Functions help make code **modular, reusable, and easier to maintain**.

Example:

```javascript
function greet(){
  console.log("Hello JavaScript");
}

greet();
```

Here `greet` is a function that prints a message.

---

# 2. What is the difference between Parameters and Arguments?

**Parameters** are variables defined in the function definition.

**Arguments** are the actual values passed when calling the function.

Example:

```javascript
function add(a, b){   // a and b are parameters
  return a + b;
}

add(5, 3); // 5 and 3 are arguments
```

---

# 3. What is a Function Declaration?

A function declaration is defined using the `function` keyword.

Example:

```javascript
function sayHello(){
  console.log("Hello");
}
```

Important property:

Function declarations are **hoisted**, meaning they can be called before they appear in the code.

Example:

```javascript
sayHello();

function sayHello(){
  console.log("Hello");
}
```

---

# 4. What is a Function Expression?

A function expression is when a function is assigned to a variable.

Example:

```javascript
const greet = function(){
  console.log("Hello");
};
```

Unlike function declarations, **function expressions are not hoisted in the same way**.

Calling them before definition causes an error.

---

# 5. What are Arrow Functions?

Arrow functions were introduced in **ES6** and provide a shorter syntax for writing functions.

Example:

```javascript
const add = (a, b) => {
  return a + b;
};
```

Short version:

```javascript
const square = n => n * n;
```

Important point:

Arrow functions **do not have their own `this` binding**.

---

# 6. What are Default Parameters?

Default parameters allow functions to have **default values if no argument is passed**.

Example:

```javascript
function greet(name = "Guest"){
  console.log("Hello " + name);
}

greet();
```

Output:

```
Hello Guest
```

---

# 7. What are Rest Parameters?

Rest parameters allow a function to accept **multiple arguments as an array**.

Example:

```javascript
function sum(...numbers){
  return numbers.reduce((a,b)=>a+b,0);
}

sum(1,2,3,4);
```

Here `numbers` becomes an array.

---

# 8. What is Scope in JavaScript?

Scope determines **where variables are accessible in the program**.

JavaScript has three main scopes:

* Global Scope
* Function Scope
* Block Scope

---

# 9. What is Global Scope?

A variable declared outside functions has **global scope**.

Example:

```javascript
let name = "Aashish";

function printName(){
  console.log(name);
}
```

Global variables can be accessed anywhere in the program.

---

# 10. What is Function Scope?

Variables declared inside a function can only be accessed **inside that function**.

Example:

```javascript
function test(){
  let x = 10;
  console.log(x);
}
```

Accessing `x` outside the function will cause an error.

---

# 11. What is Block Scope?

Variables declared using `let` or `const` inside `{}` are **block scoped**.

Example:

```javascript
{
  let x = 10;
}

console.log(x); // error
```

---

# 12. What is Lexical Scope?

Lexical scope means that **a function can access variables from its parent scope**.

Example:

```javascript
function outer(){

  let message = "Hello";

  function inner(){
    console.log(message);
  }

  inner();
}
```

Here `inner()` can access `message`.

---

# 13. What is Hoisting in JavaScript?

Hoisting is JavaScript's behavior where **variable and function declarations are moved to the top of their scope before execution**.

Example:

```javascript
console.log(x);

var x = 10;
```

Output:

```
undefined
```

This happens because `var x` is hoisted.

---

# 14. What is Temporal Dead Zone (TDZ)?

Temporal Dead Zone is the time between **variable declaration and initialization** when accessing the variable causes an error.

Example:

```javascript
console.log(a);

let a = 10;
```

This will throw a **ReferenceError**.

---

# 15. What is a Closure in JavaScript?

A closure is a function that **remembers variables from its outer scope even after the outer function has finished executing**.

Example:

```javascript
function outer(){

  let count = 0;

  return function inner(){
    count++;
    console.log(count);
  };

}

const counter = outer();

counter();
counter();
```

Output:

```
1
2
```

The inner function remembers the `count` variable.

Closures are used in:

* Data privacy
* Function factories
* Event handlers
* React hooks

---

# 16. What is an IIFE?

IIFE means **Immediately Invoked Function Expression**.

It runs immediately after it is defined.

Example:

```javascript
(function(){
  console.log("Executed immediately");
})();
```

---

# Most Asked MCQ Questions

---

### MCQ 1

What will be the output?

```javascript
console.log(x);
var x = 10;
```

**Options:**

- **A.** 10
- **B.** undefined
- **C.** error
- **D.** null

**Answer:** `undefined`

---

### MCQ 2

Which keyword creates block scope?

- **A.** var
- **B.** let
- **C.** const
- **D.** both B and C

**Answer:** `both B and C`

---

### MCQ 3

What is a closure?

A function that:

- **A.** Runs automatically
- **B.** Stores data in database
- **C.** Remembers variables from outer scope
- **D.** Executes only once

**Answer:** `Remembers variables from outer scope`

---

### MCQ 4

Which function type does NOT have its own `this`?

- **A.** Function declaration
- **B.** Function expression
- **C.** Arrow function
- **D.** Constructor function

**Answer:** `Arrow function`

---

### MCQ 5

What will be the output?

```javascript
function test(){
  console.log(a);
  var a = 5;
}

test();
```

**Options:**

- **A.** 5
- **B.** undefined
- **C.** error
- **D.** null

**Answer:** `undefined`

---

# Quick Revision Points

* Functions make code reusable
* JavaScript supports different types of functions
* Scope controls variable accessibility
* Hoisting moves declarations to the top
* Closures allow functions to remember outer variables
* Arrow functions have lexical `this`

These topics are **very commonly asked in JavaScript interviews**.

---