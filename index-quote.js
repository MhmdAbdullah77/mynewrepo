const btz2 = document.querySelector('#btz2')
const btz = document.querySelector('#btz');
const api_Url = 'https://dummyjson.com/quotes/random';
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');


async function getQuote(URL){
const response = await fetch(URL)
var data = await response.json();
quote.innerHTML = data.quote
author.innerHTML = data.author
}
getQuote(api_Url);

function tweet(){
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + '----by' + author.innerHTML, 'Tweet Window', 'width=600,height=300')
}

btz.addEventListener('click',function(){
    getQuote(api_Url)
})

btz2.addEventListener('click',function(){
    tweet();
})