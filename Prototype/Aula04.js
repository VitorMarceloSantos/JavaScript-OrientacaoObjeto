/* Checar se um objeto é prototype de algum outro objeto:
 - com o método isPrototypeOf, conseguimos checar se um objeto é prototype de outro.
 */

    let caracteristicas = {
        maos: 2,
        pes: 2,
        pernas: 2
    }

    class Humano{
        constructor(name){
            this.name = name
        }
    }

    Humano.prototype = caracteristicas;

    let joao = new Humano("João");

    console.log(caracteristicas.isPrototypeOf(joao)); //False, pois caracteristica é prototype da class Humano