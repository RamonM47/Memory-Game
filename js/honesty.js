/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let winner, cardValues

/*------------------------ Cached Element References ------------------------*/

const cardValues = document.querySelectorAll('section > div')

const message = document.querySelector('#instruction')

const play = document.querySelector('#play')

const reShuffle = document.querySelector('#reShuffle')

/*----------------------------- Event Listeners -----------------------------*/

reShuffle.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/




init ()

function init() {
    cardValues.splice(2, 1, 'face-down');

    function shuffle(cardValues) {
        cardValues.sort(() => Math.random() - 0.5);
    }

    winner = null
}


cardValues.sort(function() { return 0.5 - Math.random() });