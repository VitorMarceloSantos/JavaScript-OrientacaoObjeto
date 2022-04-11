//Estabelecer 5shurikens e cada vez que chamar o metodo ele será subtraido 1, o ninja não pode jogar shurikens quando for 0.
class Ninja{
    constructor(nome){
        this.nome = nome
    }
    
    atirarShuriken(){
        if(shuriken > 0){
            console.log(`O ninja ${this.nome} atirou a shuriken.`);
            shuriken -=1;
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
var shuriken = 5;

let jiraya = new Ninja("Jiraya");
jiraya.atirarShuriken();
jiraya.atirarShuriken();
jiraya.atirarShuriken();
jiraya.atirarShuriken();
jiraya.atirarShuriken();
jiraya.atirarShuriken();