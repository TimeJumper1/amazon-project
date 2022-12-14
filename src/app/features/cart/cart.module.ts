import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {CoreModule} from "../../core/core.module";



@NgModule({
    declarations: [
        CartComponent
    ],
    exports: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CoreModule
    ]
})
export class CartModule { }
