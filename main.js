var generateNewQuote = document.querySelector(".new-quote");

var myHeaders = new Headers();

var options = {
    cache: "no-cache",
    headers: myHeaders,
    mode: 'cors'
}

generateNewQuote.addEventListener("click", () => {

    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', options)
        .then(function(response) {
        return response.json();
        })
        .then(function(response) {

        var divQuote = document.createElement("div");
        divQuote.className = "block-quote";
        divQuote.innerHTML = `
            <blockquote>${response[0].content}</blockquote>
            <cite>${response[0].title}</cite>
            <a id="tweetButton" href="https://twitter.com/intent/tweet?text=${response[0].content}${response[0].title}" 
            target="_blank"><i class="fa fa-twitter"></i></a>
        `;

        document.body.insertBefore(divQuote, document.querySelectorAll(".block-quote")[0]);
        onlyThreeQuotes();
        });
});

function onlyThreeQuotes(){
    var blockQuotes = document.querySelectorAll(".block-quote");
    if(blockQuotes.length >= 4){
        blockQuotes[3].remove();
    }
}