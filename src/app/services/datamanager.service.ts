import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatamanagerService {

  constructor( http:HttpClientModule) { }
  
  public getData(email:string, pass:string): boolean {
    
  }
}
