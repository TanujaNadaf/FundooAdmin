import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import {AdminregisterComponent} from '../app/components/adminregister/adminregister.component'
import{AdmindashboardComponent} from '../app/components/admindashboard/admindashboard.component'
import { AuthGuard } from './auth.guard';
import { OrdersComponent } from './components/orders/orders.component';
import { UserlistComponent } from './components/userlist/userlist.component';
const routes: Routes = [
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminregister',component:AdminregisterComponent},
  {path:'admindashboard',component:AdmindashboardComponent,canActivate:[AuthGuard],
  children: [
    {path:'orderlist',component:OrdersComponent},
    {path:'userlist',component:UserlistComponent}
  ]

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
