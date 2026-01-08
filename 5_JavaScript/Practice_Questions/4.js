// 🟩 Problem Title: Product Prototype & Total Value Calculation
// Create a Product constructor function with name, price, and quantity
function Product(name, price, quantity) {
    this.name = name;           // Assign product name
    this.price = price;         // Assign product price
    this.quantity = quantity;   // Assign product quantity
}

// Add a method to the Product prototype to calculate total value
Product.prototype.calculateValue = function () {
    return this.price * this.quantity; // Total = price * quantity
};

const product1 = new Product("Shampoo", 10, 5);
console.log(product1);
const totalValue = product1.calculateValue();
console.log(`Total Value of ${product1.name} is : $${totalValue}`);


// 🟩 Problem Title: Multiple API Calls with Callbacks
// Makes a GET request and handles data via callback
function makeAPICall(url, callback) {
    fetch(url)
        .then(response => response.json())  // Convert response to JSON
        .then(data => callback(data))       // Pass data to callback
        .catch(err => console.error("Error during API call:", err.message));
}

// Callback function to handle data
function handleData(data) {
    console.log("Processed Data", data);
}

function main() {
    const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
    const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
    makeAPICall(url1, handleData);
    makeAPICall(url2, handleData);
}
// main(); // Uncomment to run


// 🟩 Problem Title: Load Images with Promises
// Load an image and return a promise
function loadImage(src) {
    return new Promise((resolve, reject) => {
        let img = new Image(200, 200); // Create image with width and height
        img.onload = () => resolve(img); // Resolve promise if loaded
        img.onerror = () => reject(new Error("Failed to load image " + src));
        img.src = src; // Set image source
    });
}

let imageContainer = document.getElementById("imageContainer");
let imageUrls = ["./assets/1.jpg", "./assets/2.jpg", "./assets/3.png", "./assets/4.png"];

Promise.all(imageUrls.map(loadImage)) // Load all images
    .then(images => {
        images.forEach(img => imageContainer.appendChild(img)); // Append each image to container
    })
    .catch(error => console.log(error));


// 🟩 Problem Title: Async/Await API Call with Error Handling
async function handleAPI() {
    const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
        let response = await fetch(url1); // Wait for API response
        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }
        let data = await response.json(); // Parse JSON
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
handleAPI();


// 🟩 Problem Title: Dynamic Image Gallery
function gallery(src) {
    let img = document.createElement("img"); // Create img element
    img.src = src; // Set src attribute
    return img;
}

let galleries = document.getElementById("gallery");
let imageUrl = ["./assets/1.jpg", "./assets/2.jpg", "./assets/3.png", "./assets/4.png"];
imageUrl.forEach(url => galleries.appendChild(gallery(url))); // Append all images


// 🟩 Problem Title: Event Bubbling and Capturing
let parent = document.querySelector("#div");
let child = document.querySelector("strong");

parent.addEventListener("click", () => console.log("Parent")); // Logs on parent click
child.addEventListener("click", () => console.log("Child"));   // Logs on child click


// 🟩 Problem Title: Countdown Timer for 1 Minute
const timer = document.getElementById("timer");
let countdown = 60;

function updateTimer() {
    const minutes = Math.floor(countdown / 60); // Get minutes part
    const seconds = countdown % 60;             // Get seconds part
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timer.textContent = formattedTime;          // Update UI text
}

function countDown() {
    if (countdown > 0) {
        countdown--;
        updateTimer();
    } else {
        clearInterval(timerInterval); // Stop timer
        alert("Countdown Completed");
    }
}
// const timerInterval = setInterval(countDown, 1000);
// countDown();


// 🟩 Problem Title: Quote Changing Feature
const motivationalQuotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Aashish Kumar",
];

function displayQuotes() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const randomQuote = Math.floor(Math.random() * motivationalQuotes.length); // Pick random index
    quoteDisplay.textContent = motivationalQuotes[randomQuote]; // Display quote
}

function changeQuotesPeriodically() {
    displayQuotes();
    setTimeout(changeQuotesPeriodically, 1000); // Change every second
}
// changeQuotesPeriodically();