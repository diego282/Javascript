// par nome/valor
const saudacao = 'Opá' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Diego',
    idade: 19,
    peso: 86,
    endereço: {
        lougradoro: 'Rua Jasmin',
        número: 75
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)