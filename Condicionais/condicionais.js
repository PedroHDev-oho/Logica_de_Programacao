//IF, ELSE, ELSE IF são estruturas condicionais 
//De maneira resumida elas só rodam um codigo caso uma condição seja verdadeira

/*let ligado = false

if(ligado)
    {
        console.log("A alavanca está ligada");
    }
*/
let temOvos = true
let itensCompra = ""
if(temOvos)
{
    itensCompra = "Leite"
} 
if(itensCompra === "Leite" && temOvos == true)
{
    console.log("Consigo fazer um bolo gostosin")
}


//Switch case é uma opção alternativa para o IF
//Trabalha melhor quando temos muitas situaçoes e opçoes 
//Onde cabe um IF, cabe um Switch case 

//switch (variavel){Scopo}
let fruta = ""
switch(fruta)
{
    

    case "laranja":
    case "maça":
    case "abacaxi":
        console.log("Vou fazer um Suco")
    break
    case "banana":
    case "morango":
        console.log("Vou fazer uma vitamina")
    break
    default: console.log("Não irei fazer nada")
}

// Estrutura do FOR 
for(let contador = 0; contador <=5; contador++)
{
    console.log(contador)
}

// Estrutura do while
let conta = 0
while(conta <= 3)
{
    console.log(conta)
    conta++
}

