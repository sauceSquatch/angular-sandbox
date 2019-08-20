import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() tick = new EventEmitter<{currentTick:number}>();
  currentCount:number = 0;
  myTimer;

  constructor() { }

  ngOnInit() {
    console.log("hello ", this.currentCount);
    this.startTimer();
  }

  stopTimer =() => {
    console.log("stop timer clicked");
    clearInterval(this.myTimer);
  }

  startTimer = () => {
    console.log("hello ", this.currentCount);
    this.myTimer = setInterval(this.emitNotification.bind(this), 1250);
  }

  emitNotification() {
    this.currentCount++;
    // new emmitter
    console.log(this.currentCount);
    this.tick.emit({
      currentTick: this.currentCount
    });
  }



}
