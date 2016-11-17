var board = document.getElementById('game-board');

var createCards = function(noOfCards){
	for (i=0; i<noOfCards; i++ ) {
	var newCard = document.createElement('div');
    newCard.setAttribute('class','card');
	board.appendChild(newCard);
	}
}

createCards(4);