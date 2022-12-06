import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DescargaComponent } from './paginas/descarga/descarga.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {PuenteService} from './servicios/puente.service';
import {PortalComponent} from './paginas/docente/portal/portal.component';
//import {QRCodeModule} from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    DescargaComponent,
    InicioComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //QRCodeModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PuenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
