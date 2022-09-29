const { randomInt, normalize } = require('../utils')
const { performance } = require('perf_hooks')
const testCase = 'REVERSE'

/**
 * @param {Number} howManyPositions Tamanho do vetor a ser criado;
 * @param {Number} maxRandomNumber Inteiro máximo que pode fazer parte de um caso de teste;
 * @param {Object} resultsTime Objeto a armazenar os tempos de cada caso de teste;
 * @param {Object} sortingAlgorithms Todos os algoritmos de ordenação;
 * @returns void.
 */
function reverseTest(howManyPositions, maxRandomNumber, resultsTime, sortingAlgorithms) {
    const randomArray = []
    const reverseArray = []

    for(let position = 0; position < howManyPositions; position++)
        randomArray.push(randomInt(maxRandomNumber))

    sortingAlgorithms['Heap'][0](randomArray)
    const higherNumber = randomArray[randomArray.length - 1]
    const smallestNumber = randomArray[0]

    for(let i = randomArray.length -1; i >= 0; i--)
        reverseArray.push(randomArray[i])

    for(const sortMethod in sortingAlgorithms) {
        if(resultsTime[testCase][sortMethod] == undefined)
            resultsTime[testCase][sortMethod] = {}

        const array = reverseArray.slice() // Making an unreferenced copy

        if(sortMethod == 'Bucket')
            normalize(array, higherNumber, smallestNumber)

        const inicialTime = performance.now()
        const resultArray = sortingAlgorithms[sortMethod][0](array, higherNumber)
        const execTime = (performance.now() - inicialTime).toFixed(6).substring(0,7)
        resultsTime[testCase][sortMethod][howManyPositions] = execTime
    }
}

module.exports = { reverseTest }