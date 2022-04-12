/*Subclasses
 - Uma forma de criar herança com as classes.
 - Utilizando a palavra extends, uma classe herda as propriedades de outra.
  */

 class Animal{
    constructor(nome, raca){
        this.nome = nome,
        this.raca = raca
    }
 }
 class Cachorro extends Animal{
    constructor(nome, raca, cor){
        super(nome, raca); //São as propriedades da classe Animal
        this.cor = cor
    }
    latir(){
        console.log("Au au"); //Criando um método no objeto Cachorro, que tem todas as propriedades do objeto Animal
    }
 }

let kiko = new Cachorro("Kiko", "Pastor Alemão", "Caramelo"); //Deve passar os parâmetros seguindo a sequência da classe em que está herdando as propriedades e logo após, passar os parâmetros da classe Cachorro

console.log(kiko); //A propriedade nome foi herada do objeto Animal
kiko.latir();