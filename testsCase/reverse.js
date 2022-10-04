const { setAverageExecTime } = require('../utils')
const { quickSort } = require('../methodsFindTheKSmallestValue/quick')

/**
 * @param {Number} howManyPositions Tamanho do vetor a ser criado;
 * @param {Object} methods Todos os métodos pra achar o k-ésimo menor elemento;
 * @param {Object} resultsTime Objeto a armazenar os tempos de cada caso de teste;
 * @param {Number} rpt O número de vezes que será repetido o teste aleatório;
 * @param {Array} testArrays Arrays que serão usados nos testes;
 * @returns void.
 */
function reverseTest(howManyPositions, methods, resultsTime, rpt, testArrays) {
    const reverseTestArrays = []
    
    for(const array of testArrays) {
        const reverseArray = []
        const randomArray = array.slice() // Making an unreferenced copy
        quickSort(randomArray)

        for(let i = randomArray.length -1; i >= 0; i--)
            reverseArray.push(randomArray[i])

        reverseTestArrays.push(reverseArray)
    }

    setAverageExecTime(howManyPositions, methods, resultsTime, rpt, reverseTestArrays, 'REVERSE')    
}

module.exports = { reverseTest }