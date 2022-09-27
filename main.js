const { sortingAlgorithms } = require('./sortingAlgorithms/allSortingAlgorithms')
const { randomTest } = require('./testsCase/random')
const { reverseTest } = require('./testsCase/reverse')
const { sortedTest } = require('./testsCase/sorted')
const { nearlySortedTest } = require('./testsCase/nearlySorted')
const { formatText } = require('./utils')
const fs = require('fs')
const path = require('path')

const arguments = process.argv
const inc = parseInt(arguments[2]) || 1000
const fim = parseInt(arguments[3]) || 20000
const spt = parseInt(arguments[4]) || 1000
const rpt = parseInt(arguments[5]) || 10
const resultsTime = {
    'RANDOM': {},
    'REVERSE': {},
    'SORTED': {},
    'NEARLY SORTED': {}
}
let howManyTests = 0

for(let howManyPositions = inc; howManyPositions <= fim; howManyPositions += spt) {
    randomTest(howManyPositions, resultsTime, rpt, sortingAlgorithms)
    reverseTest(howManyPositions, resultsTime, sortingAlgorithms)
    sortedTest(howManyPositions, resultsTime, sortingAlgorithms)
    nearlySortedTest(howManyPositions, resultsTime, sortingAlgorithms)
    howManyTests ++
}

const dir = path.join(__dirname, 'out')
const filePath = dir + '/result.txt'

if(!fs.existsSync(dir))
    fs.mkdirSync(dir)

fs.writeFileSync(filePath, formatText(resultsTime, howManyTests), 'utf-8', (error) => {
    console.log('Houve um erro ao tentar criar o arquivo de saída!')
    console.log(error)
})