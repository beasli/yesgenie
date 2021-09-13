import { Component, OnInit, ElementRef } from '@angular/core';


import { ModalController, NavController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { SelectCountryPage } from '../../select-country/select-country.page';
import { SelectZonesPage } from '../../select-zones/select-zones.page';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YesServiceService } from 'src/app/yes-service.service';


@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.page.html',
  styleUrls: ['./billing-address.page.scss'],
})
export class BillingAddressPage implements OnInit {


  Id: any;
  responseData: any;
  responseDataCity: any;
  userdata: any;
  token: any;
  responseDatainfo: any;



  public itemColor = [];
  public iconColorVar = "";
  data: any;
  billing = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email: '',
    phone: ''
  };
  billingCountryName = "";
  billingStateName = "";
  shipping = {
    name:'',
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email:'',
    phone:''
  };
  shippingCountryName = "";
  shippingStateName = "";
  constructor(public shared: SharedDataService,
    public modalCtrl: ModalController,
    public config: ConfigService,
    public nav: NavController,
    private elementRef: ElementRef,
    public loadingController: LoadingController, private router: Router, private route: ActivatedRoute, public services: YesServiceService, public menuCtrl: MenuController,
    translate: TranslateService, private toastCtrl: ToastController
    ) {
   
  }




  ngOnInit() {
  }

  async selectCountryPage(value) {
    let modal = await this.modalCtrl.create({
      component: SelectCountryPage
    });
    return await modal.present();
  }

  async selectZonePage(value) {
    let modal = await this.modalCtrl.create({
      component: SelectZonesPage
    });
    return await modal.present();
  }
  goToShippingAddress() {
    this.nav.navigateForward("bs-shipping-address");
  }
  goToShippingMethod(){
    this.nav.navigateForward("bs-order");

  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
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




}