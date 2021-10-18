import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroeComponent } from './components/heroes/heroe.component';
import { ListaComponent } from './components/lista/lista.component';
import { HeroinaComponent } from './components/heroina/heroina.component';
import { ContadorComponent } from './components/contador/contador.component';
import { VengadoresModule } from './vengadores/vengadores.module';
import { PageModule } from './components/page/page-module.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListaComponent,
    HeroinaComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    VengadoresModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
