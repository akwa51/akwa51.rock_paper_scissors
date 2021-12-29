//An Array of Play Selection Outcome
const playSelect=['paper','rock','scissors']
let userSelection;
let computerSelection;
let userWins=userLoss=0;
let gameCount=gameDraws=0;
let gameOn=false;

//Computer Random Selection
function computerPlay() {
    const arrayIndex=Math.floor(Math.random()*playSelect.length);
    return (playSelect[arrayIndex]);
}

//User Play Selection
function getUserPlay(){
  let localUserInput;
  //Ask User for Input in one of 3, trim and make LowerCase
  localUserInput=prompt('Select one of "Paper,Rock or Scissors" to Play');

  if (!localUserInput===null) {
        userSelection= prompt('Select one of "Paper,Rock or Scissors" to Play').trim().toLowerCase();  
  }
  
  //Keep requesting While user selection is not found in defined Array 
  while (playSelect.indexOf(userSelection)===-1) {
        localUserInput=prompt('Select one of "Paper,Rock or Scissors" to Play');

        if (!localUserInput===null) {
            userSelection= prompt(`Your Choice: ${userSelection} is invalid, Please Play again`).trim().toLowerCase();  
        }
    }
    localUserInput=null; 
//    if (userSelection){gameOn=true;} 
    if (userSelection){return true;} 
}


// Play Game Once
function playGameOnce(){
    // let drawGame=false;
// Game accepts user and computer entries and shows outcome
   if (userSelection===computerSelection){
       alert(`Your choice of ${userSelection} is a draw. Play again!`)
    //    drawGame=true;
        gameDraws+=1;
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
            userLoss+=1;
        }
    }
    gameOn=false;
    // reset all player choices 
    userSelection=computerSelection=null;
    gameCount+=1;
}


function displayPlayResults(){
    if (userWins>0 && userLoss>0 && gameDraws>0) {
        alert(`You won ${userWins} times, drew ${gameDraws} times and lost ${userLoss} times!!`);
    }else if (userWins>0 && userLoss>0){
        alert(`You won ${userWins} times and lost ${userLoss} times!`);
    }else if (userWins>0 && gameDraws>0) {
        alert(`You won ${userWins} times, drew ${gameDraws} times`);
    }else if (userLoss>0 && gameDraws>0){
        alert(`You Lost ${userLoss} times, drew ${gameDraws} times`,);
    }else if (userLoss==0 && gameDraws==0) {
        alert(`Congrats!You won ${userWins} times.`); 
    }else if (userWins==0 && gameDraws==0){
        alert(`Sorry!You lost ${userLoss} times.`); 
    }
}
// console.log(computerSelection);
// Play 5X Consecutively
while (gameCount<=5){
    //Computer Play
   computerSelection=computerPlay();

   // Get User choice
    gameOn=getUserPlay(); 
 
    if (gameOn) {
        playGameOnce();
    }  
}
if (gameCount>0) {displayPlayResults();}
