/* Em casos de conflitos entre o objeto e o prototype:
 - A ordem de acesso é: primeiro o objeto e depois o prototype. As propriedades podem coexistir.
 */

 class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
 }

 Pessoa.prototype.idade = 10;

 Pessoa.prototype.cabelo = "Castanho"; //criando uma nova propriedade

 let pedro = new Pessoa("Pedro", 15); //Passando um nova idade, tem como preferencia a idade do objeto

 console.log(pedro.idade);
 console.log(pedro.cabelo);

 pedro.cabelo = "Louro"; //Alterando os valores da propriedade cabelo, prevalece a do objeto

 console.log(pedro.cabelo);
 
 /* Caso ocorra a exclusão de uma propriedade do objeto, como por exemplo a exclusão de pedro.cabelo(Louro - objeto), a propriedade do Pessoa.prototype.cabelo(Castanho - prototype) se tornará a principal.*/

 delete pedro.cabelo; //deletando a propriedade 
 console.log(pedro.cabelo); //pedro.prototype.cabelo - Castanho