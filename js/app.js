let clickedCard = null; 
let preventClick = false;

function onCardClick(e) {
    const target = e.currentTarget;

    if (
    preventClick ||
    target === clickedCard ||
    target.className.includes('done')
    ) {
    return;
    }

    target.className = target.className.replace('face-down', '');
    target.className += 'done';



if (!clickedCard) {
    clickedCard = target;
} else if (clickedCard) {

    if (
        clickedCard.getAttribute('class') !==
        target.getAttribute('class')
    ) {
        preventClick = true;
        setTimeout(() => {
            clickedCard.className =
                clickedCard.className.replace('done', '') +
                'face-down';
            target.className =
                target.className.replace('done', '') +
                'face-down';
            clickedCard = null;
            preventClick = false;
        }, 1000);
        console.log('no');
    } else {
        clickedCard = null;
    }

}
/*-------------------------------- Constants --------------------------------*/
// const squares = document.querySelectorAll('.row > .card')
// console.log(squares)

// let clickedCard = null;

/*---------------------------- Variables (state) ----------------------------*/

// let table, winner

/*------------------------ Cached Element References ------------------------*/

// const cardValues = document.querySelectorAll('section > div')

// const message = document.querySelector('#instruction')

// const play = document.querySelector('#play')

// const reShuffle = document.querySelector('#reShuffle')

/*----------------------------- Event Listeners -----------------------------*/

// cardValues.forEach((card) => {
//     card.addEventListener('click', handleClick)
//     console.log(card)
// })

// reShuffle.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

// function handleClick() {
//     console.log(cardValues)
// }

//--------------------------------------------

// function onCardClick(e) {
//     const target = e.currentTarget;


//--------------------------------------------

    // target.className = target.className
    //     .replace('face-down', '')
    // target.className += 'done';

//     if (!clickedCard) {
//         clickedCard = target;
//     } else if (clickedCard) {

//--------------------------------------------

//         if (
//             clickedCard.getAttribute('class') ===
//             target.getAttribute('class')) {

//         } else {

//--------------------------------------------

//             setTimeout(() => {
//                 clickedCard.className =
//                     clickedCard.className.replace('done', '') +
//                     'face-down';
//                 target.className =
//                     target.className.replace('done', '') +
//                     'face-down';
//             }, 500);

//--------------------------------------------

//             console.log('no');
//         }
//     }

// init ()

// function init() {
//     table = [null, null, null, null, null]

//     render()
// }

// function render() {
}

// function shuffle(cardValues) {
//     cardValues.sort(() => Math.random() - 0.5);
//     console.log(shuffle)
// }

// function handleClick(evt) {
//     let cardIdx = parseInt(evt.target.id.replace('face-down', ''))

//     if (table[cardIdx] || winner) {
//         return
//     }
// table[sqIdx] = tufunction onCardClick(e) {
