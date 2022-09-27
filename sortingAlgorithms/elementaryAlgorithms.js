function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }

    return array
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        const current = array[i]
        let j = i-1 

        while (j > -1 && current < array[j]) {
            array[j+1] = array[j]
            j--
        }

        array[j+1] = current
    }

    return array
}

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowest = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest])
                lowest = j
        }
        if (lowest !== i) {
            const aux = array[i]
            array[i] = array[lowest]
            array[lowest] = aux
        }
    }
    return array
}

module.exports = { bubbleSort, selectionSort, insertionSort }