let valor // não inicializada
console.log(valor)

valor = null // aunsencia de valor
console.log(valor)
    // console.log(valor.toString()) // isso da erro pq a variavel ta nula

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
    // delete produto.preco para tira algo so objeto
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)