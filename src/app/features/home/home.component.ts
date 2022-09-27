import { Component, OnInit } from '@angular/core';
import {ProductStore} from "../../core/Store/product.store";
import {ProductModel} from "../../shared/models/product.model";
import {CartStore} from "../../core/Store/cart.store";
import {CartService} from "../../shared/services/cart.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myProductStore: ProductModel[] = this.productStore.getProducts();
  myProductForm: FormGroup = new FormGroup({});

  constructor(private productStore: ProductStore,
              private cartService: CartService,
              private fb:FormBuilder,
              private productService:ProductService) { }

  ngOnInit(): void {
    this.myProductForm = this.fb.group({
      title: this.fb.control(''),
      price: this.fb.control(''),
      category: this.fb.control(''),
      inStock: this.fb.control('')
    })
  }

  addProductToCart(product: ProductModel) {
    this.cartService.addProductToCart(product);
  }
  addProductToStore(product:ProductModel){
    this.productService.addNewProduct(product);
    // console.log(product);
  }
}
