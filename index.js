let quotesDiv = document.getElementById('quotes')
// error - document is not defined


fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    quotesDiv.innerHTML += `${data.content} —${data.author}`
  })

 
  let catButton = document.getElementById('give-cat')

  catButton.addEventListener("click", evt => {
    // something not working with the event here?
    let catDiv=document.getElementById('cat-pic')

    fetch('https://api.thecatapi.com/v1/images/search?api_key=d365e5e5-9ef9-4dc2-8b12-4d78434e8730')
    .then(res => res.json())
    .then(cats=> {
      cats.forEach(cat => {
        catDiv.innerHTML = `<h3>Here is your cat. Have a fantastic day!</h3>
        <img src="${cat.url}" alt="kitty" />`
      });
    })
  })