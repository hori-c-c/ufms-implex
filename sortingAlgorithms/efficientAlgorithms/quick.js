function quickSort(array, p, r) {
    if(p < r) {
        const q = randomizedPartition(array, p, r)
        // const q = partition(array, p, r)
        quickSort(array, p, q - 1)
        quickSort(array, q + 1, r)
    }

    return array
}

function randomizedPartition(array, p, r) {
    const i = Math.floor(Math.random() * (r - p) + p)
    const aux = array[i]
    array[i] = array[r]
    array[r] = aux
    return partition(array, p, r)
}

function partition(array, p, r) {
    const x = array[r]
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

module.exports = { quickSort }