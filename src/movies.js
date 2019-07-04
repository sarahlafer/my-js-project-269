const input = document.querySelector("#keyword");
const list = document.querySelector("#results");

const updateResults = (data) => {
  list.innerHTML = "";
  data.Search.forEach((result) => {
    const movie = `<li class="list-inline-item">
    <p>${result.Title}</p>
    <img src="${result.Poster}">
    </li>`;
    list.insertAdjacentHTML('afterbegin', movie);
  });
}

const fetchMovies = () => {
  fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`)
  .then(response => response.json())
  .then(updateResults);
};

const addMovies = (event) => {
  event.preventDefault();
  fetchMovies();
};

export { fetchMovies, addMovies };
