import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserModule } from '../user/user.module';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeModule } from '../employee/employee.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    AppRoutingModule,
    EmployeeModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
