import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MultipleShippingAddressPage } from './multiple-shipping-address.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleShippingAddressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MultipleShippingAddressPage]
})
export class MultipleShippingAddressPageModule {}
