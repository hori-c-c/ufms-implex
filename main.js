const { createDensityArray, createPriceArray, formatText } = require('./utils')
const fs = require('fs')
const path = require('path')
const { barCut } = require('./algorithms/dynamicProgramming')
const { greedy } = require('./algorithms/greedyMethod')

const arguments = process.argv
const inicialLength = parseInt(arguments[2]) || 1000
const finalLength = parseInt(arguments[3]) || 7000
const spt = parseInt(arguments[4]) || 1000
const resultsTime = {
    'vDP': {},
    'tDP': {},
    'vGreedy': {},
    'tGreedy': {},
    'percentage': {}
}
let howManyTests = 0

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