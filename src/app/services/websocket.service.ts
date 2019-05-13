import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public usuario: Usuario;

  constructor( private socket: Socket,
               private router: Router  ) {
    this.checkStatus();
    this.argarUsuario();
  }


  checkStatus() {
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      this.socketStatus = true;
      this.guardarStorage();
     });

    this.socket.on('disconnect', () => {
      console.log('desconectado del servidor');
      this.socketStatus = false;
     });
  }
  // tslint:disable-next-line:ban-types
  emitir( evento: string, payload?: any, callback?: Function ) {
    this.socket.emit( evento, payload, callback );
    // emitimos los eventos de cualquier tipo

  }

  escuchar( evento: string ) {
    return this.socket.fromEvent( evento );
  }

  loginWS( nombre: string ) {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise( (resolve, reject) => {
      this.emitir('configurar-usuario', { nombre }, resp => {

        this.usuario = new Usuario( nombre );
        this.guardarStorage();
        resolve();
        });
     });

  }
  logoutWS() {
    this.usuario = null;
    localStorage.removeItem('usuario');
    const payload = {
      nombre: 'sin-nombre'
    };

    this.emitir('configurar-usuario', payload, () => {  } );
    this.router.navigateByUrl('/login');
  }

getUsuario() {
  return this.usuario;
}

  guardarStorage() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

  argarUsuario() {
    if (  localStorage.getItem('usuario') ) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.loginWS( this.usuario.nombre );
    }
  }

}
