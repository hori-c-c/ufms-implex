const { Vertice } = require('./src/vertice')

/**
 * @param {Array} singlyLinkedList A lista de adjacências do caso de teste;
 * @returns {Number} A quantidade de arestas criadas.
 */
 function addEdges(singlyLinkedList) {
    let edgeCounter = 0

    for (let i = 0; i < singlyLinkedList.length - 1; i++) {
        for (let j = i + 1; j < singlyLinkedList.length; j++) {
            if (coin()) {
                const vertice = singlyLinkedList[i]
                const vertice2 = singlyLinkedList[j]
                vertice.addVertice(vertice2.id)
                vertice2.addVertice(vertice.id)
                edgeCounter ++
            }
        }
    }

    return edgeCounter
}

/**
 * @returns {Boolean} Verdadeiro caso o número gerado aleatóriamente seja menor que 0.002.
 */
function coin() {
    return Math.random() < 0.002
}

/**
 * @param {Number} howManyVertices A quantidade de vértices;
 * @returns {Array} Uma lista encadeada simples.
 */
 function createSinglyLinkedList(howManyVertices) {
    const singlyLinkedList = []
    
    for(let verticeId = 0; verticeId < howManyVertices; verticeId++)
        singlyLinkedList.push(new Vertice(verticeId))

    return singlyLinkedList
}

/**
 * @param {Object} object Object que contem todos os tempos dos casos de teste;
 * @param {Number} howManyTests A quantidade de casos de teste;
 * @returns {String} Uma string formata como tabela.
 */
 function formatText(object, howManyTests) {
    let result = 'Probabilidade de sortear uma aresta: 0.002\n\n'
    result += 'n          '

    for(const key in object)
        result += `${key}` + `${' '.repeat(10)}`

    result += '\n' + `${'-'.repeat(42)}` + '\n'
    
    for(let i = 0; i < howManyTests; i++) {
        for(const key in object) {
            const value = Object.keys(object[key])[i]
            const testNumber = `${parseInt(value) + 1}`
            
            if(key == 'V')
                result += '\n' + `${testNumber}` + `${' '.repeat(11 - testNumber.length)}` 

            result += `${object[key][value]}` + `${' '.repeat(key.length + 10 - `${object[key][value]}`.length)}`
        }
    }

    return result
}

/**
 * @param {Boolean} isBipartite variável que diz se o grafo é ou não é bipartido;
 * @param {Number} numberOfEdges A quantidade de arestas que esse caso de teste possui;
 * @param {Number} numberOfVertices A quantidade de vértices que esse caso de teste possui;
 * @param {Object} result objeto que guarda todas as informações de cada caso de teste;
 * @return {void} A função somente atualiza o parâmetro result.
 */
function updateResult(isBipartite, numberOfEdges, numberOfVertices, result) {
    result['V'].push(numberOfVertices)
    result['E'].push(numberOfEdges)
    result['Bipartido'].push(isBipartite)
}

module.exports = { addEdges, createSinglyLinkedList, formatText, updateResult }