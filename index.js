// Code your solution here
function findMatching(names, name){
    return names.filter(
        (match) => match.toLowerCase() === name.toLowerCase()
    )
}

function fuzzyMatch(names, search){
    return names.filter(
        (match) => match.toLowerCase().charAt(0) === search.toLowerCase().charAt(0)
    )
}

function matchName(drivers, search){
    return drivers.filter(
        (match) => match.name === search
    )
}