function quickSort(array, p, r, k) {
    if(p < r) {
        const q = randomizedPartition(array, p, r)
        quickSort(array, p, q - 1, k)
        quickSort(array, q + 1, r, k)
    }

    return array[k-1]
}

function randomizedPartition(array, p, r) {
    const i = Math.floor(Math.random() * (r - p) + p)
    const aux = array[i]
    array[i] = array[r]
    array[r] = aux
    return partition(array, p, r)
}

function partition(array, p, r, pivot = -1) {
    const x = getPivot(array, pivot, r)
    let i = p - 1

    for(let j = p; j <= r - 1; j++) {
        if(array[j] <= x) {
            i ++
            const aux = array[i]
            array[i] = array[j]
            array[j] = aux
        }
    }

    const aux = array[i+1]
    array[i+1] = array[r]
    array[r] = aux

    return i + 1
}

function getPivot(array, pivot, r) {
    if(pivot != -1) {
        const pivotIndex = array.findIndex(element => element == pivot)
        const aux = array[pivotIndex]
        array[pivotIndex] = array[r]
        array[r] = aux
    }
    
    return array[r]
}

module.exports = { partition, quickSort, randomizedPartition }