import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './guard/auth-guard.service'
import { EmployeeResolveService } from './service/employee-resolve.service'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent, resolve: {
    employee: EmployeeResolveService
    }},
  {path: 'about', component: AboutComponent,canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
