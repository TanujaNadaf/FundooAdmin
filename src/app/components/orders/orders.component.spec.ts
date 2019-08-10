import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersComponent } from './orders.component';
import { AdminregisterComponent } from '../../components/adminregister/adminregister.component';
import { AdminloginComponent } from '../../components/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from '../../components/admindashboard/admindashboard.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../../auth.guard';
import { UserlistComponent } from '../../components/userlist/userlist.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppRoutingModule,FormsModule, ReactiveFormsModule,HttpClientModule],
      declarations: [ OrdersComponent,AdminregisterComponent,AdminloginComponent,AdmindashboardComponent,UserlistComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
