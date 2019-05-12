import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosGuard implements CanActivate {

  // tslint:disable-next-line:variable-name
  constructor( public _wServices: WebsocketService ) {  }

canActivate() {
  console.log('Guard');
  if ( this._wServices.getUsuario() ) {
    return true;
  } else {
    return false;
  }
}

}
