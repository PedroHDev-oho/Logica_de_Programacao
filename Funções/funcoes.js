//Em JavaScript, uma função é um bloco de código reutilizável 
// projetado para executar uma tarefa específica. Ela só é executada quando é chamada


//Declarando a função 
function torrar()
{   
    //O que a função faz
    console.log("Torrando um pão")
}
//Chamando a função 
//torrar()

//CUIDADOS na hora de trabalhar com funçoes:
//Não pode começar com numero o nome da sua função 
//Não pode ter espaço no nome da tua função 

//Boas praticas com função são:
//Saber declarar bem o nome da função 
//Fazer com que uma função execute somente uma coisa 

//Saber lidar com funçoes PAI
//EX:

function cafe()
{
    console.log("O Café está pronto")
}

function cafeDaManha()
{
    //Chamando as funçoes dentro de uma função 
    cafe()
    torrar()

}

//Chamando a função PAI o que vai fazer o resultado das duas funçoes 
cafeDaManha()
