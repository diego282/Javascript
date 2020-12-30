const nome = 'Rebecca'
const concatenação = 'Olá' + nome + '!'
const template = ` 
Olá 
${nome}!`
console.log(concatenação, template)

// expression ...
console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUperCase()
console.log(`Ei... ${up('cuidado')}!`)