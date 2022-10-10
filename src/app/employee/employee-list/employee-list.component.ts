import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeData } from '../employee.modal';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() parentdata: any
  @Output() myOutput: EventEmitter<string>;

  public apiEditData: any


  constructor(private route: Router, private api: ApiService) {
    this.myOutput = new EventEmitter();
  }

  ngOnInit(): void {
  }

  deleteRow(data: any) {
    this.api.DeleteData(data).subscribe(res => {
      this.getApiData()
    })
  }
  displayDetails(data: any) {
    console.log(data, 'sssssss')
    this.route.navigate(['employee', 'employee-detail'], { queryParams: data });
  }

  EditData(data: any) {
    this.myOutput.emit(data)
  }

  // EditData(data: any, id: any) {
  //   this.api.UpdateData(data, id).subscribe(res => {
  //     this.apiEditData = res;
  //     this.myOutput.emit(this.apiEditData)
  //   })
  // }

  public getApiData(): void {
    this.api.getData().subscribe(res => {
      this.parentdata = res;
      // console.log(this.parentdata);

    })
  }
}
