import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    // tslint:disable-next-line:variable-name
    public _wsService: WebsocketService
   ) { }

    sendMessage( mensaje: string ) {
      const payload = {
        de: 'Juan',
        cuerpo: mensaje
      };

      this._wsService.emitir('mensaje', payload);
    }

    getMassage() {
     return this._wsService.escuchar('mensaje-nuevo');
    }
}
