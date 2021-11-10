let author = document.getElementById("author");
let quoteText = document.getElementById("quote");
let newQuoteBtn = document.getElementById("new-quote");
let twitterBtn = document.getElementById("twitter");
let apiQuotes = [];
// Changing Quote
function newQuote(){
	quoteText.textContent = quote.text;
	author.textContent= "- " + quote.author; 
} 
//Fetching Data
async function getQuotes() {
	const apiUrl = "https://type.fit/api/quotes";
	try{
		const apiUrl = "https://type.fit/api/quotes";
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
		newQuote()	
	}
	catch(error){
		// alert error here
	}

}
// On Clicking Buttons
newQuoteBtn.addEventListener('click' , getQuotes);
function tweet() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${author.textContent}`;
	window.open(twitterUrl, '_blank');
}
twitterBtn.addEventListener('click' , tweet);
// On load
getQuotes();