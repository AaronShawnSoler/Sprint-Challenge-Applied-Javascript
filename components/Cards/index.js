// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(function(res) {
    const articles = res.data.articles;
    const articleTopics = Object.keys(articles);

    articleTopics.forEach(topic => {
        articles[topic].forEach(article => {
            const articlePost = CreateCard(article);
            document.querySelector('.cards-container').append(articlePost);
        })
    });

})


function CreateCard(property) {
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          img = document.createElement('img'),
          name = document.createElement('span')

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    img.src = property.authorPhoto;

    headline.textContent = property.headline;
    name.textContent = property.authorName;

    card.append(headline, author);
    author.append(imgContainer, name);
    imgContainer.append(img);

    return card;
}