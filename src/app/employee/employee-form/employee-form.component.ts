import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public userForm: FormGroup
  public isSubmitted: boolean;

  public newdata: any
  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.isSubmitted = false;
    this.newdata = [];
    this.userForm = this.formbuilder.group({
      'name': ['', [Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(3)]],
      'gender': ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      'DOB': ['', [Validators.required]],
      'salary': ['', [Validators.required, Validators.pattern("[0-9]*")]]
    })
  }

  ngOnInit(): void {

  }
  get userFormControl() {
    return this.userForm.controls;
  }

  public getFormData(): void {
    this.isSubmitted = true;
    console.log(this.userForm.value)
    this.newdata.push(
      {
        name: this.userForm.value.name,
        gender: this.userForm.value.gender,
        DOB: this.userForm.value.DOB,
        salary: this.userForm.value.salary
      }
    )
    // this.userForm.reset();
    this.userForm.clearValidators();
  }

  GetEditValue(editdata: any) {
    this.userForm.patchValue(editdata);
    console.log(editdata);

  }
  public reset(): void {
    this.userForm.reset();
    this.userForm.clearValidators();
   
  }

}
