import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  items = [
    'Variable-1 | $500',
    'Variable-2 | Mastercard',
    'Variable-3 | 120',
    'Variable-4 | 06/15/2019',
    'Variable-5 | 08/30/2020',
    'Variable-6 | lifestyle',
    'Variable-7 | 250'
  ];
  activeIndex = 0;
  output = "";

  nativeStyleHeadline = "";
  nativeStyleBody = "";
  nativeStyleOfferPeriod = "";

  hasData:boolean = false;

  cardProductList = [];
  spendAmountList = [];
  getAmountList = [];
  categoryList = [];
  upToAmountList = [];
  offerStartDateList = [];
  offerEndDateList = [];
  
  constructor() { }

  ngOnInit() {
  }

  reBefore = /(.+?)\|/;
  reAfter = /(.?)\|(.*)/;

  sanitizeBefore(str) {
    if(!!str) {
      let valArray = this.reBefore.exec(str);
      console.log('val: ', valArray[1]);
      // debugger
      // console.log('val.length: ', val.length);
      return valArray[1];
    }
  }

  sanitizeAfter(str) {
    if(!!str) {
      let valArray = this.reAfter.exec(str);
      console.log(valArray);
      return valArray[2];
    }
  }
  

  submitClick(event) {
    this.hasData = true;
    this.output = `cardProductList=${this.sanitizeBefore(this.cardProductList[0])}
                  &spendAmount=${this.sanitizeBefore(this.spendAmountList[0])}
                  &getAmountList=${this.sanitizeBefore(this.getAmountList[0])}
                  &categoryList=${this.sanitizeBefore(this.categoryList[0])}
                  &upToAmountList=${this.sanitizeBefore(this.upToAmountList[0])}
                  &offerStartDateList=${this.sanitizeBefore(this.offerStartDateList[0])}
                  &offerEndDate=${this.sanitizeBefore(this.offerEndDateList[0])}`

    this.nativeStyleHeadline = `EARN UP TO ${this.sanitizeAfter(this.getAmountList[0])} THANKYOU® POINTS`;
    this.nativeStyleBody = `Spend ${this.sanitizeAfter(this.spendAmountList[0])} 
                            and get ${this.sanitizeAfter(this.getAmountList[0])}
                            back in ThankYou® Points, up to a max of ${this.sanitizeAfter(this.upToAmountList[0])}`
    this.nativeStyleOfferPeriod = `Spend between ${this.sanitizeAfter(this.offerStartDateList[0])}
                                  and ${this.sanitizeAfter(this.offerEndDateList[0])}`
  }

  dropped(event: CdkDragDrop<string[]>) {
    // this.hasData = true;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.data.length > 0 ) {
      // first switch out the existing item
      transferArrayItem(event.container.data,
                        event.previousContainer.data,
                        event.previousIndex,
                        event.previousContainer.data.length);
      // now drop in the new item that is dropped
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      
      console.log(event.previousIndex);
      console.log(event.currentIndex);
    } else {
      console.log("new container: ", event);
      // console.log(event.previousContainer.data);
      // console.log(event.container.data);
      // console.log(event.previousIndex);
      // console.log(event.currentIndex);
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      
    }
  }

}
