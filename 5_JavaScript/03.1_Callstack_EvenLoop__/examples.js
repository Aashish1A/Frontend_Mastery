/*
====================================================
JavaScript Runtime Concepts
Execution Context | Call Stack | Event Loop
Microtask vs Macrotask
====================================================
*/


// ==========================================
// 1️⃣ Execution Order (Call Stack)
// ==========================================

function first(){
    console.log("First function");
}

function second(){
    console.log("Second function");
}

function third(){
    console.log("Third function");
}

first();
second();
third();


// ==========================================
// 2️⃣ Call Stack Example
// ==========================================

function one(){
    two();
}

function two(){
    three();
}

function three(){
    console.log("Call stack example");
}

one();


// ==========================================
// 3️⃣ setTimeout Example (Macrotask)
// ==========================================

console.log("Start");

setTimeout(function(){
    console.log("Inside setTimeout");
},0);

console.log("End");


// expected output
// Start
// End
// Inside setTimeout



// ==========================================
// 4️⃣ Promise Example (Microtask)
// ==========================================

console.log("Start");

Promise.resolve().then(function(){
    console.log("Promise resolved");
});

console.log("End");


// expected output
// Start
// End
// Promise resolved



// ==========================================
// 5️⃣ Microtask vs Macrotask
// ==========================================

console.log("Start");

setTimeout(()=>{
    console.log("setTimeout");
},0);

Promise.resolve().then(()=>{
    console.log("Promise");
});

console.log("End");


// expected output
// Start
// End
// Promise
// setTimeout



// ==========================================
// 6️⃣ Multiple Promises
// ==========================================

Promise.resolve().then(()=>{
    console.log("Microtask 1");
});

Promise.resolve().then(()=>{
    console.log("Microtask 2");
});

setTimeout(()=>{
    console.log("Macrotask");
},0);


// output
// Microtask 1
// Microtask 2
// Macrotask



// ==========================================
// 7️⃣ Async Await Example
// ==========================================

async function test(){

    console.log("Start");

    await Promise.resolve();

    console.log("After await");
}

test();

console.log("Outside");


// output
// Start
// Outside
// After await



// ==========================================
// 8️⃣ Complex Event Loop Example
// ==========================================

console.log("Start");

setTimeout(()=>{
    console.log("Timeout 1");
},0);

Promise.resolve().then(()=>{
    console.log("Promise 1");
});

setTimeout(()=>{
    console.log("Timeout 2");
},0);

Promise.resolve().then(()=>{
    console.log("Promise 2");
});

console.log("End");


// output
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2