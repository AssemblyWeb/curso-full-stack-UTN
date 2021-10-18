import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
// import { InfoPage } from 'src/app/interfaces/info-page.interface';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  public year: number = new Date().getFullYear()

  constructor( public service: InfoPageService ) { }

  ngOnInit(): void {
  }

}
