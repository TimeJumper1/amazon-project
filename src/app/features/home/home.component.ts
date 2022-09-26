import { Component, OnInit } from '@angular/core';
import {ProductStore} from "../../core/Store/product.store";
import {ProductModel} from "../../shared/models/product.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myProductStore: ProductModel[] = this.productStore.getProducts();
  myCart: ProductModel[] = [];

  constructor(private productStore: ProductStore) { }

  ngOnInit(): void {
  }

  addProductToCart(product: ProductModel) {
    this.myCart.push(product);
    console.log(this.myCart);
  }
}
