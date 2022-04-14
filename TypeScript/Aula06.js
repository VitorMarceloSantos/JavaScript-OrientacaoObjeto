//Enum, possibilidade de criar um conjunto apenas com valores númericos.
var Carro;
(function (Carro) {
    Carro[Carro["Motor"] = 1] = "Motor";
    Carro[Carro["Portas"] = 4] = "Portas";
    Carro[Carro["Pedais"] = 3] = "Pedais";
})(Carro || (Carro = {}));
var numerodeMotores = Carro.Motor;
console.log(Carro);
console.log(numerodeMotores);
