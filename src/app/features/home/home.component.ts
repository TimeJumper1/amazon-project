import { Component, OnInit } from '@angular/core';
import {ProductStore} from "../../core/Store/product.store";
import {ProductModel} from "../../shared/models/product.model";
import {CartStore} from "../../core/Store/cart.store";
import {CartService} from "../../shared/services/cart.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myProductStore: ProductModel[] = this.productStore.getProducts();

  constructor(private productStore: ProductStore, private cartService: CartService) { }

  ngOnInit(): void {
  }

  addProductToCart(product: ProductModel) {
    this.cartService.addProductToCart(product)
  }
}
