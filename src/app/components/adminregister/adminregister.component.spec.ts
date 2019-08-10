import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminregisterComponent } from './adminregister.component';
import { AdminloginComponent } from '../../components/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from '../../components/admindashboard/admindashboard.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../../auth.guard';
import { UserlistComponent } from '../../components/userlist/userlist.component';
import { OrdersComponent } from '../../components/orders/orders.component';
describe('AdminregisterComponent', () => {
  let component: AdminregisterComponent;
  let fixture: ComponentFixture<AdminregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule,AppRoutingModule,HttpClientModule],
      declarations: [ AdminregisterComponent,AdminloginComponent,AdmindashboardComponent,UserlistComponent,OrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('firstname field validilty',()=>{
    let errors = {};
    let firstName = component.registerForm.controls['firstName'];
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy();
    firstName.setValue("abc");
    errors = firstName.errors || {};
    expect(errors['required']).toBeFalsy();
  })
  it('lastname field validilty',()=>{
    let errors = {};
    let lastName = component.registerForm.controls['lastName'];
    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy();
    lastName.setValue("xyz");
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
  })
  it('email field validity', () => {
    let errors = {};
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
  })
  it('password field validity', () => {
    let errors = {};
    let password = component.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy()
  })
  it('password field validity', () => {
    let errors = {};
    let confirmPassword = component.registerForm.controls['confirmPassword'];
    errors = confirmPassword.errors || {};
    expect(errors['required']).toBeTruthy();
    confirmPassword.setValue("123456789");
    errors = confirmPassword.errors || {};
    expect(errors['required']).toBeFalsy();
   
  })
  it('submitting a form', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['firstName'].setValue("abc");
    component.registerForm.controls['lastName'].setValue("xyz");
    component.registerForm.controls['email'].setValue("test@test.com");
    component.registerForm.controls['password'].setValue("123456789");
    component.registerForm.controls['confirmPassword'].setValue("123456789");
    expect(component.registerForm.valid).toBeTruthy();

    
    // Trigger the login function
    component.register();

    
});
});
