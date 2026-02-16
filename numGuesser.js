let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
    return Math.floor(Math.random() * 9)
}

function compareGuesses(guess1, guess2, target_number){
    target_number = generateTarget()
    human_guess = Math.abs(target_number - guess1)
    comp_guess = Math.abs(target_number - guess2)
    if(human_guess>=comp_guess){
        return true
    }else if(comp_guess > human_guess){
        return false
    }else if(human_guess===target_number){
        return true
    }else{
        return false
    }
}

function updateScore(str){
    if(str === 'human'){
        humanScore += 1
    }else if(str === 'computer'){
        computerScore += 1
    }
}

function advanceRound(){
    currentRoundNumber += 1
}


