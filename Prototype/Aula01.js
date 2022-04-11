/* 
 - JS é uma linguagem baseada em prototype. Todos os objetos herdam propriedades e métodos do seu prototype.
 - A ideia central é que todo o objeto tenha um pai.(ou seja, um prototype)
 - Adicionando propriedaes e métodos atraves do prototype.
*/

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
}
Pessoa.prototype.profissao = "Estudante"; //A class Pessoa pode utilizar, contudo ela não está na class Pessoa, mas sim no prototype da class Pessoa.
Pessoa.prototype.falar = () => {console.log("Olá Mundo!")}

//Após alterar o prototype, todas as instâncias ganham seus novos métodos ou propriedades.

let joao = new Pessoa("João", 15);
console.log(joao); //OBS: não tem profissão, pois está no prototype da class Pessoa, e não na class Pessoa
console.log(joao.profissao); //Agora o Objeto joao está fazendo uso do prototype
joao.falar();