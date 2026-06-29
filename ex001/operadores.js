//Operadoes são:
/* 
Operadores aritiméticos 
    + Soma 
    - Subtração
    * Multiplicação 
    / Divisão
    % Resto da divisão 


Operadores relacionais
    == Igual a
    ?= Diferente de 
     > Maior que 
     < Menor que 
    >= Maior ou igual
    <= Menor ou igual

Operadores logicos 
    && AND Logico 
    || OR  Logico 
    !! NOT Logico

    
*/

//Soma
let Saldo = 350

Saldo = Saldo - 100

console.log("O resultado é: " + Saldo);

//Subtração 
let codProduto = 1087
let codExato = codProduto - 1000

console.log("O codigo do produto é: " + codExato)

//Multiplicação 
let valorProduto = 100
let taxaProduto = valorProduto * 0.5 
let totalProduto = valorProduto + taxaProduto

console.log("O total a pagar pelo produto é: " + totalProduto + 
    " Onde o valor do produto é: " + valorProduto + 
    " e a taxa fica em: " + taxaProduto)

//Divisão 
let totalMercado = 300
let pessoasDividir = 5
let cadaPessoaPaga = totalMercado / pessoasDividir

console.log("Cada pessoa paga o valor de: " + cadaPessoaPaga)

//Operadores de comparação 
// == e ===

//== é para conparar o valor independente do formarto
//=== é para comparar valor E formato 
//!== é para saber se o valor é diferente 
let numero = "1"
console.log(numero === 1)

console.log(numero !== 3)

//Operadores Logicos 
//AND onde as duas situaçoes precisam ser verdadeiras
//OR onde uma das duas situaçoes precisam ser verdadeiras
//NOT onde uma situação tem que ser diferente da logica 

let idade = 18
let visto = true

console.log( (idade >= 18) && (visto === true));

let tempo = "sol"

let item = "guarda chuva"

let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair? " + podeSair)