import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './componenetes/dash/dash.component';
import { LoginComponent } from './componenetes/login/login.component';

const routes: Routes = [
  {
    path: 'dash',
    component:DashComponent,
  },
  {
    path: '',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
