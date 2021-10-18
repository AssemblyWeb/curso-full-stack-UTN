import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';
import { TeamPage } from '../interfaces/team-page.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  public info: InfoPage = {}
  public team: any[] = []

  

  constructor( private http: HttpClient){
    this.getInfoPage()
    this.getTeam()
  }


  private getInfoPage() {
    this.http.get('assets/data/info-page.json')
    .subscribe((resp: InfoPage) => {
      // console.log(resp.name)
      this.info = resp
    
    }) 
  }
  private getTeam() {
    this.http.get('https://portfolio-utn-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (res: any ) => {
      console.log(res);
      this.team = res
    })
  }
}
//16:19 
//17:20