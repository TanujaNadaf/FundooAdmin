import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginComponent } from './adminlogin.component';
import { AdmindashboardComponent } from '../../components/admindashboard/admindashboard.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AdminregisterComponent } from '../../components/adminregister/adminregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../../auth.guard';
import { UserlistComponent } from '../../components/userlist/userlist.component';
import { OrdersComponent } from '../../components/orders/orders.component';
describe('AdminloginComponent', () => {
  let component: AdminloginComponent;
  let fixture: ComponentFixture<AdminloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
      declarations: [AdminloginComponent, AdmindashboardComponent, AdminregisterComponent, UserlistComponent, OrdersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('email field validity', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
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
    let password = component.loginForm.controls['password'];
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
  it('submitting a form', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['email'].setValue("test@test.com");
    component.loginForm.controls['password'].setValue("123456789");
    expect(component.loginForm.valid).toBeTruthy();

    
    // Trigger the login function
    component.login();

    
});
});
