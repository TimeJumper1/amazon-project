import {ProductStore} from "../../core/Store/product.store";
import {Injectable} from "@angular/core";
import {ProductModel} from "../models/product.model";
import {CartStore} from "../../core/Store/cart.store";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private store:CartStore) {
  }

  // da aggiungere che quando arrivi a 0 rimuovi totalmente il prodotto.
  removeProductToCart(id:number,number:number = 1): void{
    let list: ProductModel[] | undefined = this.store.getProducts()
    let element: ProductModel| undefined = this.store.getById(id)
    if (element){
      if(element.inStock>=number){
        element.inStock -= number;
        if(element.inStock == 0){
          list.splice(id-1,1)
        } else {
          list[id-1] = element}
      } else{
        list.splice(id-1,1)
      }
      this.store.setProducts(list)
    }
  }

  deleteFromCart(index:number): void{
    let list: ProductModel[] | undefined = this.store.getProducts()
    list.splice(index,1)
    this.store.setProducts(list)
  }

  addProductToCart(product:ProductModel): void{
    let list: ProductModel[] | undefined = this.store.getProducts()
    list.push(product)
    this.store.setProducts(list)
    console.log(list)
  }
}




