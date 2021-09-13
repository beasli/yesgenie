import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { MyAccountPage } from '../my-account/my-account.page';
import { ChangePasswordPage } from '../change-password/change-password.page';
import { YesServiceService } from 'src/app/yes-service.service';
import { SearchPage } from '../search/search.page';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.page.html',
  styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage implements OnInit {

  userdata: any;

  constructor(public nav: NavController, public modalCtrl: ModalController, public services: YesServiceService,) { }

  ngOnInit() {
  }


  async opensearch() {
    const modal = await this.modalCtrl.create({
        component: SearchPage
    });
    return await modal.present();
}


  ionViewWillEnter() {


    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    console.log(this.userdata);

}

  async updateprofile(){
  const modal = await this.modalCtrl.create({
    component: MyAccountPage
});
return await modal.present();
}

contactinfo() {
  this.nav.navigateForward("contact-info");
}

shippingaddress() {
  this.nav.navigateForward("bs-shipping-address");
}


multipleshippingaddress() {
  this.nav.navigateForward("multiple-shipping-address");
}

goToCartPage(){
  this.nav.navigateForward("bs-cart");
}


  async changepassword(){
  const modal = await this.modalCtrl.create({
    component: ChangePasswordPage
});
return await modal.present();
}


}
