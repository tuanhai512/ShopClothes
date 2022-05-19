import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

import { Product } from 'src/app/model/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  empObj: Product = new Product();
  empList: Product[] = [];
  empDetail!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private CartService:cartService,
    private empService: ProductService

  ) { }

  ngOnInit(): void {
    this.getAllProduct();
    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      img: [''],
      oriPrice: [''],
    });
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
  addToCart(product: Product) {
    this.CartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
