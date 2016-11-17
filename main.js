var board = document.getElementById('game-board');
var cards = ['queen','queen','king','king'];
cardsInPlay = [];

var isMatch = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
}

var createCards = function(noOfCards){
	for (i=0; i<noOfCards; i++ ) {
		var newCard = document.createElement('div');
    	newCard.setAttribute('class','card');
    	newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		board.appendChild(newCard);
	}
}

createCards(4);

