import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateShippingAddressPage } from './update-shipping-address.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateShippingAddressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateShippingAddressPage]
})
export class UpdateShippingAddressPageModule {}
