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
function reverseTest(howManyPositions, methods, resultsTime, rpt, testArrays) {
    const reverseTestArrays = []
    
    for(const array of testArrays) {
        const reverseArray = []
        const randomArray = array.slice() // Making an unreferenced copy
        const k = randomArray.pop()
        quickSort(randomArray, 0, randomArray.length - 1)

        for(let i = randomArray.length -1; i >= 0; i--)
            reverseArray.push(randomArray[i])

        reverseArray.push(k)
        reverseTestArrays.push(reverseArray)
    }

    setAverageExecTime(howManyPositions, methods, resultsTime, rpt, reverseTestArrays, 'REVERSE')    
}

module.exports = { reverseTest }