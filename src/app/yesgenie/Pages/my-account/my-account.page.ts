import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LoadingController, NavController, MenuController, ToastController, ModalController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { YesServiceService } from 'src/app/yes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';



@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  responseData: any;

  userdata: any;

  updatePro: FormGroup;


  token: any;

  myAccountData = {
    userneme: '',
    email: '',
    mobile: '',
    password: ''
  };

  password = '';

  constructor(public mdCtrl: ModalController, public services: YesServiceService, public menuCtrl: MenuController, private toastCtrl: ToastController, public shared: SharedDataService, public config: ConfigService, translate: TranslateService, public loadingController:LoadingController, public nav:NavController,
    public formBuilder: FormBuilder, private router: Router, public events: Events) { }

  ngOnInit() {
    this.ProUpdate();
  }
  async isUpdated() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 2000
    });
    return await loading.present();
  }
  goToCartPage(){
    this.nav.navigateForward("bs-cart");
    this.mdCtrl.dismiss();
  }
  goToSearchPage(){
    this.nav.navigateForward("bs-search");
    this.mdCtrl.dismiss();
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {

    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token);

    this.Personalinfo()
  }



  Personalinfo() {

    const  userData = 'token=' + this.token;

    console.log(userData);
    this.services.Getpersonalinfo(userData).subscribe(result => {
    this.responseData = result.response[0];
    console.log(this.responseData);
    if (this.responseData.Status === 0) {
    this.presentToast(this.responseData.Message);
   } else {
    //  console.log(this.responseData);
    }
  }, error => {

  });
  }


  Updateprofile() {

    const  userData = 'token=' + this.token + '&username=' + this.updatePro.get('username').value + '&phone_number=' + this.updatePro.get('phone_number').value;

    console.log(userData);
    this.services.Updateprofile(userData).subscribe(result => {
    this.responseData = result.response[0];
    if (this.responseData.Status === 0) {
    this.presentToast(this.responseData.Message);
   } else {
    console.log(this.responseData);
    localStorage.setItem('userdata', JSON.stringify(this.responseData));
    // this.presentToast('User successfully registered');
    this.events.publish("updateSideMenu");
    this.router.navigateByUrl('user-settings');
    this.dismiss();
    
    }
  }, error => {

  });
  }


  ProUpdate() {
    this.updatePro = this.formBuilder.group({

      username: ['', Validators.compose([Validators.required])],
      phone_number: ['', Validators.compose([Validators.required])],
    });
}

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


  dismiss() {
    this.mdCtrl.dismiss();
  }

}
