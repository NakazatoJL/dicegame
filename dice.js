var randomNumbers = [];
var h1 = document.querySelector("h1");
var image1 = document.querySelector("img.img1");
var image2 = document.querySelector("img.img2");

function randomize() {
  randomNumbers = [];
  randomNumbers.push(random6(), random6());
  image1.setAttribute("src", "./images/dice" + randomNumbers[0] + ".png");
  image2.setAttribute("src", "./images/dice" + randomNumbers[1] + ".png");
  if (randomNumbers[0] > randomNumbers[1]) {
    h1.innerHTML = "Player 1 won!";
  } else if (randomNumbers[0] < randomNumbers[1]) {
    h1.innerHTML = "Player 2 won!";
  } else {
    h1.innerHTML = "It's a tie!";
  }
  console.log(randomNumbers);
}

function random6() {
  return Math.floor(Math.random() * 6) + 1;
}
