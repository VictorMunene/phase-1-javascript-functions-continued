// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (grind = 'go to the office') {
    return `This Monday, I will ${grind}.`
}

function wrapAdjective (wrap = '*') {
    return function (result = 'special') {
        return `You are ${wrap}${result}${wrap}!`
    }
}