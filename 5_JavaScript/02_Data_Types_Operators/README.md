# JavaScript Data Types & Operators – Interview Revision

This section covers the **most important JavaScript Data Types and Operators questions** asked in interviews.

These concepts are the **foundation of JavaScript** and are asked very frequently in frontend interviews.

---

# 1. What are Data Types in JavaScript?

Data types define **what type of value a variable stores**.

Example:

```javascript
let name = "Aashish";   // string
let age = 21;           // number
let isStudent = true;   // boolean
```

JavaScript automatically determines the type of value stored in a variable.

---

# 2. How many Data Types exist in JavaScript?

JavaScript has **two main categories of data types**.

## Primitive Data Types

Primitive values store **actual data**.

Types include:

* String
* Number
* Boolean
* Undefined
* Null
* Symbol
* BigInt

Example:

```javascript
let language = "JavaScript";
let version = 2024;
let isPopular = true;
```

---

## Non-Primitive (Reference) Data Types

These store **references to memory locations**.

Types include:

* Object
* Array
* Function

Example:

```javascript
let user = {name: "Aashish"};
let numbers = [1,2,3];
```

---

# 3. What is the typeof Operator?

`typeof` is used to **check the data type of a variable**.

Example:

```javascript
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
```

Output:

```
string
number
boolean
```

---

# 4. Why does typeof null return "object"?

Example:

```javascript
console.log(typeof null);
```

Output:

```
object
```

This happens because of a **bug in early JavaScript**.

Even though `null` is a primitive type, `typeof null` returns `"object"`.

---

# 5. What is the difference between null and undefined?

### undefined

A variable that is declared but **not assigned a value**.

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

`null` represents **an intentional empty value**.

Example:

```javascript
let user = null;
```

This means the variable **intentionally contains no value**.

---

# 6. What is NaN in JavaScript?

`NaN` means **Not a Number**.

It appears when an invalid mathematical operation happens.

Example:

```javascript
console.log("Hello" * 2);
```

Output:

```
NaN
```

Important interview fact:

```javascript
typeof NaN
```

Output:

```
number
```

---

# 7. What are Operators in JavaScript?

Operators are used to **perform operations on values or variables**.

Example:

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

Here `+` is an operator.

---

# 8. What are the Types of Operators in JavaScript?

Common operator types include:

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Unary Operators
* Ternary Operator
* Type Operators

---

# 9. What are Arithmetic Operators?

These operators perform **mathematical calculations**.

Example:

```javascript
let a = 10;
let b = 5;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus
```

---

# 10. What are Assignment Operators?


Assignment operators **assign values to variables**.

Example:

```javascript
let x = 10;

x += 5;
x -= 3;
x *= 2;
```

Example explanation:

```
x += 5   means   x = x + 5
```

---

# 11. What are Comparison Operators?


Comparison operators **compare two values** and return a boolean.

Example:

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");
```

---

# 12. What is the difference between == and === ?


### Double Equals (==)

`==` compares values **after type conversion**.

Example:

```javascript
10 == "10"
```

Output:

```
true
```

---

### Triple Equals (===)

`===` compares **value and type without conversion**.

Example:

```javascript
10 === "10"
```

Output:

```
false
```

In interviews, developers prefer using **=== for safer comparisons**.

---

# 13. What are Logical Operators?


Logical operators are used to **combine multiple conditions**.

Operators:

* AND (`&&`)
* OR (`||`)
* NOT (`!`)

Example:

```javascript
let age = 20;

console.log(age > 18 && age < 30);
```

---

# 14. What is the Ternary Operator?


The ternary operator is a **short way to write an if-else condition**.

Syntax:

```javascript
condition ? value1 : value2
```

Example:

```javascript
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

---

# 15. What are Unary Operators?


Unary operators operate on **one operand only**.

Examples:

* `++` Increment
* `--` Decrement
* `typeof`
* `!`

Example:

```javascript
let x = 5;

x++;
console.log(x);
```

---


# 16. What is Type Coercion in JavaScript?


Type coercion is the automatic conversion of one data type into another by JavaScript.

Example:

"5" + 2

Output:

"52"

Because number 2 is converted into string.

# 17. What is the difference between implicit and explicit conversion?


Implicit conversion → done automatically by JavaScript.

Example

"5" + 2

Explicit conversion → done manually by developer.

Example

Number("5")


# 18. What are Truthy and Falsy values?


Falsy values are values that convert to false in boolean context.

Falsy values in JavaScript:

false
0
""
null
undefined
NaN

Everything else is truthy.

# 19. What is Short Circuit Evaluation?


Logical operators return values instead of true/false.

Example:

"" || "Default"

Output:

Default


# 20. What is the difference between isNaN() and Number.isNaN()?


isNaN() converts value first.

isNaN("Hello") → true

Number.isNaN() checks strictly.

Number.isNaN("Hello") → false
# ⭐ Most Important JS Interview Traps

These are very famous interview questions.

`typeof null` 
> `object`


`typeof NaN` 
> `number`


`NaN === NaN` 
> `false`


`"5" + 2` 
> `"52"`


`"5" - 2` 
> `3`


`[] == false` 
> `true`


# Important Quick Revision Points

* JavaScript has **7 primitive data types**
* Arrays are **objects internally**
* `typeof null` → `"object"`
* `typeof NaN` → `"number"`
* `==` allows **type coercion**
* `===` compares **value and type**

---

# Most Asked MCQ Questions

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

What will be the output?

```javascript
console.log(10 == "10")
```

**Options:**

- **A.** true
- **B.** false
- **C.** error
- **D.** undefined

**Answer:** `true`

---

### MCQ 3

What will be the output?

```javascript
console.log(10 === "10")
```

**Options:**

- **A.** true
- **B.** false
- **C.** undefined
- **D.** error

**Answer:** `false`

---

### MCQ 4

Which operator is used for logical AND?

- **A.** ||
- **B.** &&
- **C.** !
- **D.** ==

**Answer:** `&&`

---

### MCQ 5

Which operator is used for modulus?

- **A.** /
- **B.** %
- **C.** *
- **D.** +

**Answer:** `%`

---