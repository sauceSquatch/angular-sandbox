import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})

export class ActiveUsersComponent implements OnInit {
  userList: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.userList = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

}
