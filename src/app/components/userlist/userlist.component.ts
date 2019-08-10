import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  public userList=[];
  public cartId:String;
  public number=0;
  public userStatics=[];
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.getAdminUserList();
    this.getUserStatics();
  }
  getAdminUserList(){
    this.userService.getAdminUserList().subscribe(response=>{
      console.log("Response to get admin user list",response);
      this.userList=response['data']['data'];
    },error=>{
      console.log("error in getting admin user list",error);
    })
     }
 getUserStatics(){
  this.userService.getUserStatics().subscribe(response=>{
    console.log("Response to get user statics",response);
    this.userStatics=response['data']['details'];
  },error=>{
    console.log("error in getting user statics",error);
  })
 }



}
