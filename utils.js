/**
 * @param {Number} maxNumber O maior número possível;
 * @returns {Number} Um número entre 0 e maxNumber.
 */
function randomInt(maxNumber = 65535) {
    return Math.floor(Math.random() * maxNumber)
}

/**
 * @param {Array} array Vetor a ser normalizado;
 * @param {Number} higherNumber O maior elemento do vetor;
 * @param {Object} smallestNumber O menor elemento do vetor;
 * @returns void.
 */
function normalize(array, higherNumber, smallestNumber) {
    for(let i = 0; i < array.length; i++) {
        array[i] = (array[i] - smallestNumber)/(higherNumber - smallestNumber + 1)
    }
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

        result += '\n' + `${'-'.repeat(118)}` + '\n'
        
        for(let i = 0; i < howManyTests; i++) {
            for(const sortMethod in object[testType]) {
                const key = Object.keys(object[testType][sortMethod])[i]
                if(sortMethod == 'Bubble')
                    result += '\n' + `${key}` + `${' '.repeat(8 - key.length)}` 

                result += `${object[testType][sortMethod][key]}` + `${' '.repeat(6)}`
            }
        }

        result += '\n\n\n'
    }

    return result
}

module.exports = { randomInt, normalize, formatText }