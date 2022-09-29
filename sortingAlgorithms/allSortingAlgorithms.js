const { bubbleSort, selectionSort, insertionSort } = require('./elementaryAlgorithms')
const { heapSort } = require('./efficientAlgorithms/heap')
const { mergeSort } = require('./efficientAlgorithms/merge')
const { quickSort } = require('./efficientAlgorithms/quick')
const { countingSort, radixSort, bucketSort } = require('./linearTimeAlgorithms')


const sortingAlgorithms = {
    'Bubble': [(array) => { return bubbleSort(array) }],
    'Selection': [(array) => { return selectionSort(array) }],
    'Insertion': [(array) => { return insertionSort(array) }],
    'Merge': [(array) => { return mergeSort(array, 0, array.length - 1) }],
    'Heap': [(array) => { return heapSort(array) }],
    'Quick': [(array) => { return quickSort(array, 0, array.length - 1) }],
    'Counting': [(array, higherNumber) => { return countingSort(array, higherNumber) }],
    'Radix': [(array, higherNumber) => { return radixSort(array, higherNumber) }],
    'Bucket': [(array) => { return bucketSort(array) }],
}

module.exports = { sortingAlgorithms }