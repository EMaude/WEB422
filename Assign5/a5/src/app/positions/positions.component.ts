import { Component, OnInit } from '@angular/core';
import {PositionService} from '../data/position.service';
import {Position} from '../data/vm-teams';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  getPositionSub: any;
  loadingError: boolean = false;

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.getPositionSub = this.positionService.getPositions().subscribe(emp => this.positions = emp, err =>  this.loadingError = true);
  }

  ngOnDestroy(){ 
    if( this.getPositionSub != undefined)
    {
      this.getPositionSub.unsubscribe();
    }
  }
}
