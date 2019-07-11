// Parent/intialization function
function randomize() {
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
  cards.forEach(() => {
    let randNum = getRandomNum(0, cards.length);
    while (randNumArr.includes(randNum)) {
      randNum = getRandomNum(0, cards.length);
    }
    randNumArr.push(randNum);
  });
}

// Function to generate the array of random pair indices.
function generatePairIndices(database, randNumArr) {
  database.forEach(() => {
    let randNum = getRandomNum(0, database.length);
    while (randNumArr.includes(randNum)) {
      randNum = getRandomNum(0, database.length);
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
// Accesses the values of the quote and movie properties of that array using the . method.
function appendCardContent(cards, cardIndices, pairs) {
  pairs.forEach((pair, idx) => {
    const randIndex = cardIndices[idx];
    const randIndex2 = cardIndices[cards.length - 1 - idx];
    cards[randIndex].innerHTML = pair.quote;
    cards[randIndex2].innerHTML = pair.movie;
  });
}
