const { randomInt, setAverageExecTime } = require('../utils')
const { quickSort } = require('../methodsFindTheKSmallestValue/quick')

/**
 * @param {Number} howManyPositions Tamanho do vetor a ser criado;
 * @param {Object} methods Todos os métodos pra achar o k-ésimo menor elemento;
 * @param {Object} resultsTime Objeto a armazenar os tempos de cada caso de teste;
 * @param {Number} rpt O número de vezes que será repetido o teste aleatório;
 * @param {Array} testArrays Arrays que serão usados nos testes;
 * @returns void.
 */
function nearlySortedTest(howManyPositions, methods, resultsTime, rpt, testArrays) {
    const nearlySortedTestArrays = []
    
    for(const array of testArrays) {
        let counter = 0
        const nearlySortedArray = array.slice() // Making an unreferenced copy
        const k = nearlySortedArray.pop()
        quickSort(nearlySortedArray, 0, nearlySortedArray.length - 1)

        while(counter < Math.ceil(howManyPositions * 0.05)) {
            const positionOne = randomInt(howManyPositions - 1)
            const positionTwo = randomInt(howManyPositions - 1)
            const aux = nearlySortedArray[positionOne]
            nearlySortedArray[positionOne] = nearlySortedArray[positionTwo]
            nearlySortedArray[positionTwo] = aux
            counter ++
        }

        nearlySortedArray.push(k)
        nearlySortedTestArrays.push(nearlySortedArray)
    }

    setAverageExecTime(howManyPositions, methods, resultsTime, rpt, nearlySortedTestArrays, 'NEARLY SORTED')
}

module.exports = { nearlySortedTest }