import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
