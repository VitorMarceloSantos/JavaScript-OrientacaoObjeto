//Crie um objeto pessoa que tenha como propriedades: nome. e um metodo que exibe o nome

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    get imprimirNome(){
        return this.nome
    }
    set modificarNome(value){
        this.nome = value
    }
}
let usuario1 = new Pessoa("Vitor");
console.log(usuario1.imprimirNome)