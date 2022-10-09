const { quickSort, partition } = require('./quick')


function select(array, k) {
    const aux = []
    const medianArray = []

    for(let i = 0; i < Math.ceil(array.length/5); i++)
        aux.push([])

    for(let i = 0; i < array.length; i++)
        aux[Math.floor(i/5)].push(array[i])

    for(const subArray of aux) {
        quickSort(subArray, 0, subArray.length - 1)
        medianArray.push(subArray[Math.ceil(subArray.length/2) - 1])
    }
    
    const median = quickSort(medianArray, 0, medianArray.length - 1, Math.ceil(medianArray.length/2))
    const pivot = partition(array, 0, array.length - 1, median)

    if(k == pivot)
        return array[pivot]
    else if(array.length == 2) {
        quickSort(array, 0, 1)
        return array[k]
    }
    else if(k < pivot)
        return select(array.slice(0, pivot), k)
    else
        return select(array.slice(pivot), k - pivot)
}


module.exports = { select }