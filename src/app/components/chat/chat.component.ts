import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  text: string;
  mensajeSubscription: Subscription;
  mensajes: any[] = [];
  elemento: HTMLElement;
  // tslint:disable-next-line:variable-name
  constructor( public _chatService: ChatService ) { }

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');

    this.mensajeSubscription = this._chatService.getMassage()
    .subscribe( (msj: any) => {
      this.mensajes.push(msj);
      setTimeout(() => {
      this.elemento.scrollTop = this.elemento.scrollHeight;
       }, 50);
     });
  }

  ngOnDestroy() {
    this.mensajeSubscription.unsubscribe();
  }

  enviar() {
    if ( this.text.trim().length === 0 || this.text === undefined) {
      return;
     }
    this._chatService.sendMessage( this.text );
    this.text = '';
  }

}
