//An Array of Play Selection Outcome
const playSelect=['paper','rock','scissors']
let userSelection;
let computerSelection;
let userWins=0;
// const gameCounts=5;
let gameOn=false;

//Computer Random Selection
function computerPlay() {
    const arrayIndex=Math.floor(Math.random()*playSelect.length);
    return (playSelect[arrayIndex]);
}


//User Play Selection
function getUserPlay(){
  //Ask User for Input in one of 3, trim and make LowerCase
  userSelection= prompt('Select one of "Paper,Rock or Scissors" to Play').trim().toLowerCase();  

  //Keep requesting While user selection is not found in defined Array 
  while (playSelect.indexOf(userSelection)===-1) {
   userSelection=prompt(`Your Choice: ${userSelection} is invalid, Please Play again`);
    }

   if (userSelection){gameOn=true;} 
}


// Play Game Once
function playGameOnce(){
    const drawGame=false;
// Game accepts user and computer entries and shows outcome
   if (userSelection===computerSelection){
       alert(`Your choice of ${userSelection} is a draw. Play again!`)
       drawGame=true;
    //    break;
    }else {
        if (userSelection==='paper' && computerSelection==='rock') {
            userWins+=1;
            alert(`You Win ${userSelection} beats ${computerSelection}`);
        }else if (userSelection==='rock' && computerSelection==='scissors') {
            userWins+=1;
            alert(`You Win ${userSelection} beats ${computerSelection}`);
        }else if (userSelection==='scissors' && computerSelection==='paper'){
            userWins+=1;
            alert(`You Win ${userSelection} beats ${computerSelection}`);
        }else{
            alert (`You Lose ${computerSelection} beats ${userSelection}`);
        }
    }
    gameOn=false;
}

computerSelection=computerPlay();
console.log(computerSelection);

userSelection=getUserPlay();
console.log(userSelection)

console.log (gameOn);

if (gameOn) {
    playGameOnce();
}
