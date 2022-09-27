function heapSort(array) {
    let heapSize = array.length - 1
    buildMaxHeap(array, heapSize)
    for(let i = array.length - 1; i >= 1; i--) {
        const aux = array[0]
        array[0] = array[i]
        array[i] = aux
        heapSize --
        down(array, 0, heapSize)
    }

    return array
}

function buildMaxHeap(array, heapSize) {
    for(let i = Math.floor(heapSize/2); i >= 0; i--)
        down(array, i, heapSize)
}

function down(array, position, heapSize) {
    const leftSon = getLeftSon(position)
    const rightSon = getRightSon(position)
    let higher = position

    if(leftSon <= heapSize && array[leftSon] > array[position])
        higher = leftSon

    if(rightSon <= heapSize && array[rightSon] > array[higher])
        higher = rightSon
    
    if(higher != position) {
        const aux = array[position]
        array[position] = array[higher]
        array[higher] = aux
        down(array, higher, heapSize)
    }
}

function getLeftSon(position) {
    return (2 * position) + 1
}


function getRightSon(position) {
    return (2 * position) + 2
}

module.exports = { heapSort }