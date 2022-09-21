import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    ContactUsComponent,
  ]
})
export class UserModule { }
