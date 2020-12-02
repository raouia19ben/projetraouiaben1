import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './compsant/accueil/accueil.component';
import { ListmaterielComponent } from './compsant/informatique/listmateriel/listmateriel.component';
import { MaterielComponent } from './compsant/informatique/materiel/materiel.component';
import { DetailmaterielComponent } from './compsant/informatique/detailmateriel/detailmateriel.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListmaterielComponent,
    MaterielComponent,
    DetailmaterielComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
