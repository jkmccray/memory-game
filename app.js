function randomize() {
  const cards = document.querySelectorAll(".card");
  const cardIndices = [];
  const matchIndices = [];
  const matchingPairs = [];
  generateCardIndices(cards, cardIndices);
  generateMatchIndices(database, matchIndices);
  generatePairs(cards, matchIndices, matchingPairs);
  console.log(matchIndices);
  appendCardContent(cards, cardIndices, matchingPairs);
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateCardIndices(cards, randNumArr) {
  cards.forEach(() => {
    let randNum = getRandomNum(0, cards.length);
    while (randNumArr.includes(randNum)) {
      randNum = getRandomNum(0, cards.length);
    }
    randNumArr.push(randNum);
  });
}

function generateMatchIndices(database, randNumArr) {
  database.forEach(() => {
    let randNum = getRandomNum(0, database.length);
    while (randNumArr.includes(randNum)) {
      randNum = getRandomNum(0, database.length);
    }
    randNumArr.push(randNum);
  });
}

// Each database object has a pair, so we need half of the total number of cards
function generatePairs(cards, matchIndices, matchingPairs) {
  for (let i = 0; i < cards.length / 2; i++) {
    const randIndex = matchIndices[i];
    matchingPairs.push(database[randIndex]);
  }
}

function appendCardContent(cards, cardIndices, matchingPairs) {
  matchingPairs.forEach((pair, idx) => {
    const randIndex = cardIndices[idx];
    const randIndex2 = cardIndices[cards.length - 1 - idx];
    cards[randIndex].innerHTML = pair.quote;
    cards[randIndex2].innerHTML = pair.char;
  });
}
// call function getRandomNum for same number of divs (result of length from using .querySelectorAll)
// identify a means of avoiding repetition 
// for each number, apply the quote to the front of that div

// function makeCardContent(cards, cardIndices, matchingPairs) {
//   for (let i = 0; i<matchingPairs.length; i++) {
//     console.log(matchingPairs[i].quote);
//     console.log(matchingPairs[i].char);
//   }
// }