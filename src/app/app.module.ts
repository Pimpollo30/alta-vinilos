import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AltaVinilosComponent } from './pages/alta-vinilos/alta-vinilos.component';
import { ListadoVinilosComponent } from './pages/listado-vinilos/listado-vinilos.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaVinilosComponent,
    ListadoVinilosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
