import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductStore} from "../../../core/Store/product.store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() myProductStore: ProductModel[] | undefined;

  @Output() addEmitter: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() sendIdEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor(private productStore: ProductStore,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  emitProduct(product: ProductModel) {
    this.addEmitter.emit(product)
  }

  emitIndex(index: number) {
    this.sendIdEmitter.emit(index)
  }

  redirectToDetail(product: ProductModel) {
    this.router.navigateByUrl(`detail/${product.id}`).then();
  }

}
