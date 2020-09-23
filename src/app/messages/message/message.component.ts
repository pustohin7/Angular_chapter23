import {Component, OnInit} from '@angular/core';
import {Message} from '../message.model';
import {MessageService} from '../message.service';

@Component({
  selector: 'paMessages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  lastMessage: Message;

  constructor(messageService: MessageService) {
    messageService.messages.subscribe(m => this.lastMessage = m);
  }

  ngOnInit(): void {
  }

}
