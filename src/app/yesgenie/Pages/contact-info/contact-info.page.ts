import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController, MenuController, ToastController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YesServiceService } from 'src/app/yes-service.service';
import { ConfigService } from '../../providers/config/config.service';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.page.html',
  styleUrls: ['./contact-info.page.scss'],
})
export class ContactInfoPage implements OnInit {

  Id: any;
  responseData: any;
  responseDataCity: any;
  userdata: any;
  token: any;
  responseDatainfo: any;



  constructor(public loadingController: LoadingController, private router: Router, private route: ActivatedRoute, public services: YesServiceService, public nav:NavController, public menuCtrl: MenuController,
     public config: ConfigService, translate: TranslateService, private toastCtrl: ToastController,) { }

  ngOnInit() {
  }


  ionViewWillEnter() {

    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token);

    this.Personalinfo();

  }
  

  Personalinfo() {

    const  userData = 'token=' + this.token;

    console.log(userData);
    this.services.Getpersonalinfo(userData).subscribe(result => {
    this.responseDatainfo = result.response[0];
    console.log(this.responseDatainfo);
    if (this.responseDatainfo.Status === 0) {
    this.presentToast(this.responseDatainfo.Message);
   } else {
    //  console.log(this.responseData);
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


  getallstate(state) {
  
    this.services.StateByCountry(state).subscribe(result => {
    this.responseData = result.response;
    if (this.responseData.Status === 0) {
    } else {
    console.log(this.responseData);
    }
    }, error => {
    });
    }


    Citiesbystate(cit) {

      this.services.Citiesbystate(cit).subscribe(result => {
      this.responseDataCity = result.response;
      if (this.responseDataCity.Status === 0) {
      } else {
      console.log(this.responseDataCity);
      }
      }, error => {
      });
      }


      goToShippingAddress(){
        this.nav.navigateForward("bs-settings");
      }

}
