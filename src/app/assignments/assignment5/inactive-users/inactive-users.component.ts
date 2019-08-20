import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {

  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }

}
