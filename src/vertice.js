class Vertice {
    constructor(id) {
        this.id = id
        this.dad = null
        this.color = 'white'
        this.distance = 700000
        this.next = null
    }

    addVertice(verticeId) {
       if (!this.isVerticeRepeated(verticeId)) {
            let aux = this.next
            const vertice = new Vertice(verticeId)
            vertice.next = aux
            this.next = vertice
       }        
    }

    isVerticeRepeated(verticeId) {
        let repeated = false
        let auxVertice = this

        while (auxVertice.next != null && !repeated) {
            auxVertice = auxVertice.next

            if (auxVertice.id == verticeId)
                repeated = true
        }

        return repeated
    }
}


module.exports = { Vertice }