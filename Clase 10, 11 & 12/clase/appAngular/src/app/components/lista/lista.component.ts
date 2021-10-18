import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  
  public heroes = ['Thor', 'Loki', 'Hulk', 'Wanda', 'Thanos']
  public heroeBorrado = ''
  constructor() {
    
   }
   public borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || ''
   }

 

}
