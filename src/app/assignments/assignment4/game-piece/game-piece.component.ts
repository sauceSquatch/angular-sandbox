import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-piece',
  templateUrl: './game-piece.component.html',
  styleUrls: ['./game-piece.component.scss']
})
export class GamePieceComponent implements OnInit {

  @Input() element: {type:String, count:number}

  elementType:String
  elementCount:number
  isOdd:Boolean

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.element != undefined) {
      this.elementType = this.element.type;
      this.elementCount = this.element.count;
      this.checkForOdd(this.elementCount);
    }
  }

  checkForOdd = (value:number) => {
    if(value % 2 == 0) {
      this.isOdd = false;
      return false;
    } else {
      this.isOdd = true;
      return true;
    }
    console.log("check value: ", value)
  }

}
