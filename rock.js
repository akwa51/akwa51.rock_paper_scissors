//An Array of Play Selection Outcome
const playSelect=['paper','rock','scissors']
// let userSelection;
let computerSelection;

//Computer Random Selection Function
function computerPlay() {
    const arrayIndex=Math.floor(Math.random()*playSelect.length);
    // console.log(playSelect[arrayIndex]);
    return (playSelect[arrayIndex]);
}

computerSelection=computerPlay();
console.log(computerSelection);

