import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
const data_loc = "../../../server/server_data";
import * as test from "../../../server/server_data/dbAuth.js";

const SERVER_URL = 'http://localhost:3000'

// declare function loginParse(em:string, pwd:string): any; //Meant to run the backend script to get info
// Provides front end and back end communication functionalities through multiple functions

@Injectable({
	providedIn: 'root'
})

export class DatamanagerService {

  	constructor( private router:Router, private http:HttpClient ) { }
// GLOBAL PAGE 
  	public userValid() {    // Checks to see if the user is valid according to local data, if not, sends them to login page
    	var valid=localStorage.getItem("valid");
    	if (!valid){
    		this.router.navigate(["/login"]);
		}
	}
// LOGIN PAGE
	public loginParse(email:string, pass:string): Promise<boolean> {   // Provides login data from the Login Page to the backend sever for validation
		return new Promise((resolve, rej) => {
			this.http.post(`${SERVER_URL}/login`, {email, pass}).subscribe(res =>{
				resolve(res as boolean);
			});
		});
	}
// ACCOUNT PAGE

// CHAT PAGE
	public sidebarPopulate() { 
		return ("Stuff");
	}
}
