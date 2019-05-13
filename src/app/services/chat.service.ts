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
        de: this._wsService.getUsuario().nombre,
        cuerpo: mensaje
      };

      this._wsService.emitir('mensaje', payload);
    }

    getMassage() {
     return this._wsService.escuchar('mensaje-nuevo');
    }

    getMessagePrivate() {
      return this._wsService.escuchar('mensaje-privado');
    }

    getUsuarioActivos() {
      return this._wsService.escuchar('usuarios-activos');
    }
    emitirUsuariosActivos() {
      this._wsService.emitir('obtener-usuarios');
    }
}
