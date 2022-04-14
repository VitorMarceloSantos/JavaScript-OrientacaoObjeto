/* Interface: é a possibilidade de criar uma função que recebe argumentos específicos e os utiliza conforme usa lógica. */

function imprimirNome(obj: {nome: string}){
    console.log(obj.nome);
}

let pessoa = {nome: "Pedro", idade: 29};
imprimirNome(pessoa);