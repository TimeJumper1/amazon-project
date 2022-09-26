import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';



@NgModule({
    declarations: [
        FormComponent,
        CardComponent
    ],
    exports: [
        CardComponent,
        FormComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
