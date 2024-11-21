
function getQuote() {
    // Dectionary Of Quotes
    var quotes = {
        "― Oscar Wilde ": "Be yourself; everyone else is already taken.",
        "― Albert Einstein ": "Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.",
        "― Marcus Tullius Cicero ": "A room without books is like a body without a soul.",
        "― Bernard M. Baruch ": "Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.",
        "― Mae West ": "You only live once, but if you do it right, once is enough.",
        "― Dr. Seuss ": "You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.",
        "― Mahatma Gandhi ": "Be the change that you wish to see in the world.",
        "― Robert Frost ": "In three words I can sum up everything I\'ve learned about life: it goes on.",
        "― Mark Twain ": "If you tell the truth, you don\'t have to remember anything.",
        "― Elbert Hubbard ": "A friend is someone who knows all about you and still loves you.",
        "― Oscar Wilde ": "To live is the rarest thing in the world. Most people exist, that is all.",
        "― Marilyn Monroe ": "Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.",
        "― William Shakespeare ": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        "― Thomas A. Edison ": "I have not failed. I\'ve just found 10,000 ways that won\'t work.",
        "― Eleanor Roosevelt ": "A woman is like a tea bag; you never know how strong it is until it\'s in hot water.",
    };
    
    // Select Random Quote From Dectionary
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    
    // Display Quote
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
};