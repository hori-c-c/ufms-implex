function randomInt(maxNumber = 65535) {
    return Math.floor(Math.random() * maxNumber)
}

function normalize(array, higherNumber, smallestNumber) {
    for(let i = 0; i < array.length; i++) {
        array[i] = (array[i] - smallestNumber)/(higherNumber - smallestNumber + 1)
    }
}

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