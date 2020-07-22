let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param


console.log(ola('af'))


/*

Uma expressão arrow function possui uma sintaxe mais curta quando comparada 
a uma expressão de função (function expression) e não tem seu próprio this, 
arguments, super ou new.target. 
Estas expressões de funções são melhor aplicadas para funções que não sejam 
métodos, e elas não podem ser usadas como construtoras (constructors).

*/