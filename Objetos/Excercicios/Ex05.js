//Crie um objeto inimigo, com as propriedades nome e vivo(que é um boolean). O metodo atirar shuriken do exercicio passado deve 'matar' o inimigo setando a propriedade do inimigo como false.

class Ninja{
    constructor(nome){
        this.nome = nome
    }
    
    atirarShuriken(nomeInimigo){
        if(shuriken > 0){
            console.log(`O ninja ${this.nome} atirou a shuriken.`);
            shuriken -=1;
            nomeInimigo.vivo = true //muda o vivo do objeto Inimigo para true
            console.log(`O inimigo ${nomeInimigo.nome} foi morto pelo ninja ${this.nome}.`);
        }else{
            console.log("Não possui mais shurikens. Por favor recarregar.");
        }
    }
    get imprimirNome(){
        return this.nome
    }
    set alterarNome(value){
        this.nome = value
    }
}

class Inimigo{
    constructor(nome){
        this.nome = nome,
        this.vivo = false
    }
    get mostarNome(){
        return this.nome
    }
    set mudarNome(value){
        this.nome = value
    }
    get mostrarVivo(){
        return this.vivo
    }
    set mudarVivo(value){
        this.vivo = value
    }
}

var shuriken = 5;


let jiraya = new Ninja("Jiraya");

let kaguia = new Inimigo("Kaguia");

jiraya.atirarShuriken(kaguia); //passa o inimigo como parâmetro

console.log(kaguia.mostrarVivo) //mostrar a propriedade do objeto

