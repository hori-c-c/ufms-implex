const { performance } = require('perf_hooks')

function barCut(barLength, priceArray, resultsTime) {
    const inicialTime = performance.now()
    const value = memorizedBarCut(barLength, priceArray)
    const execTime = (performance.now() - inicialTime).toFixed(6).substring(0,7)
    resultsTime.vDP[barLength] = value
    resultsTime.tDP[barLength] = execTime
}

function memorizedBarCut(barLength, priceArray) {
    const subProblemsArray = []

    for(let i = 0; i <= barLength; i ++)
        subProblemsArray.push(-65535)

    return memorizedBarCutAux(barLength, priceArray, subProblemsArray)
}

function memorizedBarCutAux(barLength, priceArray, subProblemsArray) {
    let q
    
    if(subProblemsArray[barLength] >= 0)
        return subProblemsArray[barLength]
    else if(barLength == 0)
        q = 0
    else {
        q = -65535
        for(let i = 1; i <= barLength; i++)
            q = Math.max(q, priceArray[i] + memorizedBarCutAux(barLength - i, priceArray, subProblemsArray))
    }

    subProblemsArray[barLength] = q
    return q
}


module.exports = { barCut }