const { randomInt, normalize } = require('../utils')
const { performance } = require('perf_hooks')
const testCase = 'SORTED'


function sortedTest(howManyPositions, resultsTime, sortingAlgorithms) {
    const sortedArray = []

    for(let position = 0; position < howManyPositions; position++)
        sortedArray.push(randomInt())

    sortingAlgorithms['Heap'][0](sortedArray)
    const higherNumber = sortedArray[sortedArray.length - 1]
    const smallestNumber = sortedArray[0]

    for(const sortMethod in sortingAlgorithms) {
        if(resultsTime[testCase][sortMethod] == undefined)
            resultsTime[testCase][sortMethod] = {}

        const array = sortedArray.slice() // Making an unreferenced copy

        if(sortMethod == 'Bucket')
            normalize(array, higherNumber, smallestNumber)

        const inicialTime = performance.now()
        const resultArray = sortingAlgorithms[sortMethod][0](array, higherNumber)
        const execTime = (performance.now() - inicialTime).toFixed(6).substring(0,7)
        resultsTime[testCase][sortMethod][howManyPositions] = execTime
    }
}

module.exports = { sortedTest }