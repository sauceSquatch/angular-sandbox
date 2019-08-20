import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertSuccess } from './alerts/alert-success/alert-success.component';
import { AlertWarning } from './alerts/alert-warning/alert-warning.component';
import { FormsModule } from '@angular/forms';
import { Assignment3 } from './assignments/assignment3/assignment3.component';
import { Assignment4Component } from './assignments/assignment4/assignment4.component';
import { GameControlComponent } from './assignments/assignment4/game-control/game-control.component';
import { GamePieceComponent } from './assignments/assignment4/game-piece/game-piece.component';
import { ExampleComponent } from './directives/example/example.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { ServiceExampleComponent } from './services/service-example/service-example.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropBucketComponent } from './drag-drop/drop-bucket/drop-bucket.component';
import { Assignment5Component } from './assignments/assignment5/assignment5.component';
import { ActiveUsersComponent } from './assignments/assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/assignment5/inactive-users/inactive-users.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AlertSuccess,
    AlertWarning,
    ServersComponent,
    Assignment3,
    Assignment4Component,
    GameControlComponent,
    GamePieceComponent,
    ExampleComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountComponent,
    NewAccountComponent,
    ServiceExampleComponent,
    DragDropComponent,
    DropBucketComponent,
    Assignment5Component,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
