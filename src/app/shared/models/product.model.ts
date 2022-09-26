import {CategoryEnum} from "./enums/category";

export interface ProductModel {
  id: number;
  title: string;
  price: number;
  category: CategoryEnum;
  inStock: number;
}
