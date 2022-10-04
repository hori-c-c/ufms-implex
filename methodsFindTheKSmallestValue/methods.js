const { quickSort } = require('./quick')
const { extractMin } = require('./extractMin')


const methods = { //const with all methods to find the k smallest value
    'QuickSort': [(array, k) => { return quickSort(array, 0, array.length - 1, k)}],
    'PrQueue': [(array, k) => { return extractMin(array, k)}],
    'RSelect': [],
    'Select': []
}


module.exports = { methods }