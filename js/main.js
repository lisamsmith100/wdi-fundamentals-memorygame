console.log("Up and running!");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped a " + cardsInPlay[0]);
console.log("User flipped a " + cardsInPlay[1]);

if ((cardsInPlay.length >= 2) && (cardsInPlay[0] === cardsInPlay[1])){
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}