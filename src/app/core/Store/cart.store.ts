import {ProductModel} from "../../shared/models/product.model";
import {Injectable} from "@angular/core";


const PRODUCTS_CART: ProductModel[] = []

@Injectable({
  providedIn: 'root'
})
export class CartStore {

  private products_cart: ProductModel[] = PRODUCTS_CART;

  getProducts(): ProductModel[] {
    return this.products_cart;
  }

  setProducts(elementArray: ProductModel[]): void {
    this.products_cart = elementArray;
  }

  getById(id: number): ProductModel | undefined {
    return this.products_cart.find(u => u.id == id);
  }

  getByCategory(category: number): ProductModel[] | string {
    let result: ProductModel[] = [];
    let void_list: string  = "No products found"
    for (let e of this.products_cart){
      if (e.category == category){
          result.push(e)
      }
    }
    if (result.length == 0){
      return void_list
    }
    return result
  }
}


