import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server created';
  serverName = '';
  userName = "default username";
  serverCreated = false;
  servers = ['server 1', 'server 2']

  constructor() { }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "SERVER wAS created!";
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
