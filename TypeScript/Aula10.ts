/* Classes: utilizam a ideia da versao ES6 do JS e não a herença do protype. */

class Carro{
    marca: string;
    aro: number;
    constructor(marca: string, aro: number){
        this.marca = marca, 
        this.aro = aro
    }
    vericarAro(){
        return `O aro do carro é: ${this.aro}.`
    }
}

let ferrari = new Carro("Ferrari", 20);
console.log(ferrari);