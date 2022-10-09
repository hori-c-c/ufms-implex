function extractMin(array, k) {
    let heapSize = array.length - 1
    buildMinHeap(array, heapSize)

    if(heapSize < 0)
        console.log('heap underflow')
    else {
        for(let i = 1; i < k; i++) {
            lower = array[0]
            array[0] = array[heapSize]
            heapSize --
            down(array, 0, heapSize)
        }

        return array[0]
    }
}

function buildMinHeap(array, heapSize) {
    for(let i = Math.floor(heapSize/2); i >= 0; i--)
        down(array, i, heapSize)
}

function down(array, position, heapSize) {
    const leftSon = getLeftSon(position)
    const rightSon = getRightSon(position)
    let lower = position

    if(leftSon <= heapSize && array[leftSon] < array[position])
        lower = leftSon

    if(rightSon <= heapSize && array[rightSon] < array[lower])
        lower = rightSon
    
    if(lower != position) {
        const aux = array[position]
        array[position] = array[lower]
        array[lower] = aux
        down(array, lower, heapSize)
    }
}

function getLeftSon(position) {
    return (2 * position) + 1
}


function getRightSon(position) {
    return (2 * position) + 2
}

module.exports = { extractMin }