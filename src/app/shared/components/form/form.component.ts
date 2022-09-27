import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() myFormProduct:FormGroup = new FormGroup({});
  @Output() myFormEmitter:EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  constructor() { }

  ngOnInit(): void {
  }
  emitProduct(){
    this.myFormEmitter.emit(this.myFormProduct.value)
    console.log(this.myFormProduct.value)
  }
}
