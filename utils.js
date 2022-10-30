/**
 * @param {Number} maxNumber O maior número possível;
 * @returns {Number} Um número entre 0 e maxNumber.
 */
function randomInt(maxNumber = 65535) {
    const int = Math.floor(Math.random() * maxNumber)
    return int == 0 ? 1 : int
}

/**
 * @param {Object} object Object que contem todos os tempos dos casos de teste;
 * @param {Number} howManyTests A quantidade de casos de teste;
 * @returns {String} Uma string formata como tabela.
 */
 function formatText(object, howManyTests) {
    let result = 'n          '

    for(const key in object)
        result += `${key}` + `${' '.repeat(10)}`

    result += '\n' + `${'-'.repeat(81)}` + '\n'
    
    for(let i = 0; i < howManyTests; i++) {
        for(const key in object) {
            const value = Object.keys(object[key])[i]
            
            if(key == 'vDP')
                result += '\n' + `${value}` + `${' '.repeat(11 - value.length)}` 

            result += `${object[key][value]}` + `${' '.repeat(key.length + 10 - `${object[key][value]}`.length)}`
        }
    }

    return result
}

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
    
    resultsTime.percentage[barLength] = percentage + '%'
}

module.exports = { createDensityArray, createPriceArray, formatText, getPercentage, randomInt }