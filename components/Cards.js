// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const url = 'https://lambda-times-backend.herokuapp.com/articles'
axios.get(url)
    .then(articlesDataGet => {
        //articles data
        const articles = articlesDataGet.data.articles
        
        //root append for cards
        const cardsContainer = document.querySelector('div.cards-container')
        
        //build cards
        for (const articlesTopic in articles) {
            articles[articlesTopic].forEach(article => {
               cardsContainer.appendChild( Article(article))
            })
        }
        
    })
    .catch(err => {
        console.log(`Found error ${err}`)
    })

function Article(articleDataObj) {
    //init elements
    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = articleDataObj.headline

    const author = document.createElement('div')
    author.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const authorImg = document.createElement('img')
    authorImg.src = articleDataObj.authorPhoto

    const byAuthor = document.createElement('span')
    byAuthor.textContent = articleDataObj.authorName

    //appending childs to parent
    card.appendChild(headline)
    card.appendChild(author)

    author.appendChild(imgContainer)
    imgContainer.appendChild(authorImg)

    author.appendChild(byAuthor)

    //return parent element
    return card
}