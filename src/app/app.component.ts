import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( public _wsocketService: WebsocketService,
               // tslint:disable-next-line:no-shadowed-variable
               public ChatService: ChatService ) {  }

  ngOnInit() {
    this.ChatService.getMessagePrivate()
    .subscribe( msg => {
      console.log(msg);
     });
  }

}
