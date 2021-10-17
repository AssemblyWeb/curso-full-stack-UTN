console.log('hello typescript');
// vars
var nombre = 'Alfio';
var numero = 30;
var ganar = true;
var apellido = 'Perino';
// Objetos
var personaje = {
    nombre: 'aquaman',
    pv: 100,
    habilidades: ['agua', 'rayo']
};
personaje.ciudad = 'atlantis';
// console.table(personaje)
// funciones 
function sumar(a, b) {
    return a + b;
}
var restar = function (a, b) {
    return a - b;
};
// console.log(sumar(2,3))
// console.log(restar(5,3))
var multiplicar = function (a, b, c) {
    if (c === void 0) { c = 5; }
    return a * b * c;
};
console.log(multiplicar(3, 2, 2));
var nuevoPersonaje = {
    nombre: 'goku',
    pv: 80,
    mostrarPv: function () {
        console.log(nuevoPersonaje.nombre + " tiene " + personaje.pv + " puntos de vida");
    }
};
function curarPersonaje(personaje, curar) {
    personaje.pv += curar;
    console.log(personaje.nombre + " ha sido curado con " + curar + " y ahora tiene " + personaje.pv);
}
curarPersonaje(nuevoPersonaje, 10);
var marvel = {
    nombre: 'Logan',
    edad: 35,
    direccion: {
        calle: '5th avenue',
        numero: 1238
    }
};
// clases en ts
// Las clases son modelos especificos 
var Heroe = /** @class */ (function () {
    function Heroe(nombre, // acceso completo
    edad, poder, ciudad, 
    // static apodo: string, // acceso sin instanciar
    pv) {
        if (pv === void 0) { pv = 100; }
        this.nombre = nombre;
        this.edad = edad;
        this.poder = poder;
        this.ciudad = ciudad;
        this.pv = pv;
    }
    Heroe.prototype.mostrarPoder = function () {
        return this.nombre + " usa " + this.poder;
    };
    Heroe.prototype.mostrarPV = function () {
        return this.nombre + " tiene " + this.pv + " puntos de vida";
    };
    Heroe.prototype.curarPV = function (cura) {
        this.pv += cura;
        console.log(this.nombre + " se ha curado " + cura + "! Ahora " + this.nombre + " tiene " + this.pv);
    };
    return Heroe;
}());
// Thor.nombre = 'Thor'
// Thor.edad = 30 
var Thor = new Heroe('Thor', 30, 'martillo', 'Hammer of the Gods', 100);
console.log(Thor.mostrarPoder());
console.log(Thor.curarPV(20));
