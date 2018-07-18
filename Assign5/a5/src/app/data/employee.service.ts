import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {Employee, Position} from "./vm-teams";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url =  "https://polar-mountain-95409.herokuapp.com";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }
}
