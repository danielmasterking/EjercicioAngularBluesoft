import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CuentaComponent } from './pages/cuenta/cuenta.component';

const routes: Routes = [
    {
      path:'',
      component:CuentaComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }