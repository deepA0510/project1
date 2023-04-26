import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeecrudComponent } from './employeecrud/employeecrud.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', component:  EmployeecrudComponent},
  { path: 'second-component', component: SignUpPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
