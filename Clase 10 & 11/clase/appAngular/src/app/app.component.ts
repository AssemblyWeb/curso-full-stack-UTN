// import { styles } from '@'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>{{title}}</h1>
  // <hr>
  // <button (click)="sumar()">+1</button>
  // <span>{{numero}}</span>
  // <button (click)="restar()">-1</button>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'appAngular';
  // public numero: number = 50;

  // sumar(){
  //   this.numero += 50
  // }
  // restar(){
  //   this.numero -= 50
  // }
}
