import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from "./layout/header/header.component";
import {RouterLink} from "@angular/router";
import { CategoryPipePipe } from './pipes/category-pipe.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryPipePipe
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        CategoryPipePipe
    ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class CoreModule {
}
