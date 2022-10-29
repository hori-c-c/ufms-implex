const { performance } = require('perf_hooks')
const { getPercentage } = require('../utils')


function greedy(barLength, densityArray, priceArray, resultsTime) {
    const inicialTime = performance.now()
    const value = greedyAlgorithm(barLength, densityArray, priceArray)
    const execTime = (performance.now() - inicialTime).toFixed(6).substring(0,7)
    resultsTime.vGreedy[barLength] = value
    resultsTime.tGreedy[barLength] = execTime
    getPercentage(barLength, resultsTime)
}

function greedyAlgorithm(barLength, densityArray, priceArray) {
    let positionFromTheBiggerDensity = 1

    for (let length = barLength; length > 0; length--) {
        if (densityArray[length] > densityArray[positionFromTheBiggerDensity])
            positionFromTheBiggerDensity = length
    }

    barLength = barLength - positionFromTheBiggerDensity  
    if (barLength > 0)
        return priceArray[positionFromTheBiggerDensity] + greedyAlgorithm(barLength, densityArray, priceArray)
    else
        return priceArray[positionFromTheBiggerDensity]
}

module.exports = { greedy }