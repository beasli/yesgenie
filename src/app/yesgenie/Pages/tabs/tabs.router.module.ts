import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';



const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'bs-home',
        children: [

          { path: '', loadChildren: '../home-pages/home6/home6.module#Home6PageModule' },

        ]
      },


      {
        path: 'bs-wish-list',
        children: [

          { path: '', loadChildren: '../wish-list/wish-list.module#WishListPageModule' },

        ]
      },

      {
        path: 'bs-cart',
        children: [

          { path: '', loadChildren: '../cart/cart.module#CartPageModule' },

        ]
      },


      {
        path: 'bs-categories',
        children: [

          { path: '', loadChildren: '../categorie-pages/categories5/categories5.module#Categories5PageModule' },

        ]
      },




      {
        path: 'nearest-product',
        children: [

          { path: '', loadChildren: '../nearest-product/nearest-product.module#NearestProductPageModule' },

        ]
      },


      {
        path: 'wallet',
        children: [

          { path: '', loadChildren: '../wallet/wallet.module#WalletPageModule' },

        ]
      }





    ]
},


];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class TabsPageRoutingModule {}