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
  selector: 'app-update-shipping-address',
  templateUrl: './update-shipping-address.page.html',
  styleUrls: ['./update-shipping-address.page.scss'],
})
export class UpdateShippingAddressPage implements OnInit {
  userdata: any;
  token: any;
  updatePro: FormGroup;
  responseDataAddress: any;
  responseDatainfo: any;
  Id: string;

  constructor(public loadingController: LoadingController, private router: Router, private route: ActivatedRoute, public services: YesServiceService, public nav:NavController, public menuCtrl: MenuController,
    public shared: SharedDataService, public config: ConfigService, translate: TranslateService, public formBuilder: FormBuilder, private toastCtrl: ToastController,) {

      // setTimeout(()=>{                    
      //   this.ProUpdate();
      // }, 500);


    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token);

   // this.Personalinfo();
      
     }


  ngOnInit() {
    this.ProUpdate();
  }



  ionViewWillEnter() {

    this.Id = this.route.snapshot.paramMap.get('id');
    console.log(JSON.parse(this.Id));
      //  this.subcategory();
        this.Getshippingaddressbyid(this.Id);

  }




  Getshippingaddressbyid(id) {
    const  userData = 'token=' + this.token + '&id=' + id;
  
    console.log(userData);
  
     this.services.Getshippingaddressbyid(userData).subscribe(result => {
     this.responseDatainfo = result.response.shipping_address[0];
  //   this.resMultipleAdd = this.responseAddress.response.shipping_address;
     console.log(this.responseDatainfo);
            
   }, error => {
  
   });
  
  }


  Updatemultipleshippingaddress() {

    const  userData = 'token=' + this.token + '&id=' + this.Id + '&address_detail=' + this.updatePro.get('address_detail').value + '&shipping_first_name=' + this.updatePro.get('shipping_first_name').value + '&shipping_email=' + this.updatePro.get('shipping_email').value
    + '&shipping_phone_number=' + this.updatePro.get('shipping_phone_number').value + '&shipping_address_1=' + this.updatePro.get('shipping_address_1').value + '&shipping_address_2=' + this.updatePro.get('shipping_address_2').value
    + '&shipping_country_id=' + this.updatePro.get('shipping_country_id').value + '&shipping_state=' + this.updatePro.get('shipping_state').value + '&shipping_city=' + this.updatePro.get('shipping_city').value + '&shipping_zip_code=' + this.updatePro.get('shipping_zip_code').value;
    
    console.log(userData);
    this.services.Updatemultipleshippingaddress(userData).subscribe(result => {
    this.responseDataAddress = result;
    if (this.responseDataAddress === 0) {
    this.presentToast(this.responseDataAddress);
   } else {
    console.log(this.responseDataAddress);
    this.presentToast('Your address has been updated successfully');
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


  goToCartPage(){
    this.nav.navigateForward("bs-cart");    
  }

}
