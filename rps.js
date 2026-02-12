// Rock, Paper, Scissors Game
const getUserChoice = userInput =>  
{if(userInput === 'rock'|userInput==='paper'|userInput==='scissors'){
  return userInput
  console.log(userInput)
}else if(userInput != userInput.toLowerCase()){
  return userInput.toLowerCase()
}else{
  console.log('Invalid Entry.')
}};


function getComputerChoice(){
    Math.floor(Math.random() * 2);
    if(getComputerChoice === 0){
        return 'rock'
    }else if(getComputerChoice === 1){
        return 'paper'
    }else{
        return 'scissors'
    }}

function determineWinner(userChoice,computerChoice){
    if(userChoice===computerChoice){
        return "It's a tie!"
    }

    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer Wins :('
      }else{
        return 'User Wins!'
      }
    }

    if(userChoice==='paper'){
      if(computerChoice==='scissors'){
        return 'Computer Wins :('
      }else{
        return 'User Wins!'
      }
    }

    if(userChoice==='scissors'){
      if(computerChoice==='rock'){
        return 'Computer Wins :('
      }else{
        return 'User Wins!'
      }
    }
    // userChoice === 'rock' && (computerChoice === 'paper') ? 
    // console.log ('Computer wins :('): 
    // console.log('User Wins!');

    // userChoice === 'paper' && (computerChoice === 'scissors') ? 
    // console.log ('Computer wins :('): 
    // console.log('User Wins!');
    
    // userChoice === 'scissors' && (computerChoice === 'rock') ? 
    // console.log ('Computer wins :('): 
    // console.log('User Wins!');
}

function playGame(){
  let userChoice = getUserChoice('rock')
  console.log(userChoice)
  let computerChoice = getComputerChoice()
  console.log(computerChoice)
  console.log(determineWinner(userChoice,computerChoice))
}

playGame()