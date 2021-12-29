//An Array of Play Selection Outcome
const playSelect=['paper','rock','scissors']
let userSelection;
let computerSelection;
let userWins=userLoss=0;
let playCount=gameDraws=0;
let gameOn=false;
let gameCount=0; //Total Allowed Game Count

//Computer Random Selection
function computerPlay() {
    const arrayIndex=Math.floor(Math.random()*playSelect.length);
    return (playSelect[arrayIndex]);
}

//Request Total Game Play Times
function getGameCount(){
    let localCount;
     // Ask User Number of Times to Play Game  
     localCount=parseInt(prompt('Confirm No of Times to Play Game', 5));
     if (localCount===NaN) {
         gameCount=5; 
     }else{
         gameCount=localCount;
     }
}

//User Play Selection
function getUserPlay(){
  let localUserInput;
  //Ask User for Input in one of 3, trim and make LowerCase
  localUserInput=prompt('Select one of "Paper,Rock or Scissors" to Play');

  if (localUserInput!==null) {
        userSelection= localUserInput.trim().toLowerCase();  
    
    //Keep requesting While user selection is not found in defined Array 
    while (playSelect.indexOf(userSelection)===-1) {
            localUserInput=prompt(`Your Choice: ${userSelection} is invalid. Please Select to Play again or Q to End Game`);

            if (localUserInput!==null) {
                userSelection= localUserInput.trim().toLowerCase();  

                if (localUserInput.toUpperCase()=='Q'){
                    userSelection=null;
                    break;
                }
            }else {
                userSelection=null;
                break;
            }
        }
    }
    localUserInput=null;  
    //A valid User Choice means Game can be Played.
    if (userSelection){return true;} 
}


// Play Each Round
function playRound(){
// Game accepts user and computer entries and shows outcome
   if (userSelection===computerSelection){
       alert(`Your choice of ${userSelection} is a draw!`)
        gameDraws+=1;
    }else {
        if (userSelection==='paper' && computerSelection==='rock') {
            userWins+=1;
            alert(`You win: ${userSelection} beats ${computerSelection}`);
        }else if (userSelection==='rock' && computerSelection==='scissors') {
            userWins+=1;
            alert(`You win: ${userSelection} beats ${computerSelection}`);
        }else if (userSelection==='scissors' && computerSelection==='paper'){
            userWins+=1;
            alert(`You win: ${userSelection} beats ${computerSelection}`);
        }else{
            alert (`You Lose ${computerSelection} beats ${userSelection}`);
            userLoss+=1;
        }
    }  
    // reset all player choices
    gameOn=false;
    userSelection=computerSelection=null;
    playCount+=1;
    //Can we play Another Round?
    if (playCount<gameCount) { alert('Play Again!');}
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
        alert(`Congrats! You won ${userWins} times.`); 
    }else if (userWins==0 && gameDraws==0){
        alert(`Sorry! You lost ${userLoss} times.`); 
    }
}

//Play the Game
function game(){
// Request Total Game Play Times
  getGameCount();

// Play the Game
while (playCount<gameCount){
    //Computer Play
   computerSelection=computerPlay();

   // Get User choice
    gameOn=getUserPlay(); 

    //Play Each Round
    if (gameOn) {
        playRound();
    }else{
        break;
    }
}

if (playCount>0) {displayPlayResults();}
}


//Call to play the Game
game();


