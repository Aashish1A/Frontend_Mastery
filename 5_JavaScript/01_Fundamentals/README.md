# JavaScript Fundamentals – Interview Revision

This section covers the **core fundamentals of JavaScript** that are frequently asked in interviews.
Understanding these concepts is extremely important because most interview questions build on these basics.

---

# 1. What is JavaScript?

JavaScript is a **high-level, interpreted programming language** used to build **dynamic and interactive web applications**.

It is one of the three core technologies of web development:

* HTML → Structure
* CSS → Styling
* JavaScript → Logic & Interactivity

JavaScript runs inside the **browser using a JavaScript engine**.

Examples of JavaScript engines:

* Chrome → V8 Engine
* Firefox → SpiderMonkey
* Safari → JavaScriptCore

JavaScript can also run outside the browser using **Node.js**.

Example:

```javascript
console.log("Hello JavaScript");
```

JavaScript is commonly used for:

* DOM Manipulation
* API Calls
* Form Validation
* Dynamic UI Updates
* Event Handling
* Single Page Applications (React, Angular, Vue)

---

# 2. Is JavaScript a Compiled or Interpreted Language?

JavaScript is **interpreted**, but modern engines use **Just-In-Time (JIT) compilation**.

How it works internally:

1. JavaScript code is parsed.
2. Engine converts it to **bytecode**.
3. Frequently used code gets **optimized and compiled into machine code**.

Example engine:

Chrome V8 Engine.

---

# 3. Is JavaScript Single Threaded?

Yes, JavaScript is **single-threaded**.

This means it can **execute only one task at a time**.

JavaScript uses a **single call stack** to execute code.

However, JavaScript can still perform asynchronous operations using:

* Event Loop
* Callback Queue
* Web APIs
* Promises
* Async/Await

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");
```

Output:

```
Start
End
Async Task
```

This happens because **setTimeout runs asynchronously**.

---

# 4. What are Variables in JavaScript?

Variables are containers used to **store data values**.

JavaScript provides three ways to declare variables:

* var
* let
* const

Example:

```javascript
var name = "Aashish";
let age = 21;
const country = "India";
```

---

# 5. What is the Difference Between var, let, and const?

### var

`var` is the older way of declaring variables.

Characteristics:

* Function scoped
* Can be redeclared
* Can be reassigned
* Hoisted

Example:

```javascript
var x = 10;
var x = 20;

console.log(x); // 20
```

---

### let

`let` was introduced in **ES6 (2015)**.

Characteristics:

* Block scoped
* Cannot be redeclared
* Can be reassigned
* Hoisted but in Temporal Dead Zone

Example:

```javascript
let age = 20;
age = 21;
```

---

### const

`const` is used for values that should not change.

Characteristics:

* Block scoped
* Cannot be redeclared
* Cannot be reassigned
* Must be initialized during declaration

Example:

```javascript
const PI = 3.14;
```

Note:

Objects declared with const can still be modified internally.

Example:

```javascript
const user = { name: "Aashish" };

user.name = "Rahul"; // allowed
```

---

# 6. What are the Naming Rules for Variables?

Rules:

* Variable names can contain letters, numbers, `_`, `$`
* Cannot start with numbers
* Cannot use reserved keywords
* JavaScript is case-sensitive

Valid examples:

```javascript
let userName;
let _price;
let $amount;
```

Invalid examples:

```javascript
let 1name;
let user-name;
```

---

# 7. What are Data Types in JavaScript?

JavaScript has **two main categories of data types**.

---

## Primitive Data Types

Primitive values are **immutable** and stored directly in memory.

Types:

* String
* Number
* Boolean
* Undefined
* Null
* Symbol
* BigInt

Example:

```javascript
let name = "Aashish";
let age = 21;
let isStudent = true;
let value = null;
let x;
```

---

## Non-Primitive (Reference) Data Types

These store **references to memory locations**.

Types:

* Object
* Array
* Function

Example:

```javascript
let user = {
  name: "Aashish",
  age: 21
};

let numbers = [1,2,3,4];

function greet(){
  console.log("Hello");
}
```

---

# 8. What is the typeof Operator?

The `typeof` operator is used to determine the **data type of a variable**.

Example:

```javascript
console.log(typeof "Hello"); 
console.log(typeof 10);
console.log(typeof true);
```

Output:

```
string
number
boolean
```

---

# 9. Why Does typeof null Return "object"?

Example:

```javascript
console.log(typeof null);
```

Output:

```
object
```

This is actually a **bug in JavaScript** from the early implementation of the language.

It was never fixed because fixing it would break existing websites.

---

# 10. What is the Difference Between null and undefined?

### undefined

A variable that has been declared but **not assigned a value**.

Example:

```javascript
let x;
console.log(x);
```

Output:

```
undefined
```

---

### null

`null` represents an **intentional absence of value**.

Example:

```javascript
let user = null;
```

It means the variable is intentionally empty.

---

# 11. What are Comments in JavaScript?

Comments are used to **explain code** and are ignored during execution.

### Single Line Comment

```javascript
// this is a comment
```

### Multi Line Comment

```javascript
/*
multi line
comment
*/
```

---

# Most Asked MCQ Questions (JavaScript Fundamentals)

---

### MCQ 1

What will be the output?

```javascript
console.log(typeof null)
```

**Options:**

- **A.** null
- **B.** object
- **C.** undefined
- **D.** error

**Answer:** `object`

---

### MCQ 2

Which keyword cannot be reassigned?

- **A.** var
- **B.** let
- **C.** const
- **D.** function

**Answer:** `const`

---

### MCQ 3

JavaScript is a:

- **A.** Multi-threaded language
- **B.** Single-threaded language
- **C.** Compiled language
- **D.** Assembly language

**Answer:** `Single-threaded language`

---

### MCQ 4

Which of the following is NOT a primitive data type?

- **A.** String
- **B.** Number
- **C.** Boolean
- **D.** Object

**Answer:** `Object`

---

### MCQ 5

Which keyword was introduced in ES6?

- **A.** var
- **B.** let
- **C.** goto
- **D.** public

**Answer:** `let`

---

### MCQ 6

What will be the output?

```javascript
let x;
console.log(x);
```

**Options:**

- **A.** null
- **B.** undefined
- **C.** error
- **D.** 0

**Answer:** `undefined`

---

### MCQ 7

Which symbol is used for single line comments?

- **A.** `//`
- **B.** `/* */`
- **C.** `#`
- **D.** `--`

**Answer:** `//`

---

### MCQ 8

Which variable declaration allows redeclaration?

- **A.** let
- **B.** const
- **C.** var
- **D.** none

**Answer:** `var`

---

### MCQ 9

Which data type is immutable?

- **A.** Object
- **B.** Array
- **C.** Primitive types
- **D.** Function

**Answer:** `Primitive types`

---

### MCQ 10

Which JavaScript engine is used by Chrome?

- **A.** Chakra
- **B.** SpiderMonkey
- **C.** V8
- **D.** Rhino

**Answer:** `V8`

---