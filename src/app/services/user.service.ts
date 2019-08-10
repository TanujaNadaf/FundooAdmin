import { Injectable } from '@angular/core';
import{HttpService} from '../services/http.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  register(registerDetails){
    console.log("In register of user service");
    return this.httpService.post('/user/adminSignUp',registerDetails);
  }
  login(loginDetails){
    return this.httpService.post('/user/adminLogin',loginDetails);
  }
  getAdminUserList(){
    return this.httpService.get('/user/getAdminUserList');
  }
  getUserCartList(){
    return this.httpService.get('/productcarts/userCartList');
  }
  getUserStatics(){
    return this.httpService.get('/user/UserStatics');
  }
  
}
