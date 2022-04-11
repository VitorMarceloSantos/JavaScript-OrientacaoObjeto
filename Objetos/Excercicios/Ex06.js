//Crie um objeto que tenha caracteristicas de um caminhão e coloque em propriedades distintas. Com destructuring coloque essas propriedades em variáveis separadas.

class Caminhao{
    constructor(cor, cacamba, eixos){
        this.cor = cor, 
        this.cacamba = cacamba,
        this.eixos = eixos
    }
    get mostrarCor(){
        return this.cor
    }
    get mostrarCacamba(){
        return this.cacamba
    }
    get mostrarEixos(){
        return this.eixos
    }
    set mudarCor(value){
        this.cor = value
    }
    set mudarCacamba(value){
        this.cacamba = value
    }
    set mudarEixos(value){
        this.eixos = value
    }
}

let ford = new Caminhao("Azul", true, 4);

let {cor,cacamba,eixos} = ford; //destructuring

console.log(cor)
console.log(cacamba)
console.log(eixos)
