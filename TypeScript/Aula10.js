/* Classes: utilizam a ideia da versao ES6 do JS e não a herença do protype. */
var Carro = /** @class */ (function () {
    function Carro(marca, aro) {
        this.marca = marca,
            this.aro = aro;
    }
    Carro.prototype.vericarAro = function () {
        return "O aro do carro \u00E9: ".concat(this.aro, ".");
    };
    return Carro;
}());
var ferrari = new Carro("Ferrari", 20);
console.log(ferrari);
