//Clases en TypeScript
//Las clases son modelos
​
class Persona{
    constructor(
        public nombre: string, 
        public apellido: string,
        public edad: number,
        public telefono: number,
        public matricula: number,
        public especialidad: string,
        ){}
        decimeTuNombre(){return `mi nombre es ${this.nombre}`}
        
    }
    ​
class Veterinario extends Persona{
    constructor(
        public nombre: string, 
        public apellido: string,
        public edad: number,
        public telefono: number,
        public matricula: number,
        public especialidad: string, 
    ){
        super(nombre, apellido, edad, telefono, matricula, especialidad)
    }
}
class Empleado extends Persona{
    constructor(
        public nombre: string, 
        public apellido: string,
        public edad: number,
        public telefono: number,
        public matricula: number,
        public especialidad: string, 
        private salario: number,
    ){
        super(nombre, apellido, edad, telefono, matricula, especialidad)
    }
}

const Jose = new Empleado('Jose', 'Martinez', 40, 45011232, 0,'perros', 60000);

// class Cliente extends Persona{
//     constructor(
//         public direccion: string,
        
//     ){
//         super()
//     }
// }

​const Victoria = new Veterinario('Victoria', 'Perez', 30, 45011221, 4567, 'Gatos' )
console.log(Victoria.decimeTuNombre());


interface producto {
    descripcion: string;
    precio: number;
}
const telefono: producto = {
    descripcion: "Samsung A20",
    precio: 5000
}
const tablet: producto = {
    descripcion: "Samsung T40",
    precio: 6000
}

const calcularImpuestos = (productos: producto[]): number => {
    let total = 0;
    // con los { } desestructuro el objeto para obtener el campo deseado como argumento
    productos.forEach( ({precio}) => {
        total += precio * 0.21
    })
    return total
}

const articulos: producto[] = [telefono, tablet]
const impuesto = calcularImpuestos(articulos)
console.log(`Vas a pagar $${impuesto} de impuestos`)