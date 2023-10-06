/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
// Example quote objects
const quotes = [
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      source: "Albert Schweitzer",
      citation: "1952",
      year: 2021,
    },
    {
      quote: "The only way to do great work is to love what you do.",
      source: "Steve Jobs",
      citation: "Stanford University Commencement Address",
      year: 2005,
    },
    {
      quote: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks",
      source: "Mark Zuckerberg",
      citation: "Facebook IPO Letter",
      year: 2012,
    },
    {
      quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
      source: "Steve Jobs",
      citation: "Stanford University Commencement Address",
      year: 2005,
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      source: "Chinese Proverb",
      citation: "unknow",
      year: 2000}
  ];
  
  


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  


/***
 * `printQuote` function
***/
function printQuote() {
    const randomQuote = getRandomQuote();
    let htmlString = '<p class="quote">' + randomQuote.quote + '</p>';
    htmlString += '<p class="source">' + randomQuote.source;
  
    if (randomQuote.citation) {
      htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
    }
  
    if (randomQuote.year) {
      htmlString += '<span class="year">' + randomQuote.year + '</span>';
    }
  
    htmlString += '</p>';
  
    document.getElementById('quote-box').innerHTML = htmlString;
  }
  


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

//document.getElementById('load-quote').addEventListener...
const loadQuoteButton = document.getElementById('load-quote');
loadQuoteButton.addEventListener('click', printQuote);