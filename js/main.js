console.log("Let's play!");

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function (){
	if ((cardsInPlay.length >= 2) && (cardsInPlay[0] === cardsInPlay[1])){
		console.log("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function(cardId){

	console.log("User flipped a " + cards[cardId] + ".");

	cardsInPlay.push(cards[cardId]);
// 	checkForMatch();


// delete var cardOne = cards[0];
// delete cardsInPlay.push(cardOne);
// delete console.log("User flipped a " + cardsInPlay[0]);


// delete var cardTwo = cards[2];
// delete cardsInPlay.push(cardTwo);
// delete console.log("User flipped a " + cardsInPlay[1]);

};
flipCard(0);
flipCard(2);
checkForMatch();

//flipCard(0);
//flipCard(2);

//	if ((cardsInPlay.length >= 2) && (cardsInPlay[0] === cardsInPlay[1])){
//		alert("You found a match!");
//	} else {
//		alert("Sorry, try again.");
//	}