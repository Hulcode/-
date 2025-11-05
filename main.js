//letters
let letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainers = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  let span = document.createElement("span");

  span.append(letter);
  span.className = "letter-box";
  lettersContainers.appendChild(span);
});

const words = {
  programming: [
    "variable",
    "function",
    "loop",
    "array",
    "object",
    "string",
    "boolean",
    "integer",
    "float",
    "class",
    "method",
    "inheritance",
    "encapsulation",
    "polymorphism",
    "recursion",
    "algorithm",
    "compiler",
    "syntax",
    "debugger",
    "framework",
    "library",
    "database",
    "query",
    "api",
    "module",
    "interface",
    "package",
    "exception",
    "callback",
    "closure",
  ],

  movies: [
    "Inception",
    "Titanic",
    "Avatar",
    "Gladiator",
    "Interstellar",
    "Joker",
    "Frozen",
    "Up",
    "Toy Story",
    "Shrek",
    "The Matrix",
    "Avengers",
    "Iron Man",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Dune",
    "Black Panther",
    "Spider-Man",
    "Oppenheimer",
    "Tenet",
    "The Batman",
    "Transformers",
    "John Wick",
    "Finding Nemo",
    "Coco",
    "Inside Out",
    "The Lion King",
    "Moana",
  ],

  people: [
    "Albert Einstein",
    "Isaac Newton",
    "Elon Musk",
    "Bill Gates",
    "Steve Jobs",
    "Marie Curie",
    "Nikola Tesla",
    "Leonardo da Vinci",
    "Galileo Galilei",
    "Charles Darwin",
    "Oprah Winfrey",
    "Barack Obama",
    "Nelson Mandela",
    "Martin Luther King",
    "Queen Elizabeth",
    "Cristiano Ronaldo",
    "Lionel Messi",
    "Taylor Swift",
    "Michael Jackson",
    "Adele",
    "Kobe Bryant",
    "LeBron James",
    "Tom Cruise",
    "Angelina Jolie",
    "Brad Pitt",
    "Emma Watson",
    "Keanu Reeves",
    "Robert Downey Jr",
    "Scarlett Johansson",
    "Morgan Freeman",
  ],

  countries: [
    "Egypt",
    "USA",
    "Canada",
    "Brazil",
    "Argentina",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Portugal",
    "Mexico",
    "Russia",
    "China",
    "Japan",
    "South Korea",
    "India",
    "Saudi Arabia",
    "UAE",
    "South Africa",
    "Nigeria",
    "Australia",
    "New Zealand",
    "Turkey",
    "Greece",
    "Sweden",
    "Norway",
    "Finland",
    "Denmark",
    "Netherlands",
    "Switzerland",
  ],
};

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];
let sucSound = document.querySelector(".success");
let failSound = document.querySelector(".fail");
let sound = document.querySelector(".sound");

document.querySelector(".game-info .category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letter-guess");

let lettersAndSpace = Array.from(randomValueValue);

document.querySelector(".refresh").onclick = () => {
  window.location.reload();
};

lettersAndSpace.forEach((letter) => {
  let span = document.createElement("span");

  if (letter === " ") {
    span.className = "with-space";
  }
  lettersGuessContainer.appendChild(span);
});
let guessSpans = document.querySelectorAll(".letter-guess span");

let WrongAttempts = 0;
let rightAttempts = 0;
let TheDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let TheStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let chosenLetter = e.target.innerHTML.toLowerCase();
    lettersAndSpace.forEach((wordLetter, index) => {
      if (wordLetter.toLowerCase() == chosenLetter) {
        TheStatus = true;
        guessSpans[index].innerHTML = chosenLetter;
        rightAttempts++;
      }

      const totalLetters = lettersAndSpace.filter((l) => l !== " ").length;

      if (rightAttempts === totalLetters) {
        winGame();
        lettersContainers.classList.add("finished");
      }
    });

    if (!TheStatus) {
      WrongAttempts++;
      TheDraw.classList.add(`wrong-${WrongAttempts}`);
      failSound.play();

      if (WrongAttempts === 8) {
        endGame();
        lettersContainers.classList.add("finished");
      }
    } else {
      sucSound.play();
    }
  }
});

function endGame() {
  sound.play();
  sound.volume = 0.1;
  let div = document.createElement("div");
  div.append(`Game over , The Word Is ${randomValueValue}`);
  div.className = "popup";
  document.body.appendChild(div);
}

function winGame() {
  sound.play();
  sound.volume = 0.1;
  let div = document.createElement("div");
  div.append(`You Won , with ${WrongAttempts} Wrong attempts`);
  div.className = "right-popup";
  document.body.appendChild(div);
}
