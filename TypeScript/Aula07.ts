/* Any: possibilita inserir uma variável com qualquer tipo de dado. Deve ser utilizado em casos extremamentes necessários, pois vai contra ideia de "tipar" variáveis. */

let aindaNaoSabemos: any;
aindaNaoSabemos = 1;
aindaNaoSabemos = "Teste";
aindaNaoSabemos = true;

console.log(aindaNaoSabemos);