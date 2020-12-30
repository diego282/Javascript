const escola = "cod3r"

console.log(escola.charAt(4)) // charAt volta a letra de acordo com a posição
console.log(escola.charAt(5)) // ser nçao tiver a posicao , em javascript não geraria erros
console.log(escola.charCodeAt(3)) // charCodeAt: volta o numero na tabela unicode
console.log(escola.indexOf(3)) // indexOf: volta o indice do paramentro ser existir na palavra

console.log(escola.substring(1)) // substring: volta parte da palavra que deseja
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat('!')) // concat: concatena a string ou valores
console.log('Escola' + escola + '!') // +: concatena a string
console.log(escola.replace(3, 'e')) // replace: muda a posicao dada, pelo valor palavra passado
console.log('Ana,Maria,Pedro'.split(',')) // split: usada para gerar array, ou separar termo atraves do parametro passado