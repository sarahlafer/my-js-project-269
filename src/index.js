// console.log("Hello from src/index.js!");

const list = document.querySelector("#players");
// console.log(list);
list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("afterbegin", "<li>Han</li>");

const countries = document.querySelectorAll("#fifa-wins li");
// console.log(countries);
// => NODE LIST

countries.forEach((country) => {
  // console.log(country.innerText);
});

const fifaList = document.querySelector("#fifa-wins");
// console.log(fifaList);
// => DOM OBJECT

// console.log(fifaList);
fifaList.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

// fifaList.style.display = "none";
// fifaList.style.display = "";

fifaList.classList.add("green");

const email = document.querySelector("#email");
// const email = document.getElementById("email");

email.value = "sarah@gmail.com";

// element.addEventListener(EVENT_TYPE, (event) => {

// });

// const romain = document.querySelector("#romain");

// // console.log(romain);

// romain.addEventListener("click", (event) => {
//   event.currentTarget.classList.toggle("img-circle");
// });

const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('img-circle');
  });
});
