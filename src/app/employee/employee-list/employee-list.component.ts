import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() parentdata: any
  @Output() myOutput: EventEmitter<string>;


  constructor(private route: Router) {
    this.myOutput = new EventEmitter();
  }

  ngOnInit(): void {
  }
  deleteRow(data: any) {
    var delBtn = confirm(' Do you want to delete ?');
    if (delBtn == true) {
      this.parentdata.splice(data, 1);
    }
  }
  displayDetails(data: any) {
    console.log(data,'sssssss')
    this.route.navigate(['employee', 'employee-detail'], { queryParams: data  });
  }

  EditData(data:any){
   this.myOutput.emit(data);
  }
  
}
