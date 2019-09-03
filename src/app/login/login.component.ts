import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatamanagerService } from '../services/datamanager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private data:DatamanagerService) { }

  em=""
  pass=""
  valid= [
    {username:"abc@com", pwd:"123"},
    {username:"def@com", pwd:"456"},
    {username:"ghi@com", pwd:"789"}
  ]
  
  loginClick() {
    console.log("EMAIL: "+this.em+" PASS: "+this.pass);
    var obj = this.data.getLogin(this.em, this.pass);
    console.log(obj);
    if (obj) {
      this.router.navigate(["/account"]);
      localStorage.setItem("valid","true");
      localStorage.setItem("name",this.em);
      console.log(localStorage.getItem("valid"));
    }
    /*for (var i = 0; i < this.valid.length; i++) {
      if( this.em == this.valid[i].username && this.pass == this.valid[i].pwd ){
        this.router.navigate(["/chat"]);
      }
    }*/
  }


  
  ngOnInit() {
  }
}