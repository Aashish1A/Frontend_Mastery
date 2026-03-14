# JavaScript Fundamentals

This section builds a strong base before advanced JavaScript topics.

## What to Master

1. JavaScript engine basics and execution context
2. Variable declarations: var, let, const
3. Primitive values and dynamic typing
4. Operators, conditions, loops, and control flow
5. Type conversion, coercion, and edge cases
6. Strict mode, truthy/falsy, and common pitfalls

## Practice File

Run: `Fundamentals.js`

## Top Interview Questions (Detailed)

### 1) What is the difference between var, let, and const?

- `var`: function-scoped, re-declarable, hoisted with `undefined`.
- `let`: block-scoped, mutable, cannot be re-declared in same scope.
- `const`: block-scoped, cannot be reassigned after declaration.

### 2) What is hoisting in JavaScript?

Hoisting means declarations are conceptually moved to top of scope during compilation.
- Function declarations are hoisted with body.
- `var` is hoisted and initialized as `undefined`.
- `let` and `const` are hoisted but uninitialized until declaration.

### 3) What is temporal dead zone (TDZ)?

TDZ is the phase from block start to declaration line where `let`/`const` variables exist but cannot be accessed. Access causes `ReferenceError`.

### 4) What are truthy and falsy values?

Falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
Everything else is truthy.

### 5) What is strict mode and why is it useful?

`"use strict"` prevents unsafe behaviors and catches silent bugs (like accidental globals), making code predictable and easier to debug.

### 6) Explain type conversion vs type coercion.

- Conversion is explicit (`Number("42")`).
- Coercion is implicit (`"5" + 1` becomes string concatenation).

### 7) What is the difference between == and ===?

- `==` allows type coercion.
- `===` compares both value and type strictly.

### 8) What are execution contexts?

JavaScript runs in execution contexts:
- Global context (created first)
- Function context (created per function call)
Each context has variable environment, lexical environment, and `this` binding.

### 9) What is lexical scope?

A function can access variables from scopes where it was defined, not where it is called.

### 10) Why is typeof null equal to object?

This is a historical JavaScript implementation quirk kept for backward compatibility.

## MCQs with Answers and Explanations

1. Which keyword is function-scoped?
	- A) let
	- B) const
	- C) var
	- D) all of these
	- Answer: C
	- Explanation: `var` follows function scope.

2. Which of these is not falsy?
	- A) 0
	- B) ""
	- C) []
	- D) null
	- Answer: C
	- Explanation: Empty arrays are truthy.

3. `"5" + 2` gives:
	- A) 7
	- B) "52"
	- C) NaN
	- D) error
	- Answer: B
	- Explanation: String concatenation happens.

4. `"5" - 2` gives:
	- A) 3
	- B) "52"
	- C) NaN
	- D) undefined
	- Answer: A
	- Explanation: Numeric coercion occurs with `-`.

5. Best equality operator for predictable checks?
	- A) ==
	- B) ===
	- C) =
	- D) !=
	- Answer: B
	- Explanation: Strict equality avoids coercion surprises.

6. `typeof null` is:
	- A) null
	- B) undefined
	- C) object
	- D) number
	- Answer: C
	- Explanation: Legacy behavior.

7. Which declaration cannot be reassigned?
	- A) var
	- B) let
	- C) const
	- D) all
	- Answer: C
	- Explanation: `const` binding is fixed.

8. TDZ applies to:
	- A) var only
	- B) function declarations only
	- C) let and const
	- D) objects only
	- Answer: C
	- Explanation: Access before declaration throws error.

9. JavaScript is:
	- A) statically typed
	- B) dynamically typed
	- C) compile-time typed only
	- D) strongly static only
	- Answer: B
	- Explanation: Types are attached to values at runtime.

10. Strict mode helps by:
	 - A) making code slower
	 - B) ignoring errors
	 - C) catching unsafe patterns
	 - D) converting JS to TypeScript
	 - Answer: C
	 - Explanation: It surfaces hidden mistakes early.
