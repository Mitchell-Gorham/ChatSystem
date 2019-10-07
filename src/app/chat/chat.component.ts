import { Component, OnInit } from '@angular/core';
import { DatamanagerService } from '../services/datamanager.service';

import { SocketsService } from '../services/socketmanager.service';
import {Message} from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( private data:DatamanagerService, private socket:SocketsService) { }
  
	name = localStorage.getItem("name");
	email = localStorage.getItem("email");
	
	valid = false;

	msgList:any;
	groupList:any;
	channelList:any;
	
	ioConnection:any;
	message:Message[] = []
	chatmessage:string = ""

	async messageList(cID) {
		console.log(cID)
		this.msgList= await this.data.messageList(cID)
		console.log(this.msgList);
	}

	async chatSubmit() {
		if (this.chatmessage){
			console.log(this.chatmessage)
			var today = new Date();
			var time = today.getHours() + ":" + today.getMinutes()
			this.socket.chat(new Message(this.chatmessage,time))



			// Clear the chat message
			this.chatmessage=null;
		}
	}

	async ngOnInit() {
		//console.log("Reached account.ts");
		this.valid = this.data.userValid();
		if (this.valid){
			this.socket.initSocket();
			this.ioConnection = this.socket.onMessage()


			// Fetch Groups
			this.groupList = await this.data.groupParse()
			//console.log(this.groupList)
			
			// Fetch Channels that user is a part of
			this.channelList = await this.data.channelParse(this.name)
			//console.log(this.channelList)
			
		}
	}
}
