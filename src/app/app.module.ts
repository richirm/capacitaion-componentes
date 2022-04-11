import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosListadoComponent } from './alumnos-listado/alumnos-listado.component';
import { ProfesoresListadoComponent } from './profesores-listado/profesores-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListadoComponent,
    ProfesoresListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
