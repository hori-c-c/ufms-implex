const { performance } = require('perf_hooks')

/**
 * @param {Number} maxNumber O maior número possível;
 * @returns {Number} Um número entre 0 e maxNumber.
 */
function randomInt(maxNumber = 65535) {
    return Math.floor(Math.random() * maxNumber)
}

/**
 * @param {Object} object Object que contem todos os tempos dos casos de teste;
 * @param {Number} howManyTests A quantidade de casos de teste;
 * @returns {String} Uma string formata como tabela.
 */
function formatText(object, howManyTests) {
    let result = ''

    for(const testType in object) {
        result = result + `[[${testType}]]\n\n${' '.repeat(3)}n${' '.repeat(4)}`

        for(const sortMethod in object[testType])
            result += `${sortMethod}` + `${' '.repeat(6 - sortMethod.length + 7)}`

        result += '\n' + `${'-'.repeat(54)}` + '\n'
        
        for(let i = 0; i < howManyTests; i++) {
            for(const sortMethod in object[testType]) {
                const key = Object.keys(object[testType][sortMethod])[i]
                if(sortMethod == 'QuickSort')
                    result += '\n' + `${key}` + `${' '.repeat(8 - key.length)}` 

                result += `${object[testType][sortMethod][key]}` + `${' '.repeat(6)}`
            }
        }

        result += '\n\n\n'
    }

    return result
}

/**
 * @param {Number} howManyPositions A quantidade de posições que cada array possui;
 * @param {Number} maxRandomNumber O maior número possível de uma posição de um array;
 * @param {Number} rpt A quantidade de array a ser gerados;
 * @returns {Array} Um array contendo todos os arrays gerados.
 */
function createRandomArrays(howManyPositions, maxRandomNumber, rpt) {
    const arrays = []
    
    for(let counter = 0; counter < rpt; counter++) {
        const randomArray = []

        for(let position = 0; position < howManyPositions; position++) {
            const number = randomInt(maxRandomNumber)
            randomArray.push(number)
        }

        randomArray.push(randomInt(howManyPositions - 1) + 1)
        arrays.push(randomArray)
    }

    return arrays
}

/**
 * @param {Number} howManyPositions A quantidade de posições que cada array possui;
 * @param {Object} methods Todos os métodos pra achar o k-ésimo menor elemento;
 * @param {Object} resultsTime Object que contem todos os tempos dos casos de teste;
 * @param {Number} rpt A quantidade de array gerados;
 * @param {Array} testArrays O array que contem todos os arrays a serem testados;
 * @param {String} testCase O nome do caso de teste;
 * @returns {void} void.
 */
function setAverageExecTime(howManyPositions, methods, resultsTime, rpt, testArrays, testCase) {
    for(const method in methods) {
        let averageExecTime = 0

        if(resultsTime[testCase][method] == undefined)
            resultsTime[testCase][method] = {}

        for(const testArray of testArrays) {
            const array = testArray.slice() //Making a non reference copy
            const k = array.pop()
            const inicialTime = performance.now()
            const kSmallestValue = methods[method][0](array, k)
            const execTime = (performance.now() - inicialTime)
            averageExecTime += execTime
        }

        averageExecTime = (averageExecTime/rpt).toFixed(6).substring(0,7)
        resultsTime[testCase][method][howManyPositions] = averageExecTime
    }
}

module.exports = { createRandomArrays, formatText, randomInt, setAverageExecTime }