import { Component, OnInit } from '@angular/core';
import { DatamanagerService } from '../services/datamanager.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  name=localStorage.getItem("name");

  constructor ( private data:DatamanagerService ) { }

  ngOnInit() {
    this.data.userValid();
  }
}