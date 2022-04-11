/*Destructuring */
let carro = {
    portas: 4, 
    aro: 20, 
    banco: "couro"
}

let {portas, aro, banco} = carro //Cada um receberá o valor correspondente    //!!!  IMPORTANTE: QUANDO AS VARIÁVEIS POSSUEM NOMES IGUAIS DO OBJETO, UTILIZA AS CHAVES {}

console.log(carro.portas)
console.log(carro.aro)
console.log(carro.banco)

//Alterando o valor de propriedades já existentes

carro.aro = 18;
carro.banco = "tecido";

({aro, banco} = carro) //Alterando o valor das propriedades do objeto carro

console.log(carro.aro)
console.log(carro.banco)

//Pode ser utilizado com Array
let arr = [1, 2, 3, 4];             //!!!  IMPORTANTE: QUANDO AS VARIÁVEIS POSSUEM NOMES DIFERENTES DO OBJETO, UTILIZA OS COLCHETES []

let [num1, num2, num3, num4] = arr;

console.log(num1,num2,num3,num4)

//Rest operator: não sabemos quantos argumentos virão para o destructuring
let = [a, ...b] = [1, 2, 3, 4, 5, 6, 7, 8] // a variável b armazeu o restante como um array

console.log(a,b)
