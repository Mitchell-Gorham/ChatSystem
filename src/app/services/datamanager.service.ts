import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
const local = "../../../server/server_data";

@Injectable({
  providedIn: 'root'
})
export class DatamanagerService {

  constructor( private http:HttpClient ) { }
  
  public getLogin(email:string, pass:string): any {
    return(true);    
    //this.http.get(local).subscribe;

    }
  }
