import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {DetailComponent} from "./features/detail/detail.component";
import {CartComponent} from "./features/cart/cart.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'cart', component: CartComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
