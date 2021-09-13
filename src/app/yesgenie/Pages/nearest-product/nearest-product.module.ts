import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '../../components/share/share.module'; 



import { NearestProductPage } from './nearest-product.page';

const routes: Routes = [
  {
    path: '',
    component: NearestProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NearestProductPage]
})
export class NearestProductPageModule {}
