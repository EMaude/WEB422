import { Component, OnInit } from '@angular/core';
import {PositionService} from '../data/position.service';
import {ActivatedRoute} from '@angular/router';
import { Position } from '../data/position';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-position-component',
  templateUrl: './position-component.component.html',
  styleUrls: ['./position-component.component.css']
})
export class PositionComponentComponent implements OnInit {

  paramSubscription : any;
  positionSubscription : any;
  savePositionSubscription : any;
  position : Position;
  successMessage : Boolean = false;
  failMessage : Boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private positionService: PositionService) { }

  ngOnInit() {
    this.paramSubscription = this.activatedRoute.params.subscribe(params => {
      this.positionSubscription =  this.positionService.getPosition(params['_id']).subscribe(data => {
        console.log(data[0]);
        this.position = data[0];
      });
    });
  }

  onSubmit(f: NgForm) : void{
    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe((msg)=>{
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
    if(this.positionSubscription != undefined){ this.positionSubscription.unsubscribe(); }
    if(this.savePositionSubscription != undefined){ this.savePositionSubscription.unsubscribe(); }
  }
}
