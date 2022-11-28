function bfs(inicialVertice, isBipartite, singlyLinkedList) {
    inicialVertice.color = 'gray'
    inicialVertice.distance = 0
    
    const queue = []
    queue.push(inicialVertice)

    while (queue.length > 0) {
        const verticeRemoved = queue.shift()
        let vertice = verticeRemoved.next

        while (vertice != null) {
            if (singlyLinkedList[vertice.id].color == 'white' && vertice.id != verticeRemoved.dad) {
                vertice.color = 'gray'
                vertice.distance = verticeRemoved.distance + 1
                vertice.dad = verticeRemoved.id

                verticeAtLinkedList = singlyLinkedList[vertice.id]
                verticeAtLinkedList.color = 'gray'
                verticeAtLinkedList.distance = verticeRemoved.distance + 1
                verticeAtLinkedList.dad = verticeRemoved.id
                
                queue.push(verticeAtLinkedList)
            }
            else if (singlyLinkedList[vertice.id].color == 'gray' && singlyLinkedList[vertice.id].distance == verticeRemoved.distance)
                return false
            
            vertice = vertice.next
        }

        verticeRemoved.color = 'black'
    }

    return isBipartite
}

module.exports = { bfs }