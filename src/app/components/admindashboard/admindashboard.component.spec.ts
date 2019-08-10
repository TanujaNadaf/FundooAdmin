import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmindashboardComponent } from './admindashboard.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AdminloginComponent } from '../../components/adminlogin/adminlogin.component';

import { AdminregisterComponent } from '../../components/adminregister/adminregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../../auth.guard';
import { UserlistComponent } from '../../components/userlist/userlist.component';
import { OrdersComponent } from '../../components/orders/orders.component';
describe('AdmindashboardComponent', () => {
  let component: AdmindashboardComponent;
  let fixture: ComponentFixture<AdmindashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppRoutingModule,FormsModule, ReactiveFormsModule],
      declarations: [ AdmindashboardComponent,AdminloginComponent, AdminregisterComponent,UserlistComponent,OrdersComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
