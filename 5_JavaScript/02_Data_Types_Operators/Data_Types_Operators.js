"use strict";

// Data Types and Operators - In-Depth Revision Examples
// Run this file with: node Data_Types_Operators.js

// 1) Primitive and reference types
const s = "hello";
const n = 99;
const b = true;
const nl = null;
let u;
const sym = Symbol("id");
const big = 123456789012345678901234567890n;

const obj = { name: "Aashish" };
const arr = [1, 2, 3];
const fn = function () {
	return "I am function type";
};

console.log("1) Primitive types:", typeof s, typeof n, typeof b, typeof nl, typeof u, typeof sym, typeof big);
console.log("   Reference types:", typeof obj, typeof arr, typeof fn);

// 2) typeof, instanceof, Array.isArray
console.log("2) typeof arr:", typeof arr);
console.log("   arr instanceof Array:", arr instanceof Array);
console.log("   Array.isArray(arr):", Array.isArray(arr));

// 3) Assignment and copy behavior
let x = 10;
let y = x;
y = 20;
console.log("3) Primitive copy by value:", x, y);

const ref1 = { score: 50 };
const ref2 = ref1;
ref2.score = 80;
console.log("   Reference copy by address:", ref1.score, ref2.score);

// 4) Arithmetic operators
const a = 12;
const c = 5;
console.log("4) Arithmetic + - * / % **:", a + c, a - c, a * c, a / c, a % c, a ** c);

// 5) Increment/decrement
let counter = 1;
console.log("5) post-increment:", counter++, "now", counter);
console.log("   pre-increment:", ++counter);

// 6) Assignment operators
let value = 10;
value += 5;
value -= 2;
value *= 3;
value /= 2;
console.log("6) Assignment chain result:", value);

// 7) Comparison operators and equality
console.log("7) == vs ===:", 5 == "5", 5 === "5");
console.log("   != vs !==:", 5 != "5", 5 !== "5");
console.log("   relational:", 8 > 6, 8 >= 8, 8 < 10, 8 <= 7);

// 8) Logical operators short-circuit
const isLoggedIn = true;
const hasSubscription = false;
console.log("8) AND:", isLoggedIn && hasSubscription);
console.log("   OR:", isLoggedIn || hasSubscription);
console.log("   NOT:", !isLoggedIn);

// 9) Nullish coalescing and OR comparison
const price = 0;
console.log("9) price || 999:", price || 999);
console.log("   price ?? 999:", price ?? 999);

// 10) Optional chaining
const account = {
	profile: {
		email: "student@example.com",
	},
};
console.log("10) Optional chaining existing:", account?.profile?.email);
console.log("    Optional chaining missing:", account?.profile?.phone);

// 11) Bitwise operators
console.log("11) Bitwise:");
console.log("   5 & 1 =", 5 & 1);
console.log("   5 | 1 =", 5 | 1);
console.log("   5 ^ 1 =", 5 ^ 1);
console.log("   ~5 =", ~5);
console.log("   5 << 1 =", 5 << 1);
console.log("   5 >> 1 =", 5 >> 1);

// 12) Ternary operator
const temp = 28;
const weather = temp > 30 ? "Hot" : "Pleasant";
console.log("12) Ternary result:", weather);

// 13) String-to-number conversion differences
console.log("13) Number('12.5'):", Number("12.5"));
console.log("    parseInt('12.5'):", parseInt("12.5", 10));
console.log("    parseFloat('12.5'):", parseFloat("12.5"));

// 14) Truthy/falsy in conditionals
function checkTruthy(valueToTest) {
	return valueToTest ? "Truthy" : "Falsy";
}

console.log("14) Truthy/falsy:", checkTruthy([]), checkTruthy(""), checkTruthy(0), checkTruthy("0"));

// 15) Common coercion corner cases
console.log("15) [] + []:", [] + []);
console.log("    [] + {}:", [] + {});
console.log("    {} + []:", {} + []);
console.log("    true + true:", true + true);
console.log("    '5' - '2':", "5" - "2");

// 16) Safe equality helper (interview utility)
function safeEquals(left, right) {
	return left === right;
}

console.log("16) safeEquals:", safeEquals(10, 10), safeEquals(10, "10"));
