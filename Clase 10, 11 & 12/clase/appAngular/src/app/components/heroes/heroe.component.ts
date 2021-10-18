import { Component } from '@angular/core';

@Component({
    selector: 'app-Heroe',
    templateUrl: './Heroe.component.html',
    styleUrls: ['./Heroe.component.css']
})

export class HeroeComponent {
    public nombre: string = 'Iron Man'
    public pais: string = 'USA'
    public edad: number = 45

    public getName(): string { 
        return `Mi nombre es ${this.nombre}`
    }
    public get nombreMayuscula(): string { 
        return this.nombre.toUpperCase()
    }
    public cambiarNombre(){
        this.nombre = 'viuda negra'
    }

}