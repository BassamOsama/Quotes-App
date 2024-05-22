var quotes = [
  {
    quote: "“Be yourself, everyone else is already taken.”",
    author: "--Oscar Wilde",
  },
  {
    quote: "“So many books, so little time.”",
    author: "--Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "--Marcus Tullius Cicero",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "--Mahatma Gandhi",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "--Mark Twain",
  },
];
// function newQuote() {
//   var randomNumber = Math.floor(Math.random() * quotes.length);
//   document.getElementById("quote").innerHTML = quotes[randomNumber].quote;
//   document.getElementById("quote-author").innerHTML =
//     quotes[randomNumber].author;
// }
var lastIndex = -1;
function newQuote() {
  var randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * quotes.length);
  } while (randomNumber === lastIndex);
  lastIndex = randomNumber;
  document.getElementById("quote").innerHTML = quotes[randomNumber].quote;
  document.getElementById("quote-author").innerHTML =
    quotes[randomNumber].author;
}