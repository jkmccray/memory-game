function randomize() {
  const cards = document.querySelectorAll(".card");
  const cardIndices = [];
  generateCardIndices(cards, cardIndices);
  appendCardContent(cards, cardIndices)
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateCardIndices(cards, cardIndices) {
  cards.forEach(() => {
    let randNum = getRandomNum(0, cards.length);
    while (cardIndices.includes(randNum)) {
      randNum = getRandomNum(0, cards.length);
    }
    cardIndices.push(randNum);
  });
}

function appendCardContent(cards, cardIndices) {
  cards.forEach((card, idx) => {
    // for each card, get the random num at idx and append database[randomNum] to inner html of card
  });
}

// call function getRandomNum for same number of divs (result of length from using .querySelectorAll)
// identify a means of avoiding repetition 
// for each number, apply the quote to the front of that div

