const { normalize, randomInt } = require('../utils')
const { performance } = require('perf_hooks')
const testCase = 'RANDOM'

/**
 * @param {Number} howManyPositions Tamanho do vetor a ser criado;
 * @param {Number} maxRandomNumber Inteiro máximo que pode fazer parte de um caso de teste;
 * @param {Object} resultsTime Objeto a armazenar os tempos de cada caso de teste;
 * @param {Number} rpt O número de vezes que será repetido o teste aleatório;
 * @param {Object} sortingAlgorithms Todos os algoritmos de ordenação;
 * @returns void.
 */
function randomTest(howManyPositions, maxRandomNumber, resultsTime, rpt, sortingAlgorithms) {
    const testArrays = []
    let higherNumber, smallestNumber
    
    for(let rptCounter = 0; rptCounter < rpt; rptCounter++) {
        const randomArray = []
        higherNumber = 0
        smallestNumber = 70000

        for(let position = 0; position < howManyPositions; position++) {
            const number = randomInt(maxRandomNumber)
            randomArray.push(number)
            if(number > higherNumber)
                higherNumber = number
            if(number < smallestNumber)
                smallestNumber = number
        }

        randomArray.push(higherNumber)
        randomArray.unshift(smallestNumber)
        testArrays.push(randomArray)
    }

    for(const sortMethod in sortingAlgorithms) {
        let averageExecTime = 0

        if(resultsTime[testCase][sortMethod] == undefined)
            resultsTime[testCase][sortMethod] = {}

        for(const testArray of testArrays) {
            const array = testArray.slice() //Making a non reference copy
            higherNumber = array.pop()
            smallestNumber = array.shift()

            if(sortMethod == 'Bucket')
                normalize(array, higherNumber, smallestNumber)

            const inicialTime = performance.now()
            const resultArray = sortingAlgorithms[sortMethod][0](array, higherNumber)
            const execTime = (performance.now() - inicialTime)
            averageExecTime += execTime
        }

        averageExecTime = (averageExecTime/rpt).toFixed(6).substring(0,7)
        resultsTime[testCase][sortMethod][howManyPositions] = averageExecTime
    }
}


module.exports = { randomTest }