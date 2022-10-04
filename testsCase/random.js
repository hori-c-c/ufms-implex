const { setAverageExecTime } = require('../utils')

/**
 * @param {Number} howManyPositions Tamanho do vetor a ser criado;
 * @param {Object} methods Todos os métodos pra achar o k-ésimo menor elemento;
 * @param {Object} resultsTime Objeto a armazenar os tempos de cada caso de teste;
 * @param {Number} rpt O número de vezes que será repetido o teste aleatório;
 * @param {Array} testArrays Arrays que serão usados nos testes;
 * @returns void.
 */
function randomTest(howManyPositions, methods, resultsTime, rpt, testArrays) {
    const randomTestArrays = []
    
    for(const array of testArrays) {
        const aux = array.slice() // Making an unreferenced copy
        randomTestArrays.push(aux)
    }

    setAverageExecTime(howManyPositions, methods, resultsTime, rpt, randomTestArrays, 'RANDOM')
}


module.exports = { randomTest }