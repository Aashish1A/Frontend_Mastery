"use strict";

// Objects and Arrays - In-Depth Revision Examples
// Run this file with: node Objects_Arrays.js

// 1) Object creation and access
const student = {
	id: 101,
	name: "Aashish",
	age: 21,
	skills: ["HTML", "CSS", "JavaScript"],
	address: {
		city: "Delhi",
		state: "Delhi",
	},
};

console.log("1) Object access:", student.name, student["age"], student.address.city);

// 2) Add, update, delete properties
student.isActive = true;
student.age = 22;
delete student.address.state;
console.log("2) Mutated object:", student);

// 3) Object methods and this keyword
const profile = {
	firstName: "Aashish",
	lastName: "Kumar",
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};
console.log("3) Object method:", profile.fullName());

// 4) Object keys, values, entries
console.log("4) Object.keys:", Object.keys(student));
console.log("   Object.values:", Object.values(student));
console.log("   Object.entries:", Object.entries(student));

// 5) Optional chaining and nullish coalescing
console.log("5) Optional chaining:", student?.address?.pinCode);
console.log("   Nullish fallback:", student?.address?.pinCode ?? "Pin not provided");

// 6) Shallow copy
const studentCopy = { ...student };
studentCopy.name = "Copied Student";
console.log("6) Shallow copy names:", student.name, studentCopy.name);

// 7) Array basics
const numbers = [10, 20, 30, 40, 50];
console.log("7) Array basics:", numbers[0], numbers.length);

// 8) push, pop, shift, unshift
const queue = ["B", "C"];
queue.unshift("A");
queue.push("D");
const removedLast = queue.pop();
const removedFirst = queue.shift();
console.log("8) Queue operations:", queue, removedLast, removedFirst);

// 9) slice vs splice
const values = [1, 2, 3, 4, 5];
const sliced = values.slice(1, 4);
const splicedOut = values.splice(2, 1, 99);
console.log("9) slice result:", sliced);
console.log("   splice removed:", splicedOut, "updated array:", values);

// 10) map, filter, reduce
const prices = [100, 250, 400, 150];
const withTax = prices.map((price) => price * 1.18);
const expensive = prices.filter((price) => price >= 200);
const total = prices.reduce((sum, p) => sum + p, 0);
console.log("10) map/filter/reduce:", withTax, expensive, total);

// 11) find, findIndex, some, every, includes
const users = [
	{ id: 1, name: "Riya", active: true },
	{ id: 2, name: "Rahul", active: false },
	{ id: 3, name: "Anu", active: true },
];

console.log("11) find:", users.find((u) => u.id === 2));
console.log("    findIndex:", users.findIndex((u) => u.name === "Anu"));
console.log("    some active:", users.some((u) => u.active));
console.log("    every active:", users.every((u) => u.active));
console.log("    includes check:", ["js", "css", "html"].includes("css"));

// 12) sort and reverse
const randomNums = [44, 2, 19, 101, 6];
const sortedAsc = [...randomNums].sort((m, n) => m - n);
const sortedDesc = [...randomNums].sort((m, n) => n - m);
console.log("12) sort:", sortedAsc, sortedDesc);

// 13) Destructuring arrays and objects
const [first, second, ...rest] = numbers;
const { name: studentName, age: studentAge } = student;
console.log("13) Destructuring:", first, second, rest, studentName, studentAge);

// 14) Spread and rest patterns
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];
const merged = [...arrOne, ...arrTwo];

function logTopTwo(label, ...items) {
	console.log(`14) ${label}:`, items[0], items[1]);
}
console.log("   merged:", merged);
logTopTwo("Top two", ...merged);

// 15) Nested object/array traversal
const catalog = {
	category: "Electronics",
	products: [
		{ id: 1, title: "Laptop", price: 55000 },
		{ id: 2, title: "Mouse", price: 800 },
	],
};

for (const product of catalog.products) {
	console.log(`15) Product: ${product.title} - INR ${product.price}`);
}

// 16) Grouping data with reduce
const orders = [
	{ id: 1, status: "pending" },
	{ id: 2, status: "done" },
	{ id: 3, status: "pending" },
	{ id: 4, status: "cancelled" },
];

const groupedByStatus = orders.reduce((acc, order) => {
	if (!acc[order.status]) acc[order.status] = [];
	acc[order.status].push(order);
	return acc;
}, {});
console.log("16) Grouped orders:", groupedByStatus);

// 17) Immutable updates (important for state management)
const originalTodos = [
	{ id: 1, text: "Learn JS", done: false },
	{ id: 2, text: "Build project", done: false },
];

const updatedTodos = originalTodos.map((todo) =>
	todo.id === 2 ? { ...todo, done: true } : todo
);

console.log("17) Original todos:", originalTodos);
console.log("    Updated todos:", updatedTodos);
