# Objects and Arrays

Objects model entities; arrays manage ordered collections. Together they are used in almost every real project.

## What to Master

1. Creating and reading objects/arrays
2. Dot vs bracket notation
3. Object and array mutation rules
4. High-value array methods: `map`, `filter`, `reduce`, `find`, `some`, `every`
5. Destructuring and spread/rest

## Practice File

Run: `Objects_Arrays.js`

## Top Interview Questions (Detailed)

### 1) Dot notation vs bracket notation?

- Dot notation: cleaner, for known valid identifiers (`obj.name`).
- Bracket notation: dynamic keys and special keys (`obj[key]`, `obj["first-name"]`).

### 2) How do shallow copy and deep copy differ?

- Shallow copy (`{...obj}`, `Object.assign`) copies top-level properties only.
- Nested objects/arrays still share references.
- Deep copy duplicates nested structures too (for plain JSON-like data, `structuredClone` is preferred).

### 3) Why use `map`, `filter`, and `reduce`?

- `map`: transform each element to new array.
- `filter`: keep items matching condition.
- `reduce`: combine to single value (sum, grouped object, flattened array, etc.).
These methods are declarative and reduce mutation bugs.

### 4) When should you mutate arrays and when avoid it?

In modern apps (especially React/state-driven UIs), prefer immutable patterns (`map`, `filter`, spread) for predictable updates. Mutation is acceptable in isolated, performance-critical areas when carefully controlled.

### 5) What is object destructuring useful for?

It pulls required fields with cleaner syntax, supports renaming/defaults, and improves readability in function parameters and API responses.

### 6) Difference between map and forEach?

- `map` returns a new transformed array.
- `forEach` is for side effects and returns `undefined`.

### 7) What is the role of reduce in data processing?

`reduce` transforms an array into a single accumulated result: sums, grouped data, lookup maps, or pipelines.

### 8) Difference between slice and splice?

- `slice(start, end)` returns a new copy and does not mutate original.
- `splice(start, count, ...)` mutates original array.

### 9) What is immutability in arrays/objects and why important?

Immutability means creating new updated copies rather than mutating source. It simplifies state tracking and debugging in UI frameworks.

### 10) How do some and every differ?

- `some` checks if at least one element passes condition.
- `every` checks if all elements pass condition.

## MCQs with Answers and Explanations

1. Which method returns a new array with transformed elements?
	- A) `forEach`
	- B) `map`
	- C) `reduce`
	- D) `some`
	- Answer: B
	- Explanation: `map` always returns a transformed array of same length.

2. Which method returns only elements that pass condition?
	- A) `filter`
	- B) `find`
	- C) `map`
	- D) `sort`
	- Answer: A
	- Explanation: `filter` returns all matching elements.

3. Which notation is needed for dynamic key access?
	- A) Dot notation
	- B) Bracket notation
	- C) Optional chaining only
	- D) Template literal only
	- Answer: B
	- Explanation: Dynamic variable keys require bracket syntax.

4. `find` returns:
	- A) all matched elements
	- B) first matched element
	- C) boolean
	- D) index list
	- Answer: B
	- Explanation: `find` returns the first match or `undefined`.

5. Spread in arrays (`[...arr]`) creates:
	- A) deep copy always
	- B) shallow copy
	- C) reference copy
	- D) immutable deep freeze
	- Answer: B
	- Explanation: Nested references are still shared.

6. Which method is best for summing array values?
	- A) `map`
	- B) `reduce`
	- C) `sort`
	- D) `includes`
	- Answer: B
	- Explanation: `reduce` accumulates elements into one result.

7. Which method mutates original array?
	- A) slice
	- B) map
	- C) splice
	- D) filter
	- Answer: C
	- Explanation: `splice` changes source array.

8. Which returns first matching element?
	- A) filter
	- B) find
	- C) every
	- D) some
	- Answer: B
	- Explanation: `find` returns first match.

9. Which statement is true for `forEach`?
	- A) returns new transformed array
	- B) returns undefined
	- C) returns boolean
	- D) returns first element
	- Answer: B
	- Explanation: `forEach` is for side effects.

10. Which method checks all items satisfy condition?
	 - A) some
	 - B) every
	 - C) includes
	 - D) findIndex
	 - Answer: B
	 - Explanation: `every` requires all elements to pass.
