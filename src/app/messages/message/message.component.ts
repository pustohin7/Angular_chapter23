import {Component, OnInit} from '@angular/core';
import {Message} from '../message.model';
import {MessageService} from '../message.service';
import {NavigationCancel, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'paMessages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  lastMessage: Message;

  constructor(messageService: MessageService, router: Router) {
    messageService.messages.subscribe(m => this.lastMessage = m);
    router.events
      .filter(e => e instanceof NavigationEnd || e instanceof
        NavigationCancel)
      .subscribe(e => { this.lastMessage = null; });
  }

  ngOnInit(): void {
  }

}
