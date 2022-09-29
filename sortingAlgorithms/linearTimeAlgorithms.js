const { insertionSort } = require('./elementaryAlgorithms')

function countingSort(array, k, d = -1) {
    const auxArray = []
    let arrayCopy = [], radixAux


    if(d == -1)
        arrayCopy = array.slice() //Making a non reference copy
    else {
        radixAux = array.slice() //Making a non reference copy
        for(let i = 0; i < radixAux.length; i++)
            arrayCopy.push(getDigit(radixAux[i], d))
    }
        
    
    for(let i = 0; i <= k; i++)
        auxArray.push(0)

    for(let j = 0; j < array.length; j++)
        auxArray[arrayCopy[j]] = auxArray[arrayCopy[j]] + 1

    for(let i = 1; i <= k; i++)
        auxArray[i] = auxArray[i] + auxArray[i-1]

    if(d == -1) {
        for(let j = arrayCopy.length - 1; j >= 0; j--) {
            array[auxArray[arrayCopy[j]] - 1] = arrayCopy[j]
            auxArray[arrayCopy[j]] = auxArray[arrayCopy[j]] - 1
        }
    }
    else {
        for(let j = radixAux.length - 1; j >= 0; j--) {
            array[auxArray[getDigit(radixAux[j], d)] - 1] = radixAux[j]
            auxArray[getDigit(radixAux[j], d)] = auxArray[getDigit(radixAux[j], d)] - 1
        }
    }

    return array
}

function radixSort(array, higherNumber) {
    const d = digitCount(higherNumber)
    for(let i = 0; i < d; i++) {
        countingSort(array, 9, i)
    }

    return array
}

function getDigit(number, position) {
    return Math.floor(number / Math.pow(10, position)) % 10
}

function digitCount(number) {
    if(number == 0)
        return 1
    
    return Math.floor(Math.log10(number)) + 1
}

function bucketSort(array) {
    const bucketArray = []

    for(let i = 0; i < array.length; i++)
        bucketArray.push([])

    for(let i = 0; i < array.length; i++)
        bucketArray[Math.floor(array.length * array[i])].unshift(array[i])

    for(const bucket of bucketArray) {
        insertionSort(bucket)
    }
    
    return bucketArray.flat(1)
}

module.exports = { countingSort, radixSort, bucketSort }