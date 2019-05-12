import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { WebsocketService } from '../services/websocket.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsuariosGuardService implements CanActivate {
  // tslint:disable-next-line:variable-name
  constructor(public _wServices: WebsocketService,
              private router: Router  ) { }
  canActivate() {
    if (this._wServices.getUsuario()) {
      return true;
    } else {
        this.router.navigateByUrl('/');
        return false;
    }
  }
}
