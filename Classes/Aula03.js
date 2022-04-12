/*Constructor
 - É utilizado apenas para inicializar valores de propriedades.
 - Só poderá utilizar um constructor por classe.
 - O constructor pode chamar a classe pai por uma instrução super(ajuda na herança) 
 */

 /* Prototype methods 
  - São metodos que já existem na class, por exemplo os getters e setters.
  - Get: mostrar o valor da variável
  - Set: alterar o valor da variável. */

class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome, 
        this.idade = idade, 
        this.sexo = sexo
    }
    get mostrarNome(){
        return this.nome
    }
    get mostrarIdade(){
        return this.idade
    }
    get mostrarSexo(){
        return this.sexo
    }
    set mudarNome(value){
        this.nome = value
    }
    set mudarIdade(value){
        this.idade = value
    }
    set mudarSexo(value){
        this.sexo = value
    }
}

let rafaela = new Pessoa("Rafaela", 27, "Feminino");

console.log(rafaela);
rafaela.mudarIdade = 30;
console.log(rafaela.idade);
rafaela.mudarNome = "Caroline";
console.log(rafaela.nome);

