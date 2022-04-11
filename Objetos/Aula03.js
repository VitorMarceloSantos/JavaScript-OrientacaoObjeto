/* Utilizando a palavra THIS
 - a palavra reservada this detro de um objeto, vai ser referir a própria instância.
 - Podemos utilizar para resgatar as propriedades em um metodo.

 */
let pessoa = {
    nome: "vitor",
    idade: 30, //adicionando novo eleemento no objeto pessoa
    falar: () => {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`) //o this se refere a propriedade idade que está dentro do objeto pessoa.
    },
    imprimir:() => { return this.nome}
}
console.log(pessoa.imprimir())
pessoa.falar();
