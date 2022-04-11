//Crie um objeto ninja, com propriedades: nome; metodos: atirarShuriken

class Ninja{
    constructor(nome){
        this.nome = nome
    }
    atirarShuriken(){
        console.log(`O ninja ${this.nome} atirou a shuriken.`);
    }
    get imprimirNome(){
        return this.nome
    }
    set alterarNome(value){
        this.nome = value
    }
}

let jiraya = new Ninja("Jiraya");
jiraya.atirarShuriken();