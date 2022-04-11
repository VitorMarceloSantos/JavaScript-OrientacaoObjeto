/*Array
 - O objeto pai de todos os arrays. Pode instanciar um array com new. Possui propriedades e metodos. OBS: o array é um objeto.
 - Ao criar um Array qualquer(Exemplo: let frutas = ["maça", "laranja", "uva"]) ele possui um Array pai(prototype array) e todos os arrays(inclusive o array) são filhos do Object(prototype)  -> Arvóre: Object(prototype) -> Array(pai - os metdodos do arrays estão nesse nível) -> demais arrays*/

 let a = new Array(1,2,3);
 a[3] = 4;

 a.toString();
 console.log(Array instanceof Object); //O Object(prototype) é pai de todos os arrays.

 /* Metodos do Array(pai - prototype): todos os arrays podem utilizar
  - length: indica o número de itens no array.
  - push: adiciona na ultima posiçao, unpush: retira na utilma posição
  - shift: adiciona na primeira posição, unshift: retira na primeira posição
  - pop, join ... 
  - ESSES METODOS NÃO ESTÃO DISPONIVEIS PARA O OBJECT(PROTOTYPE)*/