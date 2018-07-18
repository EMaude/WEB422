import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Position } from "./vm-teams";
@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private url =  "https://polar-mountain-95409.herokuapp.com";
  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]>{
    return this.http.get<Position[]>(`${this.url}/positions`);
  }
}
