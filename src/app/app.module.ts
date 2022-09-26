import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

<<<<<<< HEAD
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from "./shared/components/components.module";
>>>>>>> stefano

@NgModule({
  declarations: [
    AppComponent
  ],
<<<<<<< HEAD
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
=======
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule
    ],
>>>>>>> stefano
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
