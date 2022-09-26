import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {ComponentsModule} from "./shared/components/components.module";
import {HomeModule} from "./features/home/home.module";
import {CartModule} from "./features/cart/cart.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        ComponentsModule,
        HomeModule,
        CartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
