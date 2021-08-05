let button = document.querySelector(".meow-button");
let catImg = document.querySelector(".cat-img");
let description = document.querySelector(".description");

button.addEventListener("click", function() {
  fetch("http://localhost:8080/cat")
    .then(response => response.json())
    .then(data => {
      catImg.src = data.link;
      description.textContent = data.description;
    });
})