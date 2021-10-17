const arr = [{
    nombre: "alfio",
    deuda: 10
}, {
    nombre: "jose",
    deuda: 20
}, {
    nombre: "lucia",
    deuda: 5
},{
    nombre: "mariano",
    deuda: 0
},  {
    nombre: "diego",
    deuda: 5
}]


// calcula per cada persona cuanta plata debe pagar o recibir
const calcularDeuda = ( party ) => {
    
    const cantidadPersonas = party.length;
    
    const gastoTotal = party.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.deuda
    }, 0)
    
    const ecuacionDeuda = party.map( persona => {
        
        let deudaCalculada = {
            "nombre": `${persona.nombre}`,
            "deudaCalculada": `${(gastoTotal / cantidadPersonas) - persona.deuda}`
        }
        
        // deudaCalculada[persona.nombre] = (gastoTotal / cantidadPersonas) - persona.deuda
        // output:  [ { alfio: 0 }, { jose: -10 }, { lucia: 5 }, { lucia: 5 } ]

        return deudaCalculada
        
    })
    
    return ecuacionDeuda
    // console.log(ecuacionDeuda); // output: [ { nombre: 'alfio', deudaCalculada: '-2' }, { nombre: 'jose', deudaCalculada: '-12' }, ]
};

// calcularDeuda(arr)


const calcularPago = ( party ) => {
    const pagan = {}
    const deben = {}
    let saldado = {}
    
    saldado = party.filter( ( persona, index ) => {

        console.log(persona);
        persona[index] === 0;

    })
    // console.log(saldado);
    // console.log(party);
    
}

calcularPago( calcularDeuda(arr) )