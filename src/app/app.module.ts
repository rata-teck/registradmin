import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PuenteService} from './servicios/puente.service'
import { DescargaComponent } from './paginas/descarga/descarga.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {PortalComponent} from './paginas/docente/portal/portal.component';
import {QrCodeModule} from 'ng-qrcode';
import { ListadoAsignaturasComponent } from './paginas/docente/portal/listado-asignaturas/listado-asignaturas.component';
import { QrAsignaturaComponent } from './paginas/docente/portal/qr-asignatura/qr-asignatura.component';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from './../enviroments/enviroment';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { ListadoAsistenciaComponent } from './paginas/docente/portal/listado-asistencia/listado-asistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    DescargaComponent,
    InicioComponent,
    PortalComponent,
    ListadoAsignaturasComponent,
    QrAsignaturaComponent,
    ListadoAsistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    PuenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
