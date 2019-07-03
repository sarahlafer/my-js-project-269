// const button = document.querySelector("#click-me");

// button.addEventListener('click', (event) => {
//   event.currentTarget.innerText = "Hold still";
//   event.currentTarget.setAttribute("disabled", "");
// });

const list = document.querySelector("#results");
const form = document.querySelector("#search-movies");
const input = document.querySelector("#keyword");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
      console.log(result);
      const movie = `<li class="list-inline-item">
      <p>${result.Title}</p>
      <img src="${result.Poster}">
      </li>`;
      list.insertAdjacentHTML('afterbegin', movie);
    });
  });
});

const search = document.querySelector("#search");
search.addEventListener("keyup", (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
});
