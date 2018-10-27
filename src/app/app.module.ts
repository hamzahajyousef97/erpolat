import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TasarimYollaComponent } from './components/tasarim-yolla/tasarim-yolla.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { BizeUlasinComponent } from './components/bize-ulasin/bize-ulasin.component';
import { MasaComponent } from './components/masa/masa.component';
import { SandalyeComponent } from './components/sandalye/sandalye.component';
import { KitaplikComponent } from './components/kitaplik/kitaplik.component';
import { TVunitesiComponent } from './components/tvunitesi/tvunitesi.component';
import { SalincaklarComponent } from './components/salincaklar/salincaklar.component';
import { BanklarComponent } from './components/banklar/banklar.component';
import { SaksiliklarComponent } from './components/saksiliklar/saksiliklar.component';
import { UrunComponent } from './components/urun/urun.component';
import {AppRoutingModule} from "./components/app-routing/app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    TasarimYollaComponent,
    HakkimizdaComponent,
    BizeUlasinComponent,
    MasaComponent,
    SandalyeComponent,
    KitaplikComponent,
    TVunitesiComponent,
    SalincaklarComponent,
    BanklarComponent,
    SaksiliklarComponent,
    UrunComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
