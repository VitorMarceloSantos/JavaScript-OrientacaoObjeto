/*Métodos Estáticos
 - Métodos que só funcionam caso você utilize o nome da classe.
 - Não cria um novo objeto para usar eles.
 - Utilizado muito como um helper. */

 class Calc{
    static soma(a, b){
        return a + b;
    }
 }

console.log(Calc.soma(2,5));
