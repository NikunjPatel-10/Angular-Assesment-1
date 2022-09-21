import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipePipe } from './currency-pipe.pipe';




@NgModule({
  declarations: [
    CurrencyPipePipe,
  
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CurrencyPipePipe,
 
  ]
})
export class SharedModule { }
