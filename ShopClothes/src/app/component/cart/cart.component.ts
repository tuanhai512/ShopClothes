import { Component } from '@angular/core';
import { cartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products = this.cartService.getItems();

  constructor(
    private cartService: cartService
  ) { }
}