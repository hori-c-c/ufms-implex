const { setAverageExecTime } = require('../utils')
const { quickSort } = require('../methodsFindTheKSmallestValue/quick')

/**
 * @param {Number} howManyPositions A quantidade de posições que cada array possui;
 * @param {Object} methods Todos os métodos pra achar o k-ésimo menor elemento;
 * @param {Object} resultsTime Objeto a armazenar os tempos de cada caso de teste;
 * @param {Number} rpt A quantidade de array gerados;
 * @param {Array} testArrays Arrays que serão usados nos testes;
 * @returns void.
 */
function sortedTest(howManyPositions, methods, resultsTime, rpt, testArrays) {
    const sortedTestArrays = []
    
    for(const array of testArrays) {
        const sortedArray = array.slice() // Making an unreferenced copy
        const k = sortedArray.pop()
        quickSort(sortedArray, 0, sortedArray.length - 1)
        sortedArray.push(k)
        sortedTestArrays.push(sortedArray)
    }

    setAverageExecTime(howManyPositions, methods, resultsTime, rpt, sortedTestArrays, 'SORTED')
}

module.exports = { sortedTest }