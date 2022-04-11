/*Function:
 - O objeto para criar funções, Podemos criar novas funções a partir do new.   
 - Os métodos que podemos utilizar do Function são call e apply. Call: pode pegar métodos emprestados de objetos. Apply: funciona igual ao call, mas todos os parâmetros são transformados em arrays.*/

 let a ={
    nome: "A",
    falar(){
        console.log("Olá sou o método do " +this.name);
    }
 }

 b = {
    name: "B"
 }
 
 a.falar.call(b); //chama o metodo do objeto a, para imprimir o objeto b.