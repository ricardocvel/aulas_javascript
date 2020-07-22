
// Factory simples


function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

let patos = criarPessoa

patos.nome = 'cahorro'
patos.sobrenome ='cadela'

console.log(patos)