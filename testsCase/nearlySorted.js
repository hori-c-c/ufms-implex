const { randomInt, normalize } = require('../utils')
const { performance } = require('perf_hooks')
const testCase = 'NEARLY SORTED'

/**
 * @param {Number} howManyPositions Tamanho do vetor a ser criado;
 * @param {Number} maxRandomNumber Inteiro máximo que pode fazer parte de um caso de teste;
 * @param {Object} resultsTime Objeto a armazenar os tempos de cada caso de teste;
 * @param {Object} sortingAlgorithms Todos os algoritmos de ordenação;
 * @returns void.
 */
function nearlySortedTest(howManyPositions, maxRandomNumber, resultsTime, sortingAlgorithms) {
    const nearlySortedArray = []
    let counter = 0

    for(let position = 0; position < howManyPositions; position++)
        nearlySortedArray.push(randomInt(maxRandomNumber))

    sortingAlgorithms['Heap'][0](nearlySortedArray)
    const higherNumber = nearlySortedArray[nearlySortedArray.length - 1]
    const smallestNumber = nearlySortedArray[0]

    while(counter < Math.ceil(howManyPositions * 0.05)) {
        const positionOne = randomInt(howManyPositions - 1)
        const positionTwo = randomInt(howManyPositions - 1)
        const aux = nearlySortedArray[positionOne]
        nearlySortedArray[positionOne] = nearlySortedArray[positionTwo]
        nearlySortedArray[positionTwo] = aux
        counter ++
    }


    for(const sortMethod in sortingAlgorithms) {
        if(resultsTime[testCase][sortMethod] == undefined)
            resultsTime[testCase][sortMethod] = {}

        const array = nearlySortedArray.slice() // Making an unreferenced copy

        if(sortMethod == 'Bucket')
            normalize(array, higherNumber, smallestNumber)

        const inicialTime = performance.now()
        const resultArray = sortingAlgorithms[sortMethod][0](array, higherNumber)
        const execTime = (performance.now() - inicialTime).toFixed(6).substring(0,7)
        resultsTime[testCase][sortMethod][howManyPositions] = execTime
    }
}

module.exports = { nearlySortedTest }