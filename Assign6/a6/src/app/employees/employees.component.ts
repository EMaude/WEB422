import { Component, OnInit } from '@angular/core';
import {EmployeeRaw} from '../data/employee-raw';
import {EmployeeService} from '../data/employee.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  employees: EmployeeRaw[];
  getEmployeesSub: any;
  loadingError: boolean = false;
  filteredEmployees: EmployeeRaw[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees().subscribe(emp => {this.employees = emp; this.filteredEmployees = emp}, err =>  this.loadingError = true);
  }

  routeEmployee(id: string){
    this.router.navigate(['/employee', id])
  }

  onEmployeeSearchKeyUP(event)
  { 
    let value = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter( emp => emp.FirstName.toLowerCase().includes(value) || emp.LastName.toLowerCase().includes(value) || emp.Position.PositionName.toLowerCase().includes(value));
  }

  ngOnDestroy(){ 
    if( this.getEmployeesSub != undefined)
    {
      this.getEmployeesSub.unsubscribe();
    }
  }

}
