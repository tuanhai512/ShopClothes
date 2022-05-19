import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { cartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class DetailComponent implements OnInit {
  product = new Product;
  constructor(private route:ActivatedRoute,
    private productService:ProductService,
    private cartService:cartService) { }

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }
  getRoute(id:any){
    this.productService.find(id).subscribe((res:any)=>{
      this.product = res;
    });    
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}


