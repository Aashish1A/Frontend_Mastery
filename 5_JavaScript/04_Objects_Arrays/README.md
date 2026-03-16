# JavaScript Objects & Arrays – Most Asked Interview Questions

Objects and Arrays are the **most used data structures in JavaScript**.
APIs, JSON data, React state, and many other things use them.

Understanding them properly is very important for frontend interviews.

---

# 1. What is an Object in JavaScript?

An object is a **collection of key-value pairs**.

Example:

```javascript
const user = {
  name: "Aashish",
  age: 21
};
```

Here:

* `name` → key
* `"Aashish"` → value

Objects are used to represent **real world entities**.

Example:

User, Product, Order, etc.

---

# 2. How can we access object properties?

There are **two ways**.

### Dot Notation

```javascript
user.name
```

### Bracket Notation

```javascript
user["name"]
```

Bracket notation is useful when the key is dynamic.

Example:

```javascript
const key = "name";
user[key];
```

---

# 3. How can we add or update object properties?

To add a property:

```javascript
user.city = "Delhi";
```

To update a property:

```javascript
user.age = 22;
```

JavaScript objects are **mutable**, meaning they can be modified.

---

# 4. How can we delete an object property?

We use the `delete` keyword.

Example:

```javascript
delete user.age;
```

This removes the property from the object.

---

# 5. What are Object.keys(), Object.values(), and Object.entries()?

These methods are used to **extract data from objects**.

Example:

```javascript
const obj = {a:1,b:2};
```

### Object.keys()

Returns all keys.

```javascript
Object.keys(obj);
```

Output:

```
["a","b"]
```

---

### Object.values()

Returns all values.

```javascript
Object.values(obj);
```

Output:

```
[1,2]
```

---

### Object.entries()

Returns key-value pairs.

```javascript
Object.entries(obj);
```

Output:

```
[["a",1],["b",2]]
```

---

# 6. What is Destructuring in JavaScript?

Destructuring allows extracting values from objects or arrays easily.

Example:

```javascript
const user = {name:"Aashish", age:21};

const {name, age} = user;
```

Now `name` and `age` become variables.

---

# 7. What is the Spread Operator?

The spread operator (`...`) is used to **copy or merge objects and arrays**.

Example:

```javascript
const obj1 = {a:1};
const obj2 = {b:2};

const merged = {...obj1, ...obj2};
```

Output:

```
{a:1, b:2}
```

---

# 8. What is the difference between map() and forEach()?

### forEach()

* Used for iterating over an array
* Does not return a new array

Example:

```javascript
arr.forEach(n => console.log(n));
```

---

### map()

* Returns a **new transformed array**

Example:

```javascript
const result = arr.map(n => n * 2);
```

---

# 9. What is the difference between filter() and find()?

### filter()

Returns **all elements** that match the condition.

Example:

```javascript
nums.filter(n => n > 5);
```

---

### find()

Returns **only the first matching element**.

Example:

```javascript
nums.find(n => n > 5);
```

---

# 10. What is reduce()?

`reduce()` is used to **combine array elements into a single value**.

Example:

```javascript
const nums = [1,2,3];

const sum = nums.reduce((total,n) => total + n,0);
```

Output:

```
6
```

---

# 11. What is the difference between shallow copy and deep copy?

### Shallow Copy

Copies only the **top level values**.

Example:

```javascript
const obj1 = {a:1};

const obj2 = {...obj1};
```

Nested objects still share the same reference.

---

### Deep Copy

Creates a **completely independent copy**.

Example:

```javascript
const copy = JSON.parse(JSON.stringify(obj));
```

---

# 12. Why does `[] === []` return false?

Example:

```javascript
console.log([] === []);
```

Output:

```
false
```

Reason:

Arrays are **reference types**.

Each array has a **different memory location**.

---

# 13. Why does `{}` === `{}` return false?

Example:

```javascript
console.log({} === {});
```

Output:

```
false
```

Objects are also **reference types**, so they are not equal.

---

# 14. How can we check if a value is an array?

Use:

```javascript
Array.isArray(value);
```

Example:

```javascript
Array.isArray([1,2,3]);
```

Output:

```
true
```

---

# Most Asked MCQ Questions

---

### MCQ 1

What will be the output?

```javascript
console.log(typeof []);
```

**Options:**

- **A.** array
- **B.** object
- **C.** list
- **D.** undefined

**Answer:** `object`

---

### MCQ 2

What will be the output?

```javascript
console.log([] === []);
```

**Options:**

- **A.** true
- **B.** false

**Answer:** `false`

---

### MCQ 3

Which method creates a new array?

- **A.** forEach
- **B.** map
- **C.** push
- **D.** pop

**Answer:** `map`

---

### MCQ 4

Which method returns a single element?

- **A.** filter
- **B.** map
- **C.** reduce
- **D.** find

**Answer:** `find`

---

# Quick Revision Points

* Objects store **key-value pairs**
* Arrays store **ordered values**
* Arrays are technically **objects**
* map → transform array
* filter → select elements
* reduce → combine elements
* Objects and arrays are **reference types**

These questions are **very frequently asked in JavaScript interviews**.