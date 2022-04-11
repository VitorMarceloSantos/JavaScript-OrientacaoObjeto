/*
- O objeto é dividido em: propriedades(caracteristicas) e métodos(funcionalidades  funções).
- No javaScript podemos criar um objeto abrindo e fechando chaves. O objeto parece com um array de chave e valor. Podemos atribuir o objeto a uma variável.
IMPORTANTE: OBJETOS UTILIZA {}, ARRAY UTILIZA []
*/
//Exemplo:
let carro = { //Objeto - Carro
    portas:4, //Propriedades: caracteristicas
    cor:"Vermelha", 
    compradores: ["Vitor", "Rafaela", "Luis"], //Aceita Array como propriedade
    "porta malas": true, //Quando a propriedade tiver mais de uma palavra deverá colocar ela em aspas ou utilizar o camelcase(portaMalas)
    //Metodos
    acelar(){
        return console.log('Acelerou...')
    },
    parar: () =>{ 
        return console.log("Parando...")
    }
}

console.log(carro.portas)
console.log(carro['cor']) //Pode ser usado as duas formas 
console.log(carro.compradores)

let comprador = carro.compradores[0] //A variavel está recebendo uma propriedade do objeto carro.
console.log(comprador)

console.log(carro["porta malas"])

//Acessando a propriedade atraves de uma váriavel
let el = "portas";

console.log(carro[el]); //utiliza a variavel para acessar a propriedade na variável

//Metodos
carro.acelar();
carro.parar();