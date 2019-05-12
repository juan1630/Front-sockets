import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre = '';

  // tslint:disable-next-line:variable-name
  constructor( public _wsService: WebsocketService,
               private router: Router ) { }

  ngOnInit() {
  }

  ingresar() {
    console.log( this.nombre );
    this._wsService.loginWS( this.nombre )
    .then( () => {
      this.router.navigateByUrl('/mensajes');
     });
  }

}
