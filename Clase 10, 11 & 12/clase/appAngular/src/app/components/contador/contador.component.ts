import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  public title: string = 'appAngular';
  public numero: number = 50;
  
    sumar(){
      this.numero += 50
    }
    restar(){
      this.numero -= 50
    }

}
