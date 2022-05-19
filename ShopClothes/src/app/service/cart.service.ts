import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class cartService {
    items: Product[] = [];
  /* . . . */
  constructor(
      private http:HttpClient
  ){}
    addToCart(product: Product) {
      this.items.push(product);
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
  /* . . . */
  }