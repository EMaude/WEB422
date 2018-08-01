import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from  "./home/home.component";
import {EmployeesComponent} from "./employees/employees.component";
import {PositionsComponent} from "./positions/positions.component";
import {NotfoundComponent} from  "./notfound/notfound.component";
import { PositionComponentComponent } from './position-component/position-component.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'positions', component: PositionsComponent},
  {path: 'employee/:_id', component: EmployeeComponentComponent},
  {path: 'position/:_id', component: PositionComponentComponent},
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
