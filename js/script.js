// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


let quotesArray = [
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: "Dr. Seuss",
        citation: "",
        year:2017 
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde",
        citation: "",
        year:2016 
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        citation: "",
        year:2015 
    },
];

function getRandomQuote(){
    let randomQuote = quotesArray[Math.floor(Math.random()*quotesArray.length)];
    return randomQuote;
}

function printQuote(){
    let print = getRandomQuote();

    let htmlString = "<p class='quote'>" + print.quote + "</p><p class='source'>" + print.source + "<span class='citation'>" + print.citation + "</span><span class='year'>" + print.year + "</span></p>";

    document.getElementById('quote-box').innerHTML = htmlString;


}