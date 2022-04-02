import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Employee } from './../../model/employee';
import { EmployeeService } from './../../service/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  empDetail!: FormGroup;

  empObj: Employee = new Employee();
  empList: Employee[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private http :HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllEmployee();
    this.empDetail = this.formBuilder.group({
      name: [''],
    });
  }

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.ID = this.empDetail.value.id;
    this.empObj.NAME = this.empDetail.value.name;

    this.empService.addEmployee(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.empDetail.reset();
        this.getAllEmployee();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // getAllEmployee(){
  //   this.http.get<any>('https://localhost:44377/api/Categories').subscribe((data)=>
  //   {
  //     this.empList = data;
  //     console.log(this.empList);
  //   })
  // }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
}
