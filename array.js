const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // quando não tem o indice volta undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({ id: 3 }, false, null, "teste") // push: adiciona elementos no array
console.log(valores)

console.log(valores.pop()) // pop(): retirar o ultimo valor do array
delete valores[0] // delete: deletar o valor da posição passada
console.log(valores)

console.log(typeof valores)