/*Classes Anônimas
 -  */

 let tenis = class{
    constructor(modelo, cor){
        this.modelo = modelo,
        this.cor = cor
    }
    get imprimirModelo(){
        return this.modelo
    }
}

let allstar = tenis("AllStar", "preto");

allstar.imprimirModelo();
console.log(allstar.modelo);
console.log(allstar.cor);



