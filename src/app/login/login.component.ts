import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  em=""
  pass=""
  valid= [
    {username:"abc@com", pwd:"123"},
    {username:"def@com", pwd:"456"},
    {username:"ghi@com", pwd:"789"}
  ]

  loginClick() {
    console.log("EMAIL: "+this.em+" PASS: "+this.pass);
    for (var i = 0; i < this.valid.length; i++) {
      if( this.em == this.valid[i].username && this.pass == this.valid[i].pwd ){
        this.router.navigate(["/chat"]);
      }

    }
  }
  ngOnInit() {
  }
}


