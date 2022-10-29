const { createDensityArray, createPriceArray, formatText } = require('./utils')
const fs = require('fs')
const path = require('path')
const { barCut } = require('./algorithms/dynamicProgramming')
const { greedy } = require('./algorithms/greedyMethod')

const arguments = process.argv
const inicialLength = parseInt(arguments[2]) || 10
const finalLength = parseInt(arguments[3]) || 100
const spt = parseInt(arguments[4]) || 10
const resultsTime = {
    'Entrada': {},
    'vDP': {},
    'tDP': {},
    'vGreedy': {},
    'tGreedy': {},
    'percentage': {}
}
let howManyTests = 0
// for (let number = 1; number < 11; number ++) {
//     barCut(number, [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], resultsTime)
//     const test = createDensityArray([0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30])
//     greedy(number, test, [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30], resultsTime)
// }
for(let barLength = inicialLength; barLength <= finalLength; barLength += spt) {
    const priceArray = createPriceArray(barLength)
    const densityArray = createDensityArray(priceArray)
    barCut(barLength, priceArray, resultsTime)
    greedy(barLength, densityArray, priceArray, resultsTime)
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