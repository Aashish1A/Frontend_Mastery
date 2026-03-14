"use strict";

// Functions and Scope - In-Depth Revision Examples
// Run this file with: node Functions_Scope.js

// 1) Function declaration (hoisted)
function add(a, b) {
	return a + b;
}

// 2) Function expression
const multiply = function (a, b) {
	return a * b;
};

// 3) Arrow function
const subtract = (a, b) => a - b;

console.log("1-3) Basic function types:", add(2, 3), multiply(2, 3), subtract(7, 2));

// 4) Default parameters
function greet(name = "Guest") {
	return `Hello, ${name}`;
}
console.log("4) Default params:", greet(), greet("Aashish"));

// 5) Rest parameters
function sumAll(...nums) {
	return nums.reduce((sum, item) => sum + item, 0);
}
console.log("5) Rest params:", sumAll(1, 2, 3, 4, 5));

// 6) Callback functions
function processValue(value, callback) {
	return callback(value);
}
const squared = processValue(6, (n) => n * n);
console.log("6) Callback result:", squared);

// 7) Higher-order function returning function
function makeMultiplier(factor) {
	return function (number) {
		return number * factor;
	};
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log("7) Higher-order:", double(10), triple(10));

// 8) Lexical scope and closure
function outer() {
	const outerVar = "I am from outer scope";

	return function inner() {
		return `8) Closure says: ${outerVar}`;
	};
}
const closureFn = outer();
console.log(closureFn());

// 9) Private state with closure
function createCounter(start = 0) {
	let count = start;
	return {
		increment() {
			count += 1;
			return count;
		},
		decrement() {
			count -= 1;
			return count;
		},
		value() {
			return count;
		},
	};
}

const counter = createCounter(5);
console.log("9) Counter:", counter.increment(), counter.increment(), counter.decrement(), counter.value());

// 10) Scope types: global, function, block
const globalScopeVar = "GLOBAL";
function scopeTest() {
	const functionScopeVar = "FUNCTION";
	if (true) {
		const blockScopeVar = "BLOCK";
		console.log("10) Scope inside block:", globalScopeVar, functionScopeVar, blockScopeVar);
	}
}
scopeTest();

// 11) IIFE (Immediately Invoked Function Expression)
(function () {
	const message = "11) IIFE executed immediately";
	console.log(message);
})();

// 12) Recursion example: factorial
function factorial(n) {
	if (n < 0) return "Invalid input";
	if (n === 0 || n === 1) return 1;
	return n * factorial(n - 1);
}
console.log("12) Factorial:", factorial(5));

// 13) this behavior in normal vs arrow functions
const user = {
	name: "Aashish",
	normalMethod: function () {
		return this.name;
	},
	arrowMethod: () => {
		// Arrow function does not bind its own this.
		return "Arrow this is lexical, not object-bound";
	},
};
console.log("13) this behavior:", user.normalMethod(), user.arrowMethod());

// 14) call, apply, bind
function introduce(city, country) {
	return `14) ${this.name} from ${city}, ${country}`;
}

const person = { name: "Riya" };
console.log(introduce.call(person, "Delhi", "India"));
console.log(introduce.apply(person, ["Mumbai", "India"]));
const boundIntro = introduce.bind(person, "Pune", "India");
console.log(boundIntro());

// 15) Function purity example
function pureAdd(x, y) {
	return x + y;
}

let impureCount = 0;
function impureAdd(x) {
	impureCount++;
	return x + impureCount;
}

console.log("15) Pure function:", pureAdd(10, 20), pureAdd(10, 20));
console.log("    Impure function:", impureAdd(10), impureAdd(10));

// 16) Debounce utility (important practical interview concept)
function debounce(fn, delay) {
	let timerId;
	return function (...args) {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}

const debouncedLog = debounce((text) => {
	console.log("16) Debounced output:", text);
}, 200);

debouncedLog("first");
debouncedLog("second");
debouncedLog("final");
