import { Component, OnInit } from '@angular/core';
import {PositionService} from '../data/position.service';
import {Position} from '../data/position';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  getPositionSub: any;
  loadingError: boolean = false;

  constructor(private positionService: PositionService, private router: Router) { }

  ngOnInit() {
    this.getPositionSub = this.positionService.getPositions().subscribe(emp => this.positions = emp, err =>  this.loadingError = true);
  }

  routePosition(id: string){
    this.router.navigate(['/position', id])
  }

  ngOnDestroy(){ 
    if( this.getPositionSub != undefined)
    {
      this.getPositionSub.unsubscribe();
    }
  }
}
