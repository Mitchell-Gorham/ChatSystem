import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatamanagerService } from '../services/datamanager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private data:DatamanagerService) { }

  em=""     // Linked to the html login and password components
  pass=""
  
  loginClick() {
    //console.log("EMAIL: "+this.em+" PASS: "+this.pass); // Debug
    var obj = this.data.getLogin(this.em, this.pass);
    console.log(obj);
    if (obj) {
      this.router.navigate(["/account"]);
      localStorage.setItem("valid","true");
      localStorage.setItem("name",this.em);
      console.log(localStorage.getItem("valid"));
    }
  }


  
  ngOnInit() {
    // Redirects user to account if they're already logged in
    var valid=localStorage.getItem("valid");
    if (valid){
      this.router.navigate(["/account"]);
    }
  }
}