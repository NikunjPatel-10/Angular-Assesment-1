import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeData } from '../employee.modal';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public userForm: FormGroup;
  public isSubmitted: boolean;
  public newdata: any
  public GetData: any
  public employeedata: EmployeeData[]
  public addBtn: boolean;
  public id: any

  constructor(private formbuilder: FormBuilder, private router: Router, public api: ApiService) {
    this.employeedata = [];
    this.isSubmitted = false;
    this.newdata = [];
    this.addBtn = true;

    this.userForm = this.formbuilder.group({

      name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      DOB: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      id: []

    })
  }

  ngOnInit(): void {

    this.getApiData();

  }
  get userFormControl() {
    return this.userForm.controls;
  }

  getFormData() {
    this.isSubmitted = true;

    if (this.userForm.value) {

      if (this.userForm.value?.id) {

        this.api.UpdateData(this.userForm.value, this.userForm.value?.id).subscribe(res => {
          this.getApiData();
        })
      } else {
        this.addBtn = true;

        this.api.postData(this.userForm.value).subscribe(res => {
          // console.log(res)
          this.getApiData();
        })
      }
    }
  }

  public getApiData(): void {
    this.api.getData().subscribe(res => {
      this.GetData = res;
      console.log(this.GetData);

    })
  }


  GetEditValue(editdata: any) {
    this.addBtn = false
    // console.log(editdata);
    // this.newdata = editdata
    // this.router.navigate(['employee/edit'])
    this.userForm.patchValue(editdata);
    // this.getApiData();
    // console.log(editdata);



  }

  public reset(): void {
    this.userForm.reset();
    this.userForm.clearValidators();
    this.isSubmitted = false;
    this.addBtn = true;

  }

}
