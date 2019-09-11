import { Component } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { UsersService } from './assignments/assignment5/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AccountsService, UsersService]
})
export class AppComponent {
  title = 'my-taco';
}
