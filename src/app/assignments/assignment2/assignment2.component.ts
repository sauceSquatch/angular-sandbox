import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2 implements OnInit {
  userName = "";
  updateStatus = "username has not been updated"

  constructor() { }

  ngOnInit() {
  }

  onUpdateUserName(event:any) {
    this.updateStatus = "username HAS been updated"
    this.userName = "";
  }

  isUserNameEmpty() {
    let isEmpty = true;
    if(this.userName != "") {
      isEmpty = false;
    }
    return isEmpty;
  }
}
