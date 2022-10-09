const { randomizedPartition } = require('./quick')


function randomizedSelect(array, p, r, k) {
    if (p == r)
        return array[p]

    const q = randomizedPartition(array, p, r)
    const i = q - p + 1

    if(k == i)
        return array[q]
    else if(k < i)
        return randomizedSelect(array, p, q - 1, k)
    else
        return randomizedSelect(array, q + 1, r, k - i)
}


module.exports = { randomizedSelect }