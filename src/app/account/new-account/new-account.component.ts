import { Component } from '@angular/core';

import { LoggingService } from '../../services/logging.service';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService:LoggingService,
              private accountService:AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    
  }
}
