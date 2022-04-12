/* Classes
- As classes na verdade são funções, ou seja, muda a forma de escrevermos mas o JS utiliza as mesmas técnicas que utilizamos antes.
- As propriedades devem ficar em um método especial chamado constructor*/

class Tenis{
    constructor(modelo, cor){
        this.modelo = modelo, 
        this.cor = cor
    }
}

let nike = new Tenis("AirJordan", "branca");

console.log(nike.modelo);
console.log(nike.cor);