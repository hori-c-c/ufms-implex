function mergeSort(array, p, r) {
    if(p < r) {
        const q = Math.floor((p + r)/2)
        mergeSort(array, p, q)
        mergeSort(array, q+1, r)
        merge(array, p, q, r)
    }

    return array
}

function merge(array, p, q, r) {
    const n1 = q - p + 1
    const n2 = r - q
    const L = []
    const R = []

    for(let i = 1; i <= n1; i++)
        L.push(array[p + i - 1])

    for(let j = 1; j <= n2; j++)
        R.push(array[q + j])

    L.push(70000)
    R.push(70000)
    let i = 0
    let j = 0

    for(let k = p; k <= r; k++) {
        if(L[i] <= R[j]) {
            array[k] = L[i]
            i++
        }
        else {
            array[k] = R[j]
            j++
        }
    }
}

module.exports = { mergeSort }