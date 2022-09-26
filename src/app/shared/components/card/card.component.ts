import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() myProductStore: ProductModel[] | undefined;

  @Output() addEmitter: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitProduct(product: ProductModel) {
    this.addEmitter.emit(product)
  }
}
