/*
 - Podemos criar propriedades com variáveis ou retorno de funções.
*/

let tipo = "tipo_de_";

let carro = {
    [tipo + "carro"]: "SUV"
}
let barco = {
    [tipo + "barco"]: "Iate"
}

console.log(carro.tipo_de_carro)
console.log(barco.tipo_de_barco)