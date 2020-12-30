// armazenando uma função em uma variavel ou constante

const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(1, 3)

// armazene uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito

const subtracao = (a, b) => a - b
console.log(substracao(2, 3))