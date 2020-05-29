import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'register-logistic', loadChildren: './register-logistic/register-logistic.module#RegisterLogisticPageModule' },
  { path: 'register-customer', loadChildren: './register-customer/register-customer.module#RegisterCustomerPageModule' },
  { path: 'logistic', loadChildren: './logistic/logistic.module#LogisticPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'store-orders', loadChildren: './store-orders/store-orders.module#StoreOrdersPageModule' },
  { path: 'store-logistic', loadChildren: './store-logistic/store-logistic.module#StoreLogisticPageModule' },
  { path: 'sell-stats', loadChildren: './sell-stats/sell-stats.module#SellStatsPageModule' },
  { path: 'stats', loadChildren: './stats/stats.module#StatsPageModule' },
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
  {
    path: 'riders',
    loadChildren: () => import('./riders/riders.module').then( m => m.RidersPageModule)
  },  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
