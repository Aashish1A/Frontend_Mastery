const quotes = document.querySelector("#quote");
const author = document.querySelector("#author");

const api_Url = "";

async function getQuote() {
  const response = await fetch(api_Url);
  const data = await response.json();

  quotes.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote();


function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quotes.innerHTML, +"----- by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}
