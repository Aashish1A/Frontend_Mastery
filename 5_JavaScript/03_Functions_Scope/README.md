# Functions and Scope

Functions are the core reusable unit in JavaScript. Scope controls variable visibility and memory access.

## What to Master

1. Function declaration, expression, and arrow functions
2. Parameters, default values, rest parameters
3. Return behavior
4. Scope: global, function, block
5. Closures and lexical environment

## Practice File

Run: `Functions_Scope.js`

## Top Interview Questions (Detailed)

### 1) Function declaration vs expression vs arrow function?

- Declarations are hoisted with full definition.
- Expressions are assigned to variables and are not fully usable before assignment.
- Arrow functions have lexical `this`, no own `arguments`, and cannot be used as constructors with `new`.

### 2) What is lexical scope?

An inner function can access variables from parent scopes where it was defined, not where it is called.

### 3) What is a closure?

A closure is a function plus the references to variables from its outer lexical scope. This allows state to persist between calls, such as counters, memoization, and private-like data.

### 4) Why are `let`/`const` safer in blocks?

They are block-scoped, reducing accidental variable leakage and bugs in loops/conditions. `var` can escape blocks and create hard-to-debug side effects.

### 5) What is the temporal dead zone?

It is the region from start of block until `let`/`const` declaration where the variable exists but cannot be accessed. Accessing it throws `ReferenceError`.

### 6) What are default parameters?

Default parameters let you provide fallback values when argument is `undefined`, improving function resilience.

### 7) What is the difference between rest parameter and spread operator?

- Rest (`...args`) in parameter position collects multiple arguments into array.
- Spread (`...arr`) in call/array/object expands iterable elements.

### 8) Explain callback and higher-order function.

- Callback: function passed into another function.
- Higher-order function: function that accepts/returns function.
They are core patterns in JavaScript design.

### 9) What is function purity?

A pure function gives same output for same input and has no side effects. Pure functions are easy to test and reason about.

### 10) What are call, apply, and bind?

- `call(thisArg, a, b)` invokes immediately.
- `apply(thisArg, [a, b])` invokes immediately with array args.
- `bind(thisArg)` returns new bound function.

## MCQs with Answers and Explanations

1. Which function type has lexical `this`?
	- A) Function declaration
	- B) Function expression
	- C) Arrow function
	- D) Constructor function
	- Answer: C
	- Explanation: Arrow functions inherit `this` from surrounding scope.

2. Which is true about closures?
	- A) They destroy outer scope variables
	- B) They keep access to lexical scope even after outer function returns
	- C) They work only with `var`
	- D) They cannot return functions
	- Answer: B
	- Explanation: Closure retains references to outer variables.

3. Can an arrow function be used with `new`?
	- A) Yes
	- B) No
	- C) Only in strict mode
	- D) Only with default params
	- Answer: B
	- Explanation: Arrow functions are not constructible.

4. Which scope does `let` use?
	- A) Function scope only
	- B) Global scope only
	- C) Block scope
	- D) Module scope only
	- Answer: C
	- Explanation: `let` follows block boundaries.

5. Default parameter is used when argument is:
	- A) `null`
	- B) `0`
	- C) `undefined`
	- D) `false`
	- Answer: C
	- Explanation: Default parameter triggers for `undefined`.

6. `...args` in function parameters is:
	- A) spread operator
	- B) rest parameter
	- C) destructuring only
	- D) optional chaining
	- Answer: B
	- Explanation: In parameter position, `...` collects remaining arguments into an array.

7. Which statement is true about closures?
	- A) They only work with global variables
	- B) They keep lexical scope access alive
	- C) They cannot return functions
	- D) They remove scope chain
	- Answer: B
	- Explanation: Closures preserve lexical references.

8. `bind()` does what?
	- A) calls function immediately
	- B) delays function by setTimeout
	- C) returns new function with fixed this
	- D) clones function deeply
	- Answer: C
	- Explanation: `bind` creates bound function reference.

9. Pure function means:
	- A) modifies global state
	- B) random output each call
	- C) deterministic and no side effects
	- D) only arrow function
	- Answer: C
	- Explanation: Pure functions are predictable.

10. Which is a higher-order function?
	 - A) function add(a, b)
	 - B) function that receives function argument
	 - C) function returning number only
	 - D) function without return
	 - Answer: B
	 - Explanation: Accepting/returning functions defines higher-order functions.
