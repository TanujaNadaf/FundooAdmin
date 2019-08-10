import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import{Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  
  constructor(private userService:UserService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]],
      
    });
    
  }
  get f() { return this.loginForm.controls; }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("data in register",this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(response=>{
      console.log("Response to login",response);
      localStorage.setItem('token',response["id"]); 
      this.router.navigate(['admindashboard']);
    },error=>{
      console.log("Error in login",error);
    })
  }
  
}
