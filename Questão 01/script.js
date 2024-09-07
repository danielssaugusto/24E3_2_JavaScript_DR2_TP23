// Operadores de Igualdade/Diferença em JavaScript

/*
== (Igualdade fraca): Compara o valor, mas pode realizar conversões de tipo.
=== (Igualdade estrita): Compara tanto o valor quanto o tipo.
*/

// Exemplo 1: Comparando um número com uma string com o mesmo valor
let num = 5;
let str = "5";

console.log(num == str); // Resultado: true (os valores são iguais, mas os tipos são diferentes)
console.log(num === str); // Resultado: false (os valores são iguais, mas os tipos são diferentes)

let x = 5;
let y = "5";

console.log(x != y); // Reultado: false (os valores não são diferentes, houve uma conversão de tipo implícita)
console.log(x !== y); // Resultado: true (os valores são diferentes, não houve uma conversão de tipo implícita)

// Exemplo 2: Comparando um número com undefined
let a;
console.log(a == undefined); // Resultado: true (ambos são considerados "falsy")
console.log(a === undefined); // Resultado: true (ambos são do mesmo tipo)

/*
Explicação:
 - O operador == realiza uma conversão de tipo antes de comparar os valores. 
   Por exemplo, a string "5" é convertida para o número 5 antes da comparação.
 - O operador === não realiza conversão de tipo. Ele compara tanto o valor quanto o tipo dos operandos.
   Se os tipos forem diferentes, o resultado será sempre false.
*/

// Recomenda-se usar o operador === (igualdade estrita) na maioria dos casos, 
// pois ele evita comportamentos inesperados causados por conversões de tipo implícitas.