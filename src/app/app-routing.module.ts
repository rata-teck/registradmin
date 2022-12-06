import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DescargaComponent} from './paginas/descarga/descarga.component';
import {InicioComponent} from './paginas/inicio/inicio.component';
import {PortalComponent} from './paginas/docente/portal/portal.component';

const routes: Routes = [
  {
    path: '',
    component: DescargaComponent
  },
  {
    path: 'acceso',
    component: InicioComponent
  },
  {
    path: 'docente',
    component: PortalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
