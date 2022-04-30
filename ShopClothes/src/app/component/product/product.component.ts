import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Product } from './../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  empDetail!: FormGroup;
  empCreate!: FormGroup;
  empObj: Product = new Product();
  empList: Product[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private empService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      price:[''],
      oriPrice:[''],
      
    });
    this.empCreate = this.formBuilder.group({
      name: [''],
    });
  }

  addCategory() {
    console.log(this.empCreate);
    this.empObj.ID = this.empCreate.value.id;
    this.empObj.NAME = this.empCreate.value.name;

    this.empService.addCategory(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.empCreate.reset();
        this.getAllCategory();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllCategory() {
    this.empService.getAllCategory().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  editCategory(emp: Product) {
    this.empDetail.controls['id'].setValue(emp.ID);
    this.empDetail.controls['name'].setValue(emp.NAME);
    console.log(this.empDetail.controls['name'].setValue(emp.NAME));
  }
  updateCategory() {
    this.empObj.NAME = this.empDetail.value.name;
    this.empObj.ID = this.empDetail.value.id;

    console.log(this.empDetail.value.name);
    console.log(this.empDetail.value.id);
    this.empService.updateCategory(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.getAllCategory();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteCategory(emp: Product) {
    this.empService.deleteCategory(emp).subscribe(
      (res) => {
        console.log(res);
        alert('Xóa thành công ');
        this.getAllCategory();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
