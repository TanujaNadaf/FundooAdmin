import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,AppRoutingModule,FormsModule,ReactiveFormsModule],
      providers: [AuthGuard],
      declarations:[AdminloginComponent,AdminregisterComponent,AdmindashboardComponent,UserlistComponent,OrdersComponent]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
