/*Verificando propriedades do prototype
 - Pode verificar se há determinada propriedade dentro do prototype, utilizando: hasOwnProperty("nome") ;
 */

 class Pessoa{
     constructor(nome){
        this.nome = nome;
     }
 }
 Pessoa.prototype.nome = "estava sobrescrito";

 let pessoa = new Pessoa("Vitor");

 console.log(pessoa.hasOwnProperty("nome")); //verifica se há a propriedade nade dentro do objeto
 console.log(pessoa.constructor.prototype.hasOwnProperty("nome"));//verifica se há a propriedade nade dentro do prototype