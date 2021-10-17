// Tareas para nuestra Práctica.
// -Crea variables con varios tipos de datos.
// -Construye tres objetos en TypeScript, utiliza las interface para configurar los objetos.
// -Imprime por pantalla los objetos y sus atributos.
// -Crea dos funciones. Una con formato tradicional y la otra con desestructuración de argumentos.
// -Crea otro archivo de .ts y utiliza el import desestructurado para reutilizar el código de las dos funciones creadas anteriormente.
// -Crea dos clases, una que no tenga constructor y la otra clase que si lo implemente
// .-Crea una tercer clase que utilice la herencia de una de las clases creadas anteriormente.
// -Imprime por consola objetos de las clases anteriores.

// -Crea variables con varios tipos de datos.

interface Vehiculo {
    marca: string;
    modelo: string;
    año: number;
    precio: number;
}

class Vehiculo implements Vehiculo {
    constructor(
        public marca: string, 
        public modelo: string, 
        public año: number, 
        public precio: number
        ){}
}
// -Construye tres objetos en TypeScript, utiliza las interface para configurar los objetos.
const ford = new Vehiculo('ford', 'ka', 2015, 5000)
const vw = new Vehiculo('volkswagen', 'suran', 2008, 3000)
const fiat = new Vehiculo('fiat', 'uno', 2013, 4500)

// -Imprime por pantalla los objetos y sus atributos.
// console.log(ford, vw, fiat);

// -Crea dos funciones. Una con formato tradicional y la otra con desestructuración de argumentos.
const añoDelVehiculo = (marca: string, modelo: string, año: number) :any => {
    console.log(`El vehiculo ${marca} ${modelo} es del ${año}`);
}
añoDelVehiculo(ford.marca, ford.modelo, ford.año)

const {marca, modelo, precio} = vw
const precioDelVehiculo = (marca: string, modelo: string, precio: number) :any => {
    console.log(`El ${marca} ${modelo} tiene un precio de $${precio}`);
}
precioDelVehiculo(marca, modelo, precio)

// -Crea otro archivo de .ts y utiliza el import desestructurado para reutilizar el código de las dos funciones creadas anteriormente.
export {añoDelVehiculo, precioDelVehiculo}
// new_file.ts

// -Crea dos clases, una que no tenga constructor y la otra clase que si lo implemente
interface Auto {
    puertas: string;
    combustible: string;
    caja: string;
    cambios: number;
}
class Auto implements Auto {}


interface Moto {
    cilindrada: number;
    peso: number;
    cambios: number;
}

class Moto implements Moto {
    constructor(
        cilindrada: number,
        peso: number,
        cambios: number,
    ){}
}

// .-Crea una tercer clase que utilice la herencia de una de las clases creadas anteriormente.

class Jeep extends Auto {
    constructor(
        public peso: number,
        public ganchoTrailer: boolean,
    ){
        super()
    }
}

const wrangler = new Jeep(1500, true)
console.log(wrangler);

const display = () => {

    // var list = document.getElementById('list')
    console.log('list');
    
}

display()
