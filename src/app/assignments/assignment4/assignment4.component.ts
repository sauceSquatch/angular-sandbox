import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.scss']
})
export class Assignment4Component implements OnInit {

  currentCount:Number = 0;
  countDataOdd:{type:String, count:Number};
  countDataEven:{type:String, count:Number};

  constructor() { }

  ngOnInit() {
  }

  onTick = ( tickData:{ currentTick:Number}) => {
    this.currentCount = tickData.currentTick;
    this.countDataOdd = { type:"odd", count:tickData.currentTick};
    this.countDataEven = { type:"even", count:tickData.currentTick};

    console.log(tickData.currentTick);
  }

}
