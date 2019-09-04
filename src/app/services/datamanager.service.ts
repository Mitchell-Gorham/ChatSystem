import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
const data_loc = "../../../server/server_data";
import * as test from "../../../server/server_data/c_test.js";

// declare function loginParse(em:string, pwd:string): any; //Meant to run the backend script to get info
// Provides front end and back end communication functionalities through multiple functions

@Injectable({
  providedIn: 'root'
})

export class DatamanagerService {

  constructor( private router:Router, private http:HttpClient ) { }
 
  public userValid() {    // Checks to see if the user is valid according to local data, if not, sends them to login page
    var valid=localStorage.getItem("valid");
    if (!valid){
      this.router.navigate(["/login"]);
    }
  } 
  public getLogin(email:string, pass:string): any {   // Provides login data from the Login Page to the backend sever for validation
    //var obj = test.loginParse(email, pass); // Refuses to work due to 'fs' resolve issues
    //console.log(obj);
    // Communicate with backend server
    /*if (!obj){   // If provided login details are correct, user is now valid

    }*/
    return(true);    //debug 
  }

}
