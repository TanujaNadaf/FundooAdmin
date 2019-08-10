import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
public cartId:string;
public orderlist=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUserCartList()
  }
  getUserCartList(){
    this.cartId=localStorage.getItem('token');
    this.userService.getUserCartList().subscribe(response=>{
      console.log("Response to get all user cart list",response)
      this.orderlist=response['data'];
    },error=>{
      console.log("Error in getting all user cart list",error);
    })
  }
}
