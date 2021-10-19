/*-------------------------------- Constants --------------------------------*/
// let card = document.getElementsByClassName('card');

// let cards = [card]

// let clickedCard = null;

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const cardValues = document.querySelectorAll('.card')


/*----------------------------- Event Listeners -----------------------------*/

cardValues.forEach(card => card.addEventListener('click', handleClick))

/*-------------------------------- Functions --------------------------------*/

function handleClick() {
    console.log(cardValues)
}

// function onCardClick(e) {
//     const target = e.currentTarget;

//     target.className = target.className
//         .replace('face-down', '')
//     target.className += 'done';

//     if (!clickedCard) {
//         clickedCard = target;
//     } else if (clickedCard) {

//         if (
//             clickedCard.getAttribute('class') ===
//             target.getAttribute('class')) {

//         } else {
//             setTimeout(() => {
//                 clickedCard.className =
//                     clickedCard.className.replace('done', '') +
//                     'face-down';
//                 target.className =
//                     target.className.replace('done', '') +
//                     'face-down';
//             }, 500);
//             console.log('no');
//         }
//     }
// }
