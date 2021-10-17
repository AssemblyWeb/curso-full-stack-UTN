"use strict";
//Clases en TypeScript
//Las clases son modelos
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
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad, telefono, matricula, especialidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
        this.matricula = matricula;
        this.especialidad = especialidad;
    }
    Persona.prototype.decimeTuNombre = function () { return "mi nombre es " + this.nombre; };
    return Persona;
}());
var Veterinario = /** @class */ (function (_super) {
    __extends(Veterinario, _super);
    function Veterinario(nombre, apellido, edad, telefono, matricula, especialidad) {
        var _this = _super.call(this, nombre, apellido, edad, telefono, matricula, especialidad) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.edad = edad;
        _this.telefono = telefono;
        _this.matricula = matricula;
        _this.especialidad = especialidad;
        return _this;
    }
    return Veterinario;
}(Persona));
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, edad, telefono, matricula, especialidad, salario) {
        var _this = _super.call(this, nombre, apellido, edad, telefono, matricula, especialidad) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.edad = edad;
        _this.telefono = telefono;
        _this.matricula = matricula;
        _this.especialidad = especialidad;
        _this.salario = salario;
        return _this;
    }
    return Empleado;
}(Persona));
var Jose = new Empleado('Jose', 'Martinez', 40, 45011232, 0, 'perros', 60000);
// class Cliente extends Persona{
//     constructor(
//         public direccion: string,
//     ){
//         super()
//     }
// }
var Victoria = new Veterinario('Victoria', 'Perez', 30, 45011221, 4567, 'Gatos');
console.log(Victoria.decimeTuNombre());
var telefono = {
    descripcion: "Samsung A20",
    precio: 5000
};
var tablet = {
    descripcion: "Samsung T40",
    precio: 6000
};
var calcularImpuestos = function (productos) {
    var total = 0;
    // con los { } desestructuro el objeto para obtener el campo deseado como argumento
    productos.forEach(function (_a) {
        var precio = _a.precio;
        total += precio * 0.21;
    });
    return total;
};
var articulos = [telefono, tablet];
var impuesto = calcularImpuestos(articulos);
console.log("Vas a pagar $" + impuesto + " de impuestos");
