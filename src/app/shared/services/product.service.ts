import {ProductStore} from "../../core/Store/product.store";
import {Injectable} from "@angular/core";
import {ProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private store:ProductStore) {
  }

  availability(id: number): boolean {
    let element = this.store.getById(id)
    return !!(element && element.inStock >= 1);
  }

  removeProduct(id:number,number:number = 1): void{
    let list: ProductModel[] | undefined = this.store.getProducts()
    let element: ProductModel| undefined = this.store.getById(id)
    if (element){
      element.inStock -= number;
      list[id] = element
      this.store.setProducts(list)
    }
  }

  addNewProduct(product:ProductModel): void{
    let list: ProductModel[] | undefined = this.store.getProducts()
    list.push(product)
    this.store.setProducts(list)
  }

  updateProduct(product:ProductModel): void{
    let list: ProductModel[] | undefined = this.store.getProducts();
    let id: number = product.id;
    list[id] = product;
    this.store.setProducts(list);
  }
}




