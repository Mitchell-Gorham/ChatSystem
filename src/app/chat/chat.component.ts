import { Component, OnInit } from '@angular/core';
import { DatamanagerService } from '../services/datamanager.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( private data:DatamanagerService ) { }

  ngOnInit() {
    this.data.userValid();
  }
}
