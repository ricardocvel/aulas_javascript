

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
 
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)


/*

Uma expressão arrow function possui uma sintaxe mais curta quando comparada 
a uma expressão de função (function expression) e não tem seu próprio this, 
arguments, super ou new.target. 
Estas expressões de funções são melhor aplicadas para funções que não sejam 
métodos, e elas não podem ser usadas como construtoras (constructors).

*/