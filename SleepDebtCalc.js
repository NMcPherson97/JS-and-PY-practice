function getSleepHours(day){
    if (day === 'monday'){
        return 5
    }else if(day === 'tuesday'){
        return 6
    }else if(day === 'wednesday'){
      return 6
    }else if(day === 'thursday'){
      return 7
    }else if(day === 'friday'){
      return 9
    }else if(day==='saturday' | day==='sunday'){
      return 10
    }
}

function getActualSleepHours(){
    return getSleepHours('monday')
    return getSleepHours('tuesday')
    return getSleepHours('wednesday')
    return getSleepHours('thursday')
    return getSleepHours('friday')
    return getSleepHours('saturday')
    return getSleepHours('sunday')
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