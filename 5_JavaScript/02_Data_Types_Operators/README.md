# Data Types and Operators

Understanding types and operators is critical for writing bug-free logic.

## What to Master

1. Primitive vs reference types
2. `typeof`, `instanceof`, and `Array.isArray`
3. Arithmetic, assignment, comparison, and logical operators
4. Strict equality vs loose equality
5. Nullish coalescing (`??`) and optional chaining (`?.`)

## Practice File

Run: `Data_Types_Operators.js`

## Top Interview Questions (Detailed)

### 1) Primitive and reference types difference?

Primitive values (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) are copied by value.
Reference values (`object`, `array`, `function`) store memory references; assignment copies the reference, not deep data.

### 2) Difference between `==` and `===`?

- `==` compares after type coercion.
- `===` compares value and type without coercion.
Use `===` by default to avoid unexpected matches like `0 == false`.

### 3) What does optional chaining solve?

`obj?.a?.b` safely returns `undefined` if any step is `null`/`undefined` instead of throwing an error. It is ideal for uncertain nested data.

### 4) What does nullish coalescing (`??`) do?

`a ?? b` returns `b` only if `a` is `null` or `undefined`.
Unlike `||`, it does not treat `0`, `false`, or empty string as missing values.

### 5) Why is `typeof null` equal to `"object"`?

This is a historical legacy bug from early JavaScript implementation. It remains for backward compatibility.

### 6) What is the difference between Number(), parseInt(), and parseFloat()?

- `Number("12.5")` returns 12.5 and fails to `NaN` for invalid numeric forms.
- `parseInt("12.5")` returns 12 (integer part only).
- `parseFloat("12.5")` returns 12.5.

### 7) How does logical short-circuiting work?

- `A && B`: if A is falsy, B is not evaluated.
- `A || B`: if A is truthy, B is not evaluated.
This is used for guards and fallback patterns.

### 8) What are bitwise operators used for?

Bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`) operate on 32-bit integer representations and are used in low-level operations, flags, and optimization scenarios.

### 9) What is NaN and how do we check it?

`NaN` means "Not a Number" and is a numeric value representing invalid numeric results.
Use `Number.isNaN(value)` for reliable check.

### 10) Why can `[] + {}` and `{}` + `[]` look confusing?

They trigger coercion and parsing nuances where arrays/objects become string-like values in expressions. These are interview edge cases about coercion rules.

## MCQs with Answers and Explanations

1. Which is a primitive?
	- A) `[]`
	- B) `{}`
	- C) `Symbol("x")`
	- D) `function(){}`
	- Answer: C
	- Explanation: `Symbol` is a primitive type.

2. `5 === "5"` evaluates to:
	- A) true
	- B) false
	- C) error
	- D) undefined
	- Answer: B
	- Explanation: Types are different (`number` vs `string`).

3. Best operator to avoid coercion in equality checks?
	- A) `==`
	- B) `!=`
	- C) `===`
	- D) `<>`
	- Answer: C
	- Explanation: `===` compares both type and value.

4. Result of `0 || 10`?
	- A) 0
	- B) 10
	- C) false
	- D) error
	- Answer: B
	- Explanation: `0` is falsy, so `||` returns fallback value.

5. Result of `0 ?? 10`?
	- A) 0
	- B) 10
	- C) null
	- D) error
	- Answer: A
	- Explanation: `??` only falls back for `null`/`undefined`.

6. Which checks arrays reliably?
	- A) `typeof arr === "array"`
	- B) `arr instanceof Object`
	- C) `Array.isArray(arr)`
	- D) `typeof arr === "object[]"`
	- Answer: C
	- Explanation: `Array.isArray` is the robust standard check.

7. `0 ?? 99` returns:
	- A) 99
	- B) 0
	- C) null
	- D) false
	- Answer: B
	- Explanation: `??` only falls back on `null`/`undefined`.

8. `0 || 99` returns:
	- A) 0
	- B) 99
	- C) false
	- D) error
	- Answer: B
	- Explanation: `||` treats 0 as falsy.

9. Best way to check NaN safely?
	- A) value === NaN
	- B) isNaN(value)
	- C) Number.isNaN(value)
	- D) value == NaN
	- Answer: C
	- Explanation: `Number.isNaN` avoids coercion pitfalls.

10. `parseInt("12.9", 10)` returns:
	 - A) 12.9
	 - B) 13
	 - C) 12
	 - D) NaN
	 - Answer: C
	 - Explanation: `parseInt` extracts integer part.
