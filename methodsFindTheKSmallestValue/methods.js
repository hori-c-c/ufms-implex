const { quickSort } = require("./quick")



const methods = { //const with all methods to find the k smallest value
    'QuickSort': [(array, k) => { return quickSort(array, 0, array.length - 1, k)}],
    'PrQueue': [],
    'RSelect': [],
    'Select': []
}


module.exports = { methods }