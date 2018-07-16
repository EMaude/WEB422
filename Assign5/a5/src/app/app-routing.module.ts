import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from  "./home/home.component";
import {EmployeesComponent} from  "./employees/employees.component";
import {PositionsComponent} from  "./positions/positions.component";
import {NotfoundComponent} from  "./notfound/notfound.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
