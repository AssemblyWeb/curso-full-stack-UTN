"use strict";
// Tareas para nuestra Práctica.
// -Crea variables con varios tipos de datos.
// -Construye tres objetos en TypeScript, utiliza las interface para configurar los objetos.
// -Imprime por pantalla los objetos y sus atributos.
// -Crea dos funciones. Una con formato tradicional y la otra con desestructuración de argumentos.
// -Crea otro archivo de .ts y utiliza el import desestructurado para reutilizar el código de las dos funciones creadas anteriormente.
// -Crea dos clases, una que no tenga constructor y la otra clase que si lo implemente
// .-Crea una tercer clase que utilice la herencia de una de las clases creadas anteriormente.
// -Imprime por consola objetos de las clases anteriores.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.precioDelVehiculo = exports.añoDelVehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, año, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
    }
    return Vehiculo;
}());
// -Construye tres objetos en TypeScript, utiliza las interface para configurar los objetos.
var ford = new Vehiculo('ford', 'ka', 2015, 5000);
var vw = new Vehiculo('volkswagen', 'suran', 2008, 3000);
var fiat = new Vehiculo('fiat', 'uno', 2013, 4500);
// -Imprime por pantalla los objetos y sus atributos.
// console.log(ford, vw, fiat);
// -Crea dos funciones. Una con formato tradicional y la otra con desestructuración de argumentos.
var añoDelVehiculo = function (marca, modelo, año) {
    console.log("El vehiculo " + marca + " " + modelo + " es del " + año);
};
exports.añoDelVehiculo = añoDelVehiculo;
añoDelVehiculo(ford.marca, ford.modelo, ford.año);
var marca = vw.marca, modelo = vw.modelo, precio = vw.precio;
var precioDelVehiculo = function (marca, modelo, precio) {
    console.log("El " + marca + " " + modelo + " tiene un precio de $" + precio);
};
exports.precioDelVehiculo = precioDelVehiculo;
precioDelVehiculo(marca, modelo, precio);
var Auto = /** @class */ (function () {
    function Auto() {
    }
    return Auto;
}());
var Moto = /** @class */ (function () {
    function Moto(cilindrada, peso, cambios) {
    }
    return Moto;
}());
// .-Crea una tercer clase que utilice la herencia de una de las clases creadas anteriormente.
var Jeep = /** @class */ (function (_super) {
    __extends(Jeep, _super);
    function Jeep(peso, ganchoTrailer) {
        var _this = _super.call(this) || this;
        _this.peso = peso;
        _this.ganchoTrailer = ganchoTrailer;
        return _this;
    }
    return Jeep;
}(Auto));
var wrangler = new Jeep(1500, true);
console.log(wrangler);
var display = function () {
    // var list = document.getElementById('list')
    console.log('list');
};
display();
