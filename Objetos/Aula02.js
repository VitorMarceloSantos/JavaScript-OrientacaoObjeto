/*Objetos dentro de Objetos */

let pessoa = {
    nome: "Vitor",
    caracteristicas: {
        olhos: "castanhos",
        cabelo: "preto",
        oculos: true,
        },
    andar(){
        console.log("Andou..")
    }
}

console.log(pessoa)
console.log(pessoa.caracteristicas.olhos) //Acessando as propriedadas do objeto caracteristicas dentro do objeto pessoa
console.log(pessoa.caracteristicas.oculos) //Acessando as propriedadas do objeto caracteristicas dentro do objeto pessoa
pessoa.andar() //chamando o metodo

//Criando propriedades em Objetos já existentes

pessoa.faculdade = "Ciencias Contábeis"; // inserindo novas propriedades no objeto pessoa
pessoa.nomeMae = "Maria Aparecida"; // inserindo novas propriedades no objeto pessoa
pessoa.caracteristicas.tatuagem = false; // inserindo novas propriedades no objeto caracteristicas dentro do objeto pessoa
pessoa.caracteristicas.altura = 180 // inserindo novas propriedades no objeto caracteristicas dentro do objeto pessoa

console.log(pessoa.faculdade);
console.log(pessoa.nomeMae);
console.log(pessoa.caracteristicas.tatuagem);
console.log(pessoa.caracteristicas.altura);

//Deletando uma propriedade
delete pessoa.nome; //deletando a propriedade
delete pessoa.caracteristicas.oculos; //deletando a propriedade
delete pessoa.andar; //deletando o metodo

console.log(pessoa)
