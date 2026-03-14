"use strict";

// JavaScript Fundamentals - In-Depth Revision Examples
// Run this file with: node Fundamentals.js

// 1) Variables and declarations
var oldStyle = "var is function scoped and re-declarable";
let modernMutable = "let is block scoped and mutable";
const constantValue = "const cannot be reassigned";

console.log("1) Variables:", oldStyle, modernMutable, constantValue);

// 2) Primitive data types
const myString = "JavaScript";
const myNumber = 42;
const myBoolean = true;
const myNull = null;
let myUndefined;
const mySymbol = Symbol("unique");
const myBigInt = 9007199254740993n;

console.log("2) Primitive types:", typeof myString, typeof myNumber, typeof myBoolean);
console.log("   null type quirk:", typeof myNull, "| undefined:", typeof myUndefined);
console.log("   symbol and bigint:", typeof mySymbol, typeof myBigInt);

// 3) Dynamic typing
let dynamicValue = 100;
console.log("3) Dynamic typing (number):", typeof dynamicValue);
dynamicValue = "Now I am a string";
console.log("   Dynamic typing (string):", typeof dynamicValue);

// 4) Template literals
const learner = "Aashish";
const topic = "Fundamentals";
console.log(`4) Template literal: ${learner} is revising ${topic}.`);

// 5) Arithmetic basics
const a = 10;
const b = 3;
console.log("5) Arithmetic:", a + b, a - b, a * b, a / b, a % b, a ** b);

// 6) Comparison operators
console.log("6) Comparison:", 5 == "5", 5 === "5", 10 > 5, 10 <= 8);

// 7) Logical operators
const hasAccount = true;
const has2FA = false;
console.log("7) Logical AND:", hasAccount && has2FA);
console.log("   Logical OR:", hasAccount || has2FA);
console.log("   Logical NOT:", !has2FA);

// 8) Conditionals
const marks = 82;
if (marks >= 90) {
	console.log("8) Grade: A");
} else if (marks >= 75) {
	console.log("8) Grade: B");
} else {
	console.log("8) Grade: C");
}

// 9) Ternary operator
const age = 19;
const canVote = age >= 18 ? "Eligible" : "Not eligible";
console.log("9) Ternary:", canVote);

// 10) switch statement
const day = 3;
switch (day) {
	case 1:
		console.log("10) Monday");
		break;
	case 2:
		console.log("10) Tuesday");
		break;
	case 3:
		console.log("10) Wednesday");
		break;
	default:
		console.log("10) Some other day");
}

// 11) Loops: for, while, do-while
console.log("11) for loop:");
for (let i = 1; i <= 3; i++) {
	console.log("   i =", i);
}

console.log("11) while loop:");
let w = 1;
while (w <= 2) {
	console.log("   w =", w);
	w++;
}

console.log("11) do-while loop:");
let d = 1;
do {
	console.log("   d =", d);
	d++;
} while (d <= 2);

// 12) break and continue
console.log("12) break/continue:");
for (let n = 1; n <= 5; n++) {
	if (n === 2) continue;
	if (n === 5) break;
	console.log("   n =", n);
}

// 13) Type conversion vs coercion
console.log("13) Explicit conversion:", Number("100"), String(500), Boolean(1));
console.log("    Coercion +:", "5" + 1);
console.log("    Coercion -:", "5" - 1);

// 14) Truthy and falsy values
const samples = [false, 0, -0, 0n, "", null, undefined, NaN, "JS", [], {}];
console.log("14) Truthy/Falsy table:");
for (const item of samples) {
	console.log("   ", item, "=>", Boolean(item));
}

// 15) Nullish coalescing and optional chaining
const user = {
	profile: {
		username: "aashish1a",
	},
};

console.log("15) Optional chaining:", user?.profile?.username, user?.profile?.location);
console.log("    Nullish fallback:", user?.profile?.location ?? "Location not set");

// 16) Simple input validation pattern
function validateUsername(name) {
	if (typeof name !== "string") return "Invalid type";
	if (name.trim().length < 3) return "Too short";
	return "Valid username";
}

console.log("16) Validation:", validateUsername("Aa"), validateUsername("Aashish"));

// 17) Common interview edge cases
console.log("17) Edge cases:");
console.log("   NaN === NaN ->", NaN === NaN);
console.log("   Number.isNaN(NaN) ->", Number.isNaN(NaN));
console.log("   0 == false ->", 0 == false);
console.log("   0 === false ->", 0 === false);

// 18) Small fundamentals mini-task
function simpleCalculator(x, y, op) {
	switch (op) {
		case "+":
			return x + y;
		case "-":
			return x - y;
		case "*":
			return x * y;
		case "/":
			return y !== 0 ? x / y : "Cannot divide by zero";
		default:
			return "Unknown operator";
	}
}

console.log("18) Calculator:", simpleCalculator(10, 5, "+"), simpleCalculator(10, 0, "/"));

