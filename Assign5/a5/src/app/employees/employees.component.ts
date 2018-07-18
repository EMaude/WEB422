import { Component, OnInit } from '@angular/core';
import {Employee} from '../data/vm-teams';
import {EmployeeService} from '../data/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees().subscribe(emp => this.employees = emp, err =>  this.loadingError = true);
  }

  ngOnDestroy(){ 
    if( this.getEmployeesSub != undefined)
    {
      this.getEmployeesSub.unsubscribe();
    }
  }

}
