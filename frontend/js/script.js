let meowButton = document.querySelector(".meow-button");
let catImg = document.querySelector(".cat-img");
let description = document.querySelector(".description");
let randomButton = document.querySelector(".random-button");


meowButton.addEventListener("click", function() {
  fetch("http://localhost:8080/cat")
    .then(response => response.json())
    .then(data => {
      catImg.src = data.link;
      description.textContent = data.description;
    });
})

randomButton.addEventListener("click", function() {
  catImg.src = "/images/loading.gif";
  description.textContent = "Котик загружается";
  fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(data => {
    catImg.src = data[0].url;
    catImg.onload = function() {
      description.textContent = "Вы вытащили рандомного котика";
      catImg.onload = undefined;
    }
  })
});