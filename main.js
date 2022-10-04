const { methods } = require('./methodsFindTheKSmallestValue/methods')
const { randomTest } = require('./testsCase/random')
const { reverseTest } = require('./testsCase/reverse')
const { sortedTest } = require('./testsCase/sorted')
const { nearlySortedTest } = require('./testsCase/nearlySorted')
const { createRandomArrays, formatText } = require('./utils')
const fs = require('fs')
const path = require('path')

const arguments = process.argv
const inc = parseInt(arguments[2]) || 10000
const fim = parseInt(arguments[3]) || 20000
const spt = parseInt(arguments[4]) || 1000
const rpt = parseInt(arguments[5]) || 10
const maxRandomNumber = parseInt(arguments[6]) || 65535
let howManyTests = 0

const resultsTime = {
    'RANDOM': {},
    'REVERSE': {},
    'SORTED': {},
    'NEARLY SORTED': {}
}


for(let howManyPositions = inc; howManyPositions <= fim; howManyPositions += spt) {
    const testArrays = createRandomArrays(howManyPositions, maxRandomNumber, rpt)
    randomTest(howManyPositions, methods, resultsTime, rpt, testArrays)
    reverseTest(howManyPositions, methods, resultsTime, testArrays)
    sortedTest(howManyPositions, methods, resultsTime, testArrays)
    nearlySortedTest(howManyPositions, methods, resultsTime, testArrays)
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