// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
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
axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
      const cardInfo = res.data.articles
      Object.keys(cardInfo).forEach(item => {
        const topicArticles = cardInfo[item]
        topicArticles.forEach(article => {
          cardMaker(article)
        })
      })
    })
    .catch(err => {
      console.log(err)
    })

function cardMaker(data) {
  const card = document.createElement('div')
  card.classList.add('card')
  
  const headline = document.createElement('div')
  headline.classList.add('headline')
  
  const author = document.createElement('div')
  author.classList.add('author')
  
  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  
  const img = document.createElement('img')

  const cardContainer = document.querySelector('.cards-container')
  cardContainer.append(card)
  
  img.src = data.authorPhoto
  headline.textContent = data.headline
  author.textContent = data.authorName

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(img)

  return card;
  
}

// const cardContainer = document.querySelector('.cards-container')
//       const cardInfo = res.data.articles
//       cardContainer.append(cardMaker(cardInfo))