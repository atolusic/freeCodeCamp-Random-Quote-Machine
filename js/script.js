var getQuoteButton = document.querySelector("#getQuotes");
var quoteText = document.querySelector("#wiseQuote");
var authorID = document.querySelector("#authorID");
// var body = document.querySelector("body");


window.onload = function() {
  getQuoteFun();
  getQuoteButton.addEventListener("click", getQuoteFun);
}


function getQuoteFun() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://random-quote-generator.herokuapp.com/api/quotes/random', true);
  request.onload = function() {
    var data = JSON.parse(request.responseText);
      $('.text').animate({
        opacity: 0
      }, 500, function() {
        quoteText.innerHTML = data.quote;
        $(this).animate({
          opacity: 1,
        }, 500);
      });
      $('.authorClass').animate({
        opacity: 0
      }, 500, function() {
        authorID.innerHTML = data.author;
        $(this).animate({
          opacity: 1
        }, 500);
      });
    }
    request.send();
}
