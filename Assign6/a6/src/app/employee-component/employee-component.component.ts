import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeRaw } from '../data/employee-raw';
import { Position } from '../data/position';
import {EmployeeService} from '../data/employee.service';
import {PositionService} from '../data/position.service';
import {ActivatedRoute} from '@angular/router';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})

export class EmployeeComponentComponent implements OnInit {

  paramSubscription : any;
  employeeSubscription : any;
  getPositionsSubcription : any;
  saveEmployeeSubscription : any;
  employee : EmployeeRaw;
  position : Position[];
  successMessage : Boolean = false;
  failMessage : Boolean = false;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private positionService: PositionService) { }

  ngOnInit() {
    this.paramSubscription = this.activatedRoute.params.subscribe(params => {
      this.employeeSubscription =  this.employeeService.getEmployee(params['_id']).subscribe(data => {
        console.log(data[0]);
        this.employee = data[0];
      });
    });

    this.getPositionsSubcription = this.positionService.getPositions().subscribe(data => {
      this.position = data;
    });
    
  }

  onSubmit(f: NgForm) : void{
    this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe((msg)=>{
      this.successMessage = true;
      setTimeout(()=>{
        this.successMessage = false;
      }, 2500);
    }, (err)=>{
      this.failMessage = true;
      setTimeout(()=>{
        this.failMessage = false;
      }, 2500);
    });
  }

  ngOnDestroy(){
    if(this.paramSubscription != undefined){ this.paramSubscription.unsubscribe(); }
    if(this.employeeSubscription != undefined){ this.employeeSubscription.unsubscribe(); }
    if(this.getPositionsSubcription != undefined){ this.getPositionsSubcription.unsubscribe(); }
    if(this.saveEmployeeSubscription != undefined){ this.saveEmployeeSubscription.unsubscribe(); }
  }

}
