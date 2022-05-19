import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/model/product';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    addToCart(product: Product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
  
}

