import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserlistComponent } from './userlist.component';
import { OrdersComponent } from '../../components/orders/orders.component';
import { AdminregisterComponent } from '../../components/adminregister/adminregister.component';
import { AdminloginComponent } from '../../components/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from '../../components/admindashboard/admindashboard.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../../auth.guard';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppRoutingModule,FormsModule, ReactiveFormsModule,HttpClientModule],
      declarations: [ UserlistComponent, OrdersComponent,AdminregisterComponent,AdminloginComponent,AdmindashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
