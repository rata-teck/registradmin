import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DescargaComponent} from './paginas/descarga/descarga.component';

const routes: Routes = [
  {
    path: '/',
    component: DescargaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
