import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3 implements OnInit {
  showDetails = false;
  clickIndex:number = 0;
  clicksArray = [];

  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    if(this.showDetails) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
    }
    // increment click number and push to array
    this.clickIndex++;
    this.clicksArray.push("click number " + this.clickIndex);

  }
}
