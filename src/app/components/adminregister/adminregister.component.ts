import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.scss']
})
export class AdminregisterComponent implements OnInit {
  serviceCards=[];
  registerForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]],
      confirmPassword: ['', Validators.required],
      service:'Advance'
    });
    
  }
  get f() { return this.registerForm.controls; }
  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log("Form data",this.registerForm.value);
     this.userService.register(this.registerForm.value).subscribe(response => {
      console.log("Response to registration", response);
      this.router.navigate(['adminlogin']);
    }, error => {
      console.log("Error in registration", error);
    })

  }
  
}
