import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuletaComponent } from './components/ruleta/ruleta.component';
import { BoxesComponent } from './components/boxes/boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    RuletaComponent,
    BoxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
