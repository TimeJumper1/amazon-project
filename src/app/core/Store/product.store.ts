import {ProductModel} from "../../shared/models/product.model";
import {Injectable} from "@angular/core";


const PRODUCTS: ProductModel[] = [
  {
    id: 1,
    title: "La Doppia Via",
    price: 10.55,
    category: 0,
    inStock: 12,
  },
  {
    id: 2,
    title: "Scarpe Jordan-Max",
    price: 49.99,
    category: 3,
    inStock: 2,
  },
  {
    id: 3,
    title: "Nvidia 1060",
    price: 279.99,
    category: 1,
    inStock: 0,
  },
  {
    id: 4,
    title: "Red Lipstick",
    price: 7.99,
    category: 2,
    inStock: 2,
  },
  {
    id: 5,
    title: "500 GB Hard-disk",
    price: 149.99,
    category: 1,
    inStock: 4,
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductStore {

  private products: ProductModel[] = PRODUCTS;

  getProducts(): ProductModel[] {
    return this.products;
  }

  setProducts(elementArray: ProductModel[]): void {
    this.products = elementArray;
  }

  getById(id: number): ProductModel | undefined {
    return this.products.find(u => u.id == id);
  }

  getByCategory(category: number): ProductModel[] | string {
    let result: ProductModel[] = [];
    let void_list: string  = "No products found"
    for (let e of this.products){
      if (e.category == category){
          result.push(e)
      }
    }
    if (result.length == 0){
      return void_list
    }
    return result
  }


  getByPriceBetween(price_start: number, price_end: number=0): ProductModel[] | string {
    let result: ProductModel[] = [];
    let void_list: string  = "No products found"
    if(price_start > price_end){
        for (let e of this.products){
          if (e.price < price_start && e.price > price_end){
            result.push(e)
          }
        }
        if (result.length == 0){
          return void_list
        }
        return result
      }
    else {
        for (let e of this.products){
          if (e.price > price_end && e.price > price_start){
            result.push(e)
          }
        }
        if (result.length == 0){
          return void_list
        }
        return result
        }
    }

}


