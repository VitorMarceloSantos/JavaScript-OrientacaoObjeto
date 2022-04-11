/* Built Objects
 - Objetos que são criados pelos desenvolvedores da liguagem, que originam string, arrays e objetos.
 - Estes objetos criados por nós herdam suas propriedades e metodos, um aspecto de herança. Porém no JS é conhecido pelo conceito de Prototype, que todo objeto tem um pai.
*/

/* Object:
 - o pai de todos os objetos do JS
 - possui propriedades e métodos, mesmo o objeto estando vazio. Pode ser criado via new.
  */
 let o = new Object(); // é o mesmo que let o = {};
 console.log(o.toString());//representacao do objeto em string
 console.log(o.valueOf());//retorna o proprio objeto