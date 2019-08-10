import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private httpService:HttpService,private router:Router){}
 canActivate():boolean{
   if(this.httpService.loggedIn()){
    return true;
   }else{
     this.router.navigate(['adminlogin']);
    return false;
   }
 }
}
