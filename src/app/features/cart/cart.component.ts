import { Component, OnInit } from '@angular/core';
import {CartStore} from "../../core/Store/cart.store";
import {ProductModel} from "../../shared/models/product.model";
import {CartService} from "../../shared/services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  myCartStore: ProductModel[] = this.cartStore.getProducts();

  constructor(private cartStore: CartStore, public cartService: CartService) { }

  ngOnInit(): void {
  }

}
