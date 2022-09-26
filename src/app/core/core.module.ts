import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from "./layout/header/header.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
