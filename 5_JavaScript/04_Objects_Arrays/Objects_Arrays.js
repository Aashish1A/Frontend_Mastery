/*
====================================================
JavaScript Objects & Arrays - Coding Revision
====================================================

Topics Covered

1. Object Creation
2. Accessing Object Properties
3. Adding & Updating Properties
4. Deleting Properties
5. Object Methods
6. Object.keys / values / entries
7. Destructuring
8. Spread Operator
9. Array Creation
10. Array Methods
11. Array Iteration
12. Array Destructuring
13. Important Interview Edge Cases

====================================================
*/


// ==========================================
// 1️⃣ Object Creation
// ==========================================

const user = {
    name: "Aashish",
    age: 21,
    isStudent: true
};

console.log(user);


// ==========================================
// 2️⃣ Accessing Object Properties
// ==========================================

console.log(user.name);     // dot notation
console.log(user["age"]);   // bracket notation



// ==========================================
// 3️⃣ Adding Properties
// ==========================================

user.city = "Delhi";

console.log(user);



// ==========================================
// 4️⃣ Updating Properties
// ==========================================

user.age = 22;

console.log(user);



// ==========================================
// 5️⃣ Deleting Properties
// ==========================================

delete user.isStudent;

console.log(user);



// ==========================================
// 6️⃣ Object Methods
// ==========================================

const person = {
    name: "Aashish",

    greet(){
        console.log("Hello " + this.name);
    }
};

person.greet();



// ==========================================
// 7️⃣ Object.keys()
// ==========================================

const obj = {
    a:1,
    b:2,
    c:3
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));



// ==========================================
// 8️⃣ Object Destructuring
// ==========================================

const student = {
    name: "Rahul",
    age: 20
};

const {name, age} = student;

console.log(name);
console.log(age);



// ==========================================
// 9️⃣ Spread Operator
// ==========================================

const user1 = {name:"Aashish"};
const user2 = {age:21};

const mergedUser = {...user1, ...user2};

console.log(mergedUser);



// ==========================================
// 🔟 Array Creation
// ==========================================

const numbers = [10,20,30,40];

console.log(numbers);



// ==========================================
// 1️⃣1️⃣ Accessing Array Elements
// ==========================================

console.log(numbers[0]);
console.log(numbers[2]);



// ==========================================
// 1️⃣2️⃣ Array Methods
// ==========================================

const arr = [1,2,3];

arr.push(4);   // add end
arr.pop();     // remove end

arr.unshift(0); // add beginning
arr.shift();    // remove beginning

console.log(arr);



// ==========================================
// 1️⃣3️⃣ Array Iteration
// ==========================================

const nums = [1,2,3,4];

nums.forEach(function(num){
    console.log(num);
});



// ==========================================
// 1️⃣4️⃣ map()
// ==========================================

const doubled = nums.map(function(num){
    return num * 2;
});

console.log(doubled);



// ==========================================
// 1️⃣5️⃣ filter()
// ==========================================

const even = nums.filter(function(num){
    return num % 2 === 0;
});

console.log(even);



// ==========================================
// 1️⃣6️⃣ reduce()
// ==========================================

const sum = nums.reduce(function(total,num){
    return total + num;
},0);

console.log(sum);



// ==========================================
// 1️⃣7️⃣ Array Destructuring
// ==========================================

const colors = ["red","green","blue"];

const [first, second] = colors;

console.log(first);
console.log(second);



// ==========================================
// 1️⃣8️⃣ Important Interview Edge Cases
// ==========================================

// arrays are objects
console.log(typeof []); // object


// object comparison
// console.log({} === {}); // false


// array comparison
// console.log([] === []); // false


// reference behavior

let a = {value:10};
let b = a;

b.value = 20;

console.log(a.value); // 20