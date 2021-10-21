
/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let clickedCard = null;
let preventClick = false;
let combosFound = 0

/*------------------------ Cached Element References ------------------------*/

const reShuffle = document.querySelector('#reShuffle')

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/


function onCardClick(e) {
    const target = e.currentTarget;

    if (
        preventClick ||
        target === clickedCard ||
        target.className.includes('flipped')
    ) {
        return;
    }

    target.className = target.className
        .replace('face-down', '');
    target.className += 'flipped';


    if (!clickedCard) {
        clickedCard = target;
        document.querySelector('.instruction').innerHTML = ("Keep at it!");
    } else if (clickedCard) {

        if (
            clickedCard.getAttribute('class') !==
            target.getAttribute('class')
                
            
        ) {
            preventClick = true;
            setTimeout(() => {
                clickedCard.className =
                    clickedCard.className.replace('flipped', '') +
                    'face-down';
                target.className =
                    target.className.replace('flipped', '') +
                    'face-down';
                clickedCard = null;
                preventClick = false;
                document.querySelector('.instruction').innerHTML = ("Oof try again!");
            }, 500);
        } else {
            combosFound++;
            clickedCard = null;
            if (combosFound === 5) {
                document.querySelector('.instruction').innerHTML = ("You Win!! Hit 'Re-start to play again!!");
            }
        }
    }
}

function Refresh(){
    location.reload();
}