var board = document.getElementById('game-board');
var cards = ['queen','queen','king','king'];
cardsInPlay = []; 

createCards();

function createCards(){
	for (i=0; i<cards.length; i++ ) {
		var newCard = document.createElement('div');
    	newCard.setAttribute('class','card');
    	newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', checkForTwoCards);
		board.appendChild(newCard);
	}
}

function checkForTwoCards(){
	CardClicked = this;
	CardData = CardClicked.getAttribute('data-card');
	cardsInPlay.push(CardData);
	console.log(cardsInPlay[cardsInPlay.length-1]); //show most recent card picked
	displayCard(CardData,CardClicked);
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay=[];
	}

}

function isMatch(cards){
	if (cards[0] === cards[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	coverCards();
}

function displayCard(CardData,CardElement){
	if (CardData === 'king') {
		CardElement.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
		} else {
			CardElement.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
		}
}

function coverCards() {
	for (i=0; i<cards.length; i++ ){
		document.getElementsByClassName("card")[i].innerHTML='';
	}
}



