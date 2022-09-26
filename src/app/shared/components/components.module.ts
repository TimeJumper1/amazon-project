import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        FormComponent,
        CardComponent,
        ShippingFormComponent
    ],
  exports: [
    CardComponent,
    FormComponent,
    ShippingFormComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ComponentsModule { }
