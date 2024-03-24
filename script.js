const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
copyBtn = document.querySelector(".copy");
// shareBtn = document.querySelector(".share");

// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        // console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    })
}

copyBtn.addEventListener("click", () => {
    // copying the quote text 
    let copiedText = `"${quoteText.innerText}" by ${authorName.innerText}`
    navigator.clipboard.writeText(copiedText);
})

// shareBtn.addEventListener("click", () => {

// })

quoteBtn.addEventListener("click", randomQuote);