/*
 - Operador instanceof
 - Uma maneira de saber de qual instância(pai) vem algum objeto
 
*/

class Carro{
    constructor(cor, modelo){
        this.cor = cor,
        this.modelo = modelo
    }
    acelar(){
        console.log("O carro acelerou");
    }
    frear(){
        console.log("O carro parou.")
    }
    get mostrarCor(){
        return this.cor
    }
    get mostarModelo(){
        return this.modelo
    }
    set alterarCor(value){
        return this.cor = value;
    }
    set alterarModelo(value){
        return this.caor = value;
    }

}

let mercedes = new Carro("preto", "mercedes")
console.log(mercedes instanceof Carro)