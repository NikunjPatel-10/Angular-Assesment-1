import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  public displaydata: any
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.displaydata = this.route.snapshot.queryParams
    console.log(this.route.snapshot.queryParams);
  }

}
