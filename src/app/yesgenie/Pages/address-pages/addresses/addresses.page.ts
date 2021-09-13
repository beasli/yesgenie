import { Component, OnInit } from '@angular/core';


import { ModalController, NavController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { SelectCountryPage } from '../../select-country/select-country.page';
import { SelectZonesPage } from '../../select-zones/select-zones.page';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';

import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YesServiceService } from 'src/app/yes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {


  Id: any;
  responseData: any;
  responseDataCity: any;
  userdata: any;
  token: any;
  responseDataAddress: any;
  responseDatainfo: any;
  updatePro: FormGroup;
  shipping_state_user: any;


  constructor(public loadingController: LoadingController, private router: Router, private route: ActivatedRoute, public services: YesServiceService, public nav:NavController, public menuCtrl: MenuController,
    public shared: SharedDataService, public config: ConfigService, translate: TranslateService, public formBuilder: FormBuilder, private toastCtrl: ToastController,) {

      // setTimeout(()=>{                    
      //   this.ProUpdate();
      // }, 500);


    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token);

    this.Personalinfo();
      
     }


  ngOnInit() {

    this.ProUpdate();
    
  }



  Personalinfo() {
    const  userData = 'token=' + this.token;
    console.log(userData);
    this.services.Getpersonalinfo(userData).subscribe(result => {
    this.responseDatainfo = result.response[0];
    console.log(this.responseDatainfo);
    this.shipping_state_user = this.responseDatainfo.shipping_state;
    if (this.responseDatainfo.Status === 0) {
    this.presentToast(this.responseDatainfo.Message);
   } else {
    //  console.log(this.responseData);
    }
  }, error => {

  });
  }

  // async selectCountryPage(value) {
  //   let modal = await this.modalCtrl.create({
  //     component: SelectCountryPage
  //   });
  //   return await modal.present();
  // }

  // async selectZonePage(value) {
  //   let modal = await this.modalCtrl.create({
  //     component: SelectZonesPage
  //   });
  //   return await modal.present();
  // }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }

  async updateAddress() {
    const loadingElement = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    return await loadingElement.present();
  }


  ionViewWillEnter() {

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





      Addnewmultipleshippingaddress() {

        const  userData = 'token=' + this.token + '&address_detail=' + this.updatePro.get('address_detail').value + '&shipping_first_name=' + this.updatePro.get('shipping_first_name').value + '&shipping_email=' + this.updatePro.get('shipping_email').value
        + '&shipping_phone_number=' + this.updatePro.get('shipping_phone_number').value + '&shipping_address_1=' + this.updatePro.get('shipping_address_1').value + '&shipping_address_2=' + this.updatePro.get('shipping_address_2').value
        + '&shipping_country_id=' + this.updatePro.get('shipping_country_id').value + '&shipping_state=' + this.updatePro.get('shipping_state').value + '&shipping_city=' + this.updatePro.get('shipping_city').value + '&shipping_zip_code=' + this.updatePro.get('shipping_zip_code').value;
        
        console.log(userData);
        this.services.Addnewmultipleshippingaddress(userData).subscribe(result => {
        this.responseDataAddress = result;
        if (this.responseDataAddress === 0) {
        this.presentToast(this.responseDataAddress);
       } else {
        console.log(this.responseDataAddress);
        this.presentToast('Address Added Successfully');
       // this.events.publish("updateSideMenu");
        this.nav.navigateForward("multiple-shipping-address");    
        }
      }, error => {
    
      });
      }



      ProUpdate() {
        this.updatePro = this.formBuilder.group({
    
          address_detail: ['', Validators.compose([Validators.required])],
          shipping_first_name: ['', Validators.compose([Validators.required])],
          shipping_email: ['', Validators.compose([Validators.required])],
          shipping_phone_number: ['', Validators.compose([Validators.required])],
          shipping_address_1: ['', Validators.compose([Validators.required])],
          shipping_address_2: [''],
          shipping_country_id: ['', Validators.compose([Validators.required])],
          shipping_state: ['', Validators.compose([Validators.required])],
          shipping_city: ['', Validators.compose([Validators.required])],
          shipping_zip_code: ['', Validators.compose([Validators.required])],
        });
    }
    
      async presentToast(msg) {
        const toast = await this.toastCtrl.create({
          message: msg,
          duration: 2000
        });
        toast.present();
      }

  
}