import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

import { AdminregisterComponent } from './components/adminregister/adminregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AuthGuard } from './auth.guard';
import { UserlistComponent } from './components/userlist/userlist.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    
    AdminregisterComponent,
    
    AdmindashboardComponent,
    
    UserlistComponent,
    
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
