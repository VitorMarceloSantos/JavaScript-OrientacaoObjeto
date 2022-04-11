/*
 - Comparando Objetos: teremos basicamente o mesmo resultado de ===(igualdade estrita)
 - Salvo para NaN e +0 com -0(que nesse método são considerados como iguais.)
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

console.log(Object.is(robo1, robo2)) //faz a verificação se o objeto robo1 é igual ao robo2 -> vai retornar False  !!APESAR DE ESTAREM IDENTICOS ELES SÃO OBJETOS DISTINTOS

let robo3 = robo1
console.log(Object.is(robo1, robo3)) // -> vai retornar true  !!UM OBJETO É REFERENCIA DO OUTRO OBJETO