import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  dbUrl=environment.url;
  constructor(private http:HttpClient) { }
 post(url,registerDetails){
  return this.http.post(this.dbUrl+url,registerDetails)
 }
get(url){
  const httpOptions = {
    headers: new HttpHeaders(
      {
        Authorization: localStorage.getItem('token'),
        
      })
  };
   
  return this.http.get(this.dbUrl+url,httpOptions);
}
loggedIn(){
  
  console.log("logged in",!!localStorage.getItem('token'))
  return !!localStorage.getItem('token');
}
}
