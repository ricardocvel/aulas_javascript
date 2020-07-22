




function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

/*

Uma expressão arrow function possui uma sintaxe mais curta quando comparada 
a uma expressão de função (function expression) e não tem seu próprio this, 
arguments, super ou new.target. 
Estas expressões de funções são melhor aplicadas para funções que não sejam 
métodos, e elas não podem ser usadas como construtoras (constructors).

*/