import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, MenuController, ToastController, ModalController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { YesServiceService } from 'src/app/yes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  token: any;
  responseData: any;
  userdata: any;

  constructor(public mdCtrl: ModalController, public services: YesServiceService, public menuCtrl: MenuController, private toastCtrl: ToastController, public shared: SharedDataService, public config: ConfigService, public loadingController:LoadingController, public nav:NavController,
    public formBuilder: FormBuilder, private router: Router) {

      const userDetails = localStorage.getItem('userdata');

      this.userdata = JSON.parse(userDetails);
  
      this.token = this.userdata.token;
  
      console.log(this.token);
                  
      
     }
    
  ngOnInit() {

  }


  ionViewWillEnter() {


    this.Personalinfo();
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
    console.log(this.responseData);
    }
  }, error => {

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
