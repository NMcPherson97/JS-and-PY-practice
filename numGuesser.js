let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
    return Math.floor(Math.random() * 9)
}
let humanGuess = Math.floor(Math.random() * 9)
let compGuess = Math.floor(Math.random() * 9)

function compareGuesses(guess1,guess2){
    target_number = generateTarget()
    let human_guess = Math.abs(target_number - guess1)
    let comp_guess = Math.abs(target_number - guess2)
    if(human_guess>=comp_guess){
        return 'Human wins'
    }else if(comp_guess > human_guess){
        return 'Computer wins'
    }else if(human_guess===target_number){
        return 'Human wins'
    }else{
        return 'Computer wins'
    }
}

function updateScore(str){
    if(str === 'human'){
        humanScore += 1
    }else if(str === 'computer'){
        computerScore += 1
    }
}

console.log(compareGuesses(humanGuess,compGuess))

