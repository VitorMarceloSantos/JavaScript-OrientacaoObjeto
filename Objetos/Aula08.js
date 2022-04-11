/*
 - Copiando Propriedades: os objetos herdam métodos do objeto pai Object, e podemos utiliza-los. Basta utilizar o método assign.
*/

let robo1 = {
    arma: "lança granada", 
    utilizarArma(){
        console.log("Arma utilizada.")
    }
}
let robo2 = { //criando o objeto que vai receber a cópia

}
Object.assign(robo2, robo1) //o objeto que irá receber bem em primeiro, e o objeto que vai passar vai em segundo

console.log(robo2)
robo2.utilizarArma()