function sleepHours(day){
    if (day === 'monday'){
        return 3
    }else if(day === 'tuesday'){
        return 5
    }else if(day === 'wednesday'){
      return 4
    }else if(day === 'thursday'){
      return 8
    }else if(day === 'friday'){
      return 6
    }else if(day==='saturday'){
      return 10
    }else if(day==='sunday'){
        return 9
    }
}

// Need to fix getActualSleepHours function
function getActualSleepHours(){
    return sleepHours('monday')
    return sleepHours('tuesday')
    return sleepHours('wednesday')
    return sleepHours('thursday')
    return sleepHours('friday')
    return sleepHours('saturday')
    return sleepHours('sunday')
}
console.log(getActualSleepHours())

function getIdealSleepHours(){
    const idealHours = 8
    return idealHours * 7
}

function calculateSleepDebt(){
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours){
        console.log('You got enough sleep tonight!')
    }else if(actualSleepHours > idealSleepHours){
        console.log('You overslept!')
    }else if(actualSleepHours < idealSleepHours){
        console.log(`You need to get more sleep. You owe ${idealSleepHours - actualSleepHours} hours of sleep!`)
    }
}

console.log(calculateSleepDebt())