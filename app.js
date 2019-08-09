const parentContainer = document.querySelector(".container")
let score = 0
let currentTurn = 0

parentContainer.addEventListener("click", (event) => {
  removeHidden(event);
  // checkForMatch(event);
});

function removeHidden(e) {
  const allCards = document.querySelectorAll(".card-text")
  const allHiddenCards = document.querySelectorAll(".hidden")
  const numberOfCardsShowing = allCards.length - allHiddenCards.length
  if (numberOfCardsShowing === 2) {
    allCards.forEach(cardText => cardText.classList = "card-text hidden")
    e.target.firstElementChild.classList.remove("hidden")
  } else if (e.target.tagName === "SPAN") {
    e.target.classList.remove("hidden")
  } else if (e.target.tagName === "DIV") {
    e.target.firstElementChild.classList.remove("hidden")
  }
  console.log(currentTurn)
}

function generateGameBoard() {
  parentContainer.innerHTML = null
  let cards = generateCards(16)
  cards.forEach(card => {
    parentContainer.appendChild(card)
  });
}

function generateCards(numberOfCards) {
  let cards = [];
  for (let i = 0; i < numberOfCards; i++) {
    let div = document.createElement("div");
    div.classList.add("card");
    let span = document.createElement("span");
    span.classList.add("card-text", "hidden");
    div.appendChild(span);
    cards.push(div);
  }
  return cards;
}

// Parent function
function randomize() {
  generateGameBoard();
  const cards = document.querySelectorAll(".card-text");
  const cardIndices = [];
  const matchIndices = [];
  const pairs = [];
  generateCardIndices(cards, cardIndices);
  generatePairIndices(database, matchIndices);
  generateRandPairs(database, matchIndices, pairs);
  appendCardContent(cards, cardIndices, pairs);
}

// Function to get random number. Need this to generate random numbers to create arrays of indices for selecting pairs and cards randomly.
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Function to generate the array of random card indices.
function generateCardIndices(cards, randNumArr) {
  avoidDuplicates(cards, randNumArr);
}

// Function to generate the array of random pair indices.
function generatePairIndices(database, randNumArr) {
  avoidDuplicates(database, randNumArr);
}

// While loop tests to see whether the random number has already been generated. 
// If so, it continues to run the random number function until a new number is generated.
function avoidDuplicates(arr, randNumArr) {
  arr.forEach(() => {
    let randNum = getRandomNum(0, arr.length);
    while (randNumArr.includes(randNum)) {
      randNum = getRandomNum(0, arr.length);
    }
    randNumArr.push(randNum);
  });
}

// Function produces an array of random pairs of quotes/movies from the database array.
function generateRandPairs(database, matchIndices, pairs) {
  for (let i = 0; i < database.length; i++) {
    const randIndex = matchIndices[i];
    pairs.push(database[randIndex]);
  }
}

// Function randomly assigns content to each card based on the array of random pairs produced by another function. 
function appendCardContent(cards, cardIndices, pairs) {
  pairs.forEach((pair, idx) => {
    const randIndex = cardIndices[idx];
    const randIndex2 = cardIndices[cards.length - 1 - idx];
    cards[randIndex].innerHTML = pair.quote;
    // cards[randIndex].classList.add(`pair-${randIndex}`)
    cards[randIndex2].innerHTML = pair.movie;
    // cards[randIndex2].classList.add(`pair-${randIndex}`)
  });
}

// function checkForMatch(e) {
//   if (mostRecentClick === null) {
//     mostRecentClick = e.target;
//   } else {
//     if (mostRecentClick.classList === e.target.classList) {
//     }
//   }

// }