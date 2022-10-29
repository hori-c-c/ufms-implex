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
function createPriceArray(barLength) {
    const priceArray = []
    const densityArray = []
    
    for(let length = 0; length <= barLength; length++) {
        const price = randomInt(10)
        priceArray.push(price)
    }

    return densityArray, priceArray
}

function createDensityArray(priceArray) {
    const densityArray = []
    
    for(let position = 0; position < priceArray.length; position++) {
        const price = priceArray[position]
        densityArray.push(price/position)
    }

    return densityArray
}

function getPercentage(barLength, resultsTime) {
    const vDP = resultsTime.vDP[barLength]
    const vGreedy = resultsTime.vGreedy[barLength]
    const percentage = (vGreedy/vDP * 100).toFixed(2)
    
    resultsTime.percentage[barLength] = percentage
}

module.exports = { createDensityArray, createPriceArray, formatText, getPercentage, randomInt }