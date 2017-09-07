var getQuoteButton = document.querySelector("#getQuotes");
var quoteText = document.querySelector("#wiseQuote");
var authorID = document.querySelector("#authorID");
var twitter = document.querySelector("#tweet");
var currentQuote = '';
var currentAuthor = '';

window.onload = function() {
  getQuoteFun();
  getQuoteButton.addEventListener("click", getQuoteFun);
  twitter.addEventListener("click", function() {
    twitter.setAttribute("href", "https://twitter.com/intent/tweet?text=" + currentQuote + currentAuthor);
    twitter.setAttribute("target", "_blank");
  });
}


function getQuoteFun() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://random-quote-generator.herokuapp.com/api/quotes/random', true);
  request.onload = function() {
    var data = JSON.parse(request.responseText);
      $('.text').animate({
        opacity: 0
      }, 500, function() {
        currentQuote = data.quote;
        quoteText.innerHTML = data.quote;
        $(this).animate({
          opacity: 1,
        }, 500);
      });
      $('.authorClass').animate({
        opacity: 0
      }, 500, function() {
        currentAuthor = ' - ' + data.author;
        authorID.innerHTML = data.author;
        $(this).animate({
          opacity: 1
        }, 500);
      });
    }
    request.send();
}
