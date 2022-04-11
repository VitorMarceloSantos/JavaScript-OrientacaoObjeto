class Calculator{
    constructor(){
        this.upperValue = document.querySelector("#upper-number");
        this.resultValue = document.querySelector("#result-number");
        this.reset = 0;
    }
    
    clearValues(){
        this.upperValue.textContent = "0";
        this.resultValue.textContent = "0";
    }
    //Checa se precisa adicionar ou não
    checkLastDigit(input, upperValue, reg){
        if((
            !reg.test(input) && 
            !reg.test(upperValue.substr(upperValue.length-1))
            )){
                return true;
        }else{
                return false;
        }
    }
    //Metodo de soma
    sum(n1, n2){
        return parseFloat(n1) + parseFloat(n2);
    }
    //Metodo de subtração
    subtraction(n1, n2){
        return parseFloat(n1) - parseFloat(n2);
    }
    //Metodo de multiplicação
    multiplication(n1, n2){
        return parseFloat(n1) * parseFloat(n2);
    }
    //Metodo de divisão
    division(n1, n2){
        return parseFloat(n1) / parseFloat(n2);
    }

    //Resetar os valores do display
    refreshValues(total){
        this.upperValue.textContent = total;
        this.resultValue.textContent = total;
    }
    resolution(){
        //transformar uma string em um array
        let upperValueArray = (this.upperValue.textContent).split(" ");//cada espaço em branco(" ") vai se transformar em um array
        let result = 0;
       

        for(let i = 0; i <= upperValueArray.length; i++){
            let operation = 0;
            let actualIntem = upperValueArray[i];
            if(actualIntem == "x"){ //faz a multiplicação
                operation = 1;
                result = calc.multiplication(parseFloat(upperValueArray[i-1]), parseFloat(upperValueArray[i+1]) )//transformar o texto em number)
            }else if(actualIntem == "/"){ //faz a divisão
                operation = 1;
                result = calc.division(parseFloat(upperValueArray[i-1]), parseFloat(upperValueArray[i+1]) )//transformar o texto em number)
            }else if(!upperValueArray.includes("x") && !upperValueArray.includes("/")){ //checa se o array ainda tem divisão e multiplicação a ser feita
                if(actualIntem == "+"){ //faz a soma
                    operation = 1;
                    result = calc.sum(parseFloat(upperValueArray[i-1]), parseFloat(upperValueArray[i+1]) )//transformar o texto em number)
                }
                else if(actualIntem == "-"){ //faz a subtração
                    operation = 1;
                    result = calc.subtraction(parseFloat(upperValueArray[i-1]), parseFloat(upperValueArray[i+1]) )//transformar o texto em number)
                }
            }
            //Atualiza valores do array para a proxima intereção
            if(operation){
                //indice anterior no resultado da operação
                upperValueArray[i - 1] = result;
                //remove os itens já utilizados para a  operação
                upperValueArray.splice(i,2) 
                //atualizar o valor do indece
                i = 0;
            }
        }
        if(result){
            calc.reset = 1;
        }

        calc.refreshValues(result); //Atualizar Totais
    }
    btnPress(){
        let input = this.textContent; //Vai receber o texto do botão
        let upperValue = calc.upperValue.textContent;
        //Número ou operação matématica
        var reg = new RegExp("^\\d+$");

        if(calc.reset && reg.test(input)){ //se precisar resetar, limpa o display
            upperValue = "0";
        }
        calc.reset = 0; //limpa a prop de reset


        if(input == "AC"){
            calc.clearValues();
        }else if(input == "="){ //verificar se o input é igual ao caracter =, termino da operação e saber o resultado
           calc.resolution(); 
        }
        else{
            if(calc.checkLastDigit(input, upperValue, reg)){
                return false;
            }
            //Adiciona espaço aos operadores
            if(!reg.test(input)){
                input = ` ${input} `;
            }
            if(upperValue == "0"){ //tirando o primeiro zero(sinal de concatenação +)
                if(reg.test(input)){ // para não deixar adicionar sinais antes de números(testando se o primeiro digito é um número)
                    calc.upperValue.textContent = input; //substituindo o zero pelo numero digitado
                }
            }else{
                calc.upperValue.textContent += input//adicionando os numeros digitados
            }    
        }
    }
}
//Iniciando Objeto
let calc = new Calculator;
//Iniciando Botões
let buttons = document.querySelectorAll(".btn"); /*Selecionando todos os botões */
//Mapear todos os botões
for(let i = 0; buttons.length > i; i++){
    buttons[i].addEventListener("click", calc.btnPress);
}

