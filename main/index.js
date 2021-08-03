const express = require('express')
const fs = require('fs')
const app = express()
const port = 8080

let randomNumber = function(num) {
  return (Math.floor(Math.random() * num));
}

let getRandomElementFromFile = function(fileName) {
  let fileText = fs.readFileSync(__dirname + "/" + fileName, {encoding: "utf-8"});
  let data = JSON.parse(fileText);
  let randomIndex = randomNumber(data.length);
  return data[randomIndex];
}

app.use("/img", express.static(__dirname + "/" + "cats"));
app.use("/", express.static(__dirname + "/../" + "frontend"));

app.get('/cat', (req, res) => {
  let cat = getRandomElementFromFile("cat.json");
  cat.link = "http://localhost:8080/img/" + cat.name;
  res.send(cat);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})