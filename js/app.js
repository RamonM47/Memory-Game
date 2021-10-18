/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function onCardClick (e) {
    const target = e.currentTarget;
    target.className = target.className.replace('face-down')
    console.log(target.className)
        .replace ('face-down','')       
}