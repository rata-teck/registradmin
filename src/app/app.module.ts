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
import {QrCodeModule} from 'ng-qrcode';
import { ListadoAsignaturasComponent } from './paginas/docente/portal/listado-asignaturas/listado-asignaturas.component';
import { QrAsignaturaComponent } from './paginas/docente/portal/qr-asignatura/qr-asignatura.component';
import { CalendarioPipe } from './servicios/calendario.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DescargaComponent,
    InicioComponent,
    PortalComponent,
    ListadoAsignaturasComponent,
    QrAsignaturaComponent,
    CalendarioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule,
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
