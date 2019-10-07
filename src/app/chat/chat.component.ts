import { Component, OnInit } from '@angular/core';
import { DatamanagerService } from '../services/datamanager.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( private data:DatamanagerService ) { }
  
	name = localStorage.getItem("name");
	email = localStorage.getItem("email");
	
	chatmessage = ""
	valid = false;

	msgList:any;
	groupList:any;
	channelList:any;

	async messageList(cID) {
		console.log(cID)
		this.msgList= await this.data.messageList(cID)
		console.log(this.msgList);
	}

	async chatSubmit() {
		if (this.chatmessage){
			console.log(this.chatmessage)
			this.chatmessage=""
		}
	}

	async ngOnInit() {
		//console.log("Reached account.ts");
		this.valid = this.data.userValid();
		if (this.valid){
			// Fetch Groups
			this.groupList = await this.data.groupParse()
			//console.log(this.groupList)
			
			// Fetch Channels that user is a part of
			this.channelList = await this.data.channelParse(this.name)
			//console.log(this.channelList)
			
		}
	}
}
