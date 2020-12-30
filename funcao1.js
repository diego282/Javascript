// função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // vai da undefinet pois so passou um parametro
imprimirSoma(2, 10, 4, 7, 9) // vai pegar so os 2 primeiro parametro da função
imprimirSoma(2, 3)

// função com retorno

function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())