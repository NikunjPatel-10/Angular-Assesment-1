import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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

  EditData(data: any, id: number) {
      this.api.UpdateData(data, id).subscribe(res => {
      this.apiEditData = res
      // console.log(this.apiEditData);
      this.myOutput.emit(this.apiEditData);
    })
   
  }

  public getApiData(): void {
    this.api.getData().subscribe(res => {
      this.parentdata = res;
      // console.log(this.parentdata);

    })
  }
}
