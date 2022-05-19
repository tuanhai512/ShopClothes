import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  public response!: { dbPath: '' };

  constructor(
    private formBuilder: FormBuilder,
    private empService: ProductService
  ) {}

  public uploadFinished = (event: any) => {
    this.response = event;
  };
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44377/${serverPath}`;
  };

  ngOnInit(): void {
    this.getAllProduct();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      img: [''],
      quantity: [''],
      oriPrice: [''],
    });
    this.empCreate = this.formBuilder.group({
      name: [''],
      price: [''],
      img: [''],
      company: [''],
      sex: [''],
      quantity: [''],
      oriPrice: [''],
    });
  }

  addProduct() {
    console.log(this.empCreate);
    this.empObj.ID = this.empCreate.value.id;
    this.empObj.NAME = this.empCreate.value.name;
    this.empObj.IMAGE = this.response?.dbPath;
    this.empObj.COMPANY = this.empCreate.value.company;
    this.empObj.SEX = this.empCreate.value.sex;
    this.empObj.PRICE = this.empCreate.value.price;
    this.empObj.ORI_PRICE = this.empCreate.value.oriPrice;
    this.empObj.QUANTITY = this.empCreate.value.quantity;
    this.empService.addProduct(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.empCreate.reset();
        this.getAllProduct();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllProduct() {
    this.empService.getAllProduct().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  editProduct(emp: Product) {
    this.empDetail.controls['id'].setValue(emp.ID);
    this.empDetail.controls['name'].setValue(emp.NAME);
    console.log(this.empDetail.controls['name'].setValue(emp.NAME));
  }
  updateProduct() {
    this.empObj.NAME = this.empDetail.value.name;
    this.empObj.ID = this.empDetail.value.id;

    console.log(this.empDetail.value.name);
    console.log(this.empDetail.value.id);
    this.empService.updateProduct(this.empObj).subscribe(
      (res) => {
        console.log(res);
        this.getAllProduct();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteProduct(emp: Product) {
    this.empService.deleteProduct(emp).subscribe(
      (res) => {
        console.log(res);
        alert('Xóa thành công ');
        this.getAllProduct();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
