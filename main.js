const { addEdges, createSinglyLinkedList, formatText, updateResult } = require('./utils')
const { bfs } = require('./src/bfs')
const fs = require('fs')
const path = require('path')


const arguments = process.argv
const inicialLength = parseInt(arguments[2]) || 10
const finalLength = parseInt(arguments[3]) || 500
const spt = parseInt(arguments[4]) || 10
const result = {
    'V': [],
    'E': [],
    'Bipartido': []
}
let howManyTests = 0

for(let numberOfVertices = inicialLength; numberOfVertices <= finalLength; numberOfVertices += spt) {
    let isBipartite = true
    const singlyLinkedList = createSinglyLinkedList(numberOfVertices)
    const numberOfEdges = addEdges(singlyLinkedList)

    for (const vertice of singlyLinkedList)
        if (vertice.color == 'white')
            isBipartite = bfs(vertice, isBipartite, singlyLinkedList)
    
    updateResult(isBipartite, numberOfEdges, numberOfVertices, result)
    howManyTests ++
}

const dir = path.join(__dirname, 'out')
const filePath = dir + '/result.txt'

if(!fs.existsSync(dir))
    fs.mkdirSync(dir)

fs.writeFileSync(filePath, formatText(result, howManyTests), 'utf-8', (error) => {
    console.log('Houve um erro ao tentar criar o arquivo de saída!')
    console.log(error)
})