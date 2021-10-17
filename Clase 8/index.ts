console.log('hello typescript');

// vars
let nombre: string = 'Alfio'
let numero: number = 30
let ganar: boolean = true
let apellido: string | number = 'Perino'

// interfaces => son preconfiguraciones de los objetos
interface Personaje {
    nombre: string;
    pv: number;
    habilidades: string[];
    ciudad?: string; // dato opcional con '?'
}


// Objetos
const personaje: Personaje = {
    nombre: 'aquaman',
    pv: 100,
    habilidades: ['agua', 'rayo'],
    // ciudad: 'atlantis'
}

personaje.ciudad = 'atlantis'

// console.table(personaje)

// funciones 
function sumar (a: number, b: number){
    return a + b
}
const restar = (a: number, b: number) => {
    return a - b
}
// console.log(sumar(2,3))
// console.log(restar(5,3))

const multiplicar = (a: number, b: number, c?: number): number => {
    return a * b * c
}
console.log( multiplicar( 3, 2, 2) )


// funciones a las interfaces
interface personajeJuego {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}
const nuevoPersonaje: personajeJuego = {
    nombre: 'goku',
    pv: 80,
    mostrarPv: () =>{
        console.log(`${nuevoPersonaje.nombre} tiene ${personaje.pv} puntos de vida`)    
    }

}
function curarPersonaje( personaje: personajeJuego, curar: number ):void{
    personaje.pv += curar
    console.log(`${personaje.nombre} ha sido curado con ${curar} y ahora tiene ${personaje.pv}`);
}

curarPersonaje( nuevoPersonaje, 10)

// objetos
interface superHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
}
interface Direccion {
    calle: string;
    numero: number;
    mostrarVivienda?: () => void;
}

const marvel: superHeroe = {
    nombre: 'Logan',
    edad: 35,
    direccion: {
        calle: '5th avenue',
        numero: 1238
    },
    // mostrarVivienda: mostrarVivienda(),
}

// clases en ts
// Las clases son modelos especificos 
class Heroe {
    constructor (
        public nombre: string, // acceso completo
        public edad: number,
        public poder: string,
        public ciudad: string,
        // static apodo: string, // acceso sin instanciar
        private pv: number = 100,// solo en la clase
    ){}

    mostrarPoder(){
        return `${this.nombre} usa ${this.poder}`
    }

    mostrarPV(){
        return `${this.nombre} tiene ${this.pv} puntos de vida`
    }
    public curarPV( cura: number ) {
        this.pv += cura
        console.log(`${this.nombre} se ha curado ${cura}! Ahora ${this.nombre} tiene ${this.pv}`);
        
    }

}

// Thor.nombre = 'Thor'
// Thor.edad = 30 
const Thor = new Heroe('Thor', 30, 'martillo', 'Hammer of the Gods', 100)
console.log(Thor.mostrarPoder());
console.log(Thor.curarPV(20));







