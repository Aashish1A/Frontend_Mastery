# JavaScript Execution Context, Call Stack & Event Loop – Interview Questions

These concepts explain **how JavaScript executes code internally**.

They are **very frequently asked in frontend interviews**.

---

# 1. What is Execution Context in JavaScript?

Execution Context is the **environment where JavaScript code runs**.

Every time JavaScript executes code, it creates an execution context.

There are two main types:

1. Global Execution Context
2. Function Execution Context

Example:

```javascript
function greet(){
  console.log("Hello");
}

greet();
```

When this runs:

1. Global Execution Context is created
2. Function Execution Context is created when `greet()` is called

---

# 2. What is the Call Stack?

The Call Stack is a **data structure that keeps track of function execution order**.

It follows the **LIFO principle (Last In First Out)**.

Example:

```javascript
function one(){
  two();
}

function two(){
  three();
}

function three(){
  console.log("Hello");
}

one();
```

Execution order:

```
Call Stack
-----------
three()
two()
one()
```

Functions are **pushed to the stack and popped after execution**.

---

# 3. What is the Event Loop?

The Event Loop allows JavaScript to handle **asynchronous operations**.

JavaScript itself is **single-threaded**, but the event loop allows it to perform tasks like:

* setTimeout
* API requests
* Promises
* DOM events

Flow:

```
Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack
```

The Event Loop checks:

If the call stack is empty → move tasks from queue to stack.

---

# 4. What is the difference between Microtask and Macrotask?

JavaScript has **two queues for async tasks**.

## Microtask Queue

High priority tasks.

Examples:

* Promise.then
* async/await
* queueMicrotask

Example:

```javascript
Promise.resolve().then(()=>{
  console.log("Microtask");
});
```

---

## Macrotask Queue

Lower priority tasks.

Examples:

* setTimeout
* setInterval
* DOM events

Example:

```javascript
setTimeout(()=>{
  console.log("Macrotask");
},0);
```

---

# 5. Which runs first: Microtask or Macrotask?

Microtasks always run **before Macrotasks**.

Example:

```javascript
setTimeout(()=>{
  console.log("Timeout");
},0);

Promise.resolve().then(()=>{
  console.log("Promise");
});
```

Output:

```
Promise
Timeout
```

---

# 6. What is the difference between setTimeout and Promise?

| setTimeout            | Promise                |
| --------------------- | ---------------------- |
| Macrotask             | Microtask              |
| Lower priority        | Higher priority        |
| Runs after microtasks | Runs before macrotasks |

Example:

```javascript
setTimeout(()=>{
 console.log("Timeout");
},0);

Promise.resolve().then(()=>{
 console.log("Promise");
});
```

Output:

```
Promise
Timeout
```

---

# 7. What happens in this code?

```javascript
console.log("Start");

setTimeout(()=>{
  console.log("Timeout");
},0);

console.log("End");
```

Output:

```
Start
End
Timeout
```

Reason:

`setTimeout` runs asynchronously through the event loop.

---

# Most Asked MCQ Questions

---

### MCQ 1

JavaScript uses which execution model?

A. Multi-threaded
B. Single-threaded
C. Dual-threaded
D. Parallel execution

Answer:

```
Single-threaded
```

---

### MCQ 2

Which data structure does the call stack follow?

A. FIFO
B. LIFO
C. Random
D. Circular

Answer:

```
LIFO
```

---

### MCQ 3

Which runs first?

A. setTimeout
B. Promise.then

Answer:

```
Promise.then
```

---

### MCQ 4

Which queue has higher priority?

A. Macrotask queue
B. Microtask queue

Answer:

```
Microtask queue
```

---

# Quick Revision Points

* JavaScript is **single-threaded**
* Execution Context is where code runs
* Call Stack manages function execution
* Event Loop handles async tasks
* Microtasks run before Macrotasks
* Promise callbacks execute before setTimeout

These concepts are **very commonly asked in JavaScript interviews**.

---
