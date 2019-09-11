import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.scss'],
  providers: [UsersService]
})
export class Assignment5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
