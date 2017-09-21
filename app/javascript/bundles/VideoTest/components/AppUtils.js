//need to move these into react to handle properly

//make a deck for a new game
let newGame = (deck) => {
  let playDeck = [pickCard(deck.openers), pickCard(deck.closers), pickCard(deck.questions), pickCard(deck.personals)];
  return playDeck;
}
//pick cards from deck
let pickCard = (cards) => {
  return cards[Math.floor(Math.random() * 4)];
}
