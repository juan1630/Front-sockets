import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( public _wService: WebsocketService ) { }

  ngOnInit() {
  }


  salir() {
    this._wService.logoutWS();
  }

}
