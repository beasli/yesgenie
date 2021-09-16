import { Component, OnInit, ApplicationRef } from '@angular/core';

import { ModalController, NavController, LoadingController, MenuController, ToastController} from '@ionic/angular';
import { SelectCountryPage } from '../../select-country/select-country.page';
import { SelectZonesPage } from '../../select-zones/select-zones.page';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YesServiceService } from 'src/app/yes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.page.html',
  styleUrls: ['./shipping-address.page.scss'],
})
export class ShippingAddressPage implements OnInit {


  Id: any;
  responseData: any;
  responseDataCity: any;
  userdata: any;
  token: any;
  responseDatainfo: any;

  responseDatatax: any;
  shipping_state_user: any;
  responseData1: any;
  totaltax: any;
  productid: any;
  product_quantity: any;
  thirdcategoryid: any;
  subcategoryid: any;
  categoryid: any;
  sellerid: any;
  unitprice: any;
  saleprice: any;
  quantity: any;
  shippingstate: any;
  vendorstate: any;

  updatePro: FormGroup;

  responseAddressDetails: any;

 // Checkboxes: any;

  checkboxes : boolean = true;

  billing = {
    shipping_first_name: '',
    shipping_email: '',
    shipping_phone_number: '',
    shipping_address_1: '',
    shipping_address_2: '',
    shipping_country_id: '',
    shipping_state: '',
    shipping_city: '',
    shipping_zip_code: '',
  };

  shippingCountryName = "";
  shippingStateName = "";
  products: any[];
  CalAllShipingcost: any;
  product_total_price: any;
  CalAllPrice: any;
  totalAfterDiscShiping: any;
  responseAddress: any;
  resMultipleAdd: any;

  constructor(public shared: SharedDataService, public modalCtrl: ModalController, public config: ConfigService, public nav: NavController, private storage: Storage,
    public loadingController: LoadingController, private router: Router, private route: ActivatedRoute, public services: YesServiceService, public menuCtrl: MenuController,
    translate: TranslateService, private toastCtrl: ToastController, public formBuilder: FormBuilder, public events: Events, private applicationRef: ApplicationRef) {
    
    
      const userDetails = localStorage.getItem('userdata');

      this.userdata = JSON.parse(userDetails);
  
      this.token = this.userdata.token;
  
      console.log(this.token);
    

      // this.Checkboxes = [
      //   {
      //     value: "Captain Marvel",
      //     isItemChecked: true
      //   }, {
      //     value: "Thor",
      //     isItemChecked: false
      //   }
      // ]
      
  }

  changeAddress(){
    
    this.nav.navigateForward("multiple-shipping-address");  
  }

  
  ionViewWillEnter() {

    this.Getmultipleshippingaddress();

        setTimeout(()=>{                    
          this.Personalinfo();
        }, 500);

          setTimeout(()=>{                    
            this.FillBilling(this.checkboxes)
          }, 1000);
  }


  ngOnInit() {
    this.ProUpdate();  
  }



  Getmultipleshippingaddress() {
    const userData = {
      token: this.token,
     };
  
    console.log(userData);
  
     this.services.Getmultipleshippingaddress(userData).then(result => {
     this.responseAddress = result;
     this.resMultipleAdd = this.responseAddress.response.shipping_address;
     console.log(this.responseAddress);
            
   }, error => {
  
   });
  
  }




  Getshippingaddressbyid(id) {
    const  userData = 'token=' + this.token + '&id=' + id;
  
    console.log(userData);
  
     this.services.Getshippingaddressbyid(userData).subscribe(result => {
     this.responseDatainfo = result.response.shipping_address[0];
  //   this.resMultipleAdd = this.responseAddress.response.shipping_address;
     console.log(this.responseDatainfo);

     setTimeout(()=>{                    
      this.FillBilling(this.checkboxes)
    }, 1000);

   }, error => {
  
   });
  
  }



  changingCart() {

    this.products = this.services.cartProducts;
    
    console.log(this.products);

    // this.shared.couponArray.forEach((value) => {
    //   this.products = this.couponProvider.apply(value, this.shared.cartProducts);
    // });

    this.totalPrice();
    this.applicationRef.tick();

  }




  totalPrice() {
    var price = 0;
    var subPrice = 0;
    var ShipingCost = 0;
    var totalcaltax = 0;
    console.log(this.products)
    for (let value of this.products) {
      subPrice = subPrice + value.product_total_price;
      price = price + value.product_total_price;
      ShipingCost = ShipingCost + value.product_shipping_cost;
      this.productid = value.product_id;
      this.thirdcategoryid = value.third_category_id;
      this.subcategoryid = value.subcategory_id;
      this.categoryid = value.category_id;
      this.sellerid = value.seller_id;
      this.unitprice = value.product_price;
      this.saleprice = value.product_sale_price;
      this.product_quantity = value.product_quantity;
    //  const shipping_state = value
      this.vendorstate = value.vender_state_id;


        const  userData = 'product_id=' + this.productid +  '&third_category_id=' + this.thirdcategoryid + '&subcategory_id=' + this.subcategoryid + '&category_id=' + this.categoryid +
         '&seller_id=' + this.sellerid + '&unit_price=' + this.unitprice + '&sale_price=' + this.saleprice + '&quantity=' + this.product_quantity + '&shipping_state=' + this.shipping_state_user + '&vendor_state=' + this.vendorstate;
    
        console.log(userData);
        this.services.Calculatetax(userData).subscribe(result => {
        this.responseDatatax = result.response.tax_data;
        console.log(this.responseDatatax);

        value["igst_tax_rate"] = this.responseDatatax.igst_tax_rate;
        value["igst_tax_amount"] = this.responseDatatax.igst_tax_amount;
        value["cgst_tax_rate"] = this.responseDatatax.cgst_tax_rate;
        value["cgst_tax_amount"] = this.responseDatatax.cgst_tax_amount;
        value["sgst_tax_rate"] = this.responseDatatax.sgst_tax_rate;
        value["sgst_tax_amount"] = this.responseDatatax.sgst_tax_amount;
        
        if(this.responseDatatax.cgst_tax_amount == ''){
          this.responseDatatax.cgst_tax_amount = 0;
        }
    
        if(this.responseDatatax.igst_tax_amount == ''){
          this.responseDatatax.igst_tax_amount = 0;
        }
    
        if(this.responseDatatax.sgst_tax_amount == ''){
          this.responseDatatax.sgst_tax_amount = 0;
        }          
    
        totalcaltax = totalcaltax +  parseFloat(this.responseDatatax.cgst_tax_amount) + parseFloat(this.responseDatatax.igst_tax_amount) + parseFloat(this.responseDatatax.sgst_tax_amount);
      
        console.log(totalcaltax)
        this.storage.set('totalprotax', totalcaltax);
        // this.presentToast('Your order has been placed successfully'); 
      }, error => {
    
      });

      }

    this.CalAllShipingcost = ShipingCost
    this.product_total_price = price;

    this.storage.get('totalpriceafterdisc').then((val) => {
      this.CalAllPrice = val;
      this.totalAfterDiscShiping = parseFloat(this.CalAllShipingcost) + parseFloat(this.CalAllPrice);
      console.log(this.CalAllPrice);
    });
  //  this.subtotal = subPrice;


   // this.CalAllPrice = parseFloat(this.CalAllPrice) + this.CalAllShipingcost;
    // console.log(price);
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


  goToBillingAddress() {
    this.nav.navigateForward("bs-billing-address");
  }


  goToCart(){
    this.nav.navigateForward("bs-cart");
  }


  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 2000
    });
    await loading.present();
  }


  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }




  UpdateShippingAddress() {

    if(this.checkboxes == true) {
    this.FillBilling(this.checkboxes)
    }

    if(this.billing.shipping_first_name == ""){
      alert("Please Add Billing Address")
      return false;
    }

    if(this.billing.shipping_email == ""){
      alert("Please Add Billing Address")
      return false;
    }

    if(this.billing.shipping_phone_number == ""){
      alert("Please Add Billing Address")
      return false;
    }

    if(this.billing.shipping_address_1 == ""){
      alert("Please Add Billing Address")
      return false;
    }

    if(this.billing.shipping_country_id == ""){
      alert("Please Add Billing Address")
      return false;
    }

    if(this.billing.shipping_state == ""){
      alert("Please Add Billing Address")
      return false;
    }

    if(this.billing.shipping_city == ""){
      alert("Please Add Billing Address")
      return false;
    }


    if(this.billing.shipping_zip_code == ""){
      alert("Please Add Billing Address")
      return false;
    }


    const  userData = 'token=' + this.token + '&shipping_first_name=' + this.updatePro.get('shipping_first_name').value + '&shipping_email=' + this.updatePro.get('shipping_email').value
    + '&shipping_phone_number=' + this.updatePro.get('shipping_phone_number').value + '&shipping_address_1=' + this.updatePro.get('shipping_address_1').value + '&shipping_address_2=' + this.updatePro.get('shipping_address_2').value
    + '&shipping_country_id=' + this.updatePro.get('shipping_country_id').value + '&shipping_state=' + this.updatePro.get('shipping_state').value + '&shipping_city=' + this.updatePro.get('shipping_city').value + '&shipping_zip_code=' + this.updatePro.get('shipping_zip_code').value;

    this.shipping_state_user = this.updatePro.get('shipping_state').value;

    console.log(userData);
    this.services.Updateshippingaddress(userData).subscribe(result => {
    this.responseData1 = result.response;
    if (this.responseData1.status == 0) {
    this.presentToast(this.responseData1.Message);
   } else {
    console.log(this.responseData1);
    this.changingCart();

    localStorage.setItem('BillingAddress', JSON.stringify(this.billing));
    // this.presentToast('User successfully registered');
   // this.events.publish("updateSideMenu");
    this.nav.navigateForward("bs-order");    
    }
  }, error => {

  });
  }


  ProUpdate() {
    this.updatePro = this.formBuilder.group({

      shipping_first_name: ['', Validators.compose([Validators.required])],
     // shipping_last_name: ['', Validators.compose([Validators.required])],
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



FillBilling(f) {

  if(f == true) {

    this.billing = {
      shipping_first_name: this.updatePro.get('shipping_first_name').value,
      shipping_email: this.updatePro.get('shipping_email').value,
      shipping_phone_number: this.updatePro.get('shipping_phone_number').value,
      shipping_address_1: this.updatePro.get('shipping_address_1').value,
      shipping_address_2: this.updatePro.get('shipping_address_2').value,
      shipping_country_id: this.updatePro.get('shipping_country_id').value,
      shipping_state: this.updatePro.get('shipping_state').value,
      shipping_city: this.updatePro.get('shipping_city').value,
      shipping_zip_code: this.updatePro.get('shipping_zip_code').value,
    };

    console.log('same billing address')

    var element = document.getElementById("medibp");
    element.classList.add("bpsh");

    console.log(this.billing);

    localStorage.setItem('BillingAddress', JSON.stringify(this.billing));


  }

  if(f == false) {

    console.log('diffrent billing address')

    var element = document.getElementById("medibp");
    element.classList.remove("bpsh");

    this.billing = {
      shipping_first_name: '',
      shipping_email: '',
      shipping_phone_number: '',
      shipping_address_1: '',
      shipping_address_2: '',
      shipping_country_id: '',
      shipping_state: '',
      shipping_city: '',
      shipping_zip_code: '',
    };

    console.log(this.billing);
    localStorage.setItem('BillingAddress', JSON.stringify(this.billing));

  }

}

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
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




    // Citiesbystate(cit) {

    //   this.services.Citiesbystate(cit).subscribe(result => {
    //   this.responseDataCity = result.response;
    //   if (this.responseDataCity.Status === 0) {
    //   } else {
    //   console.log(this.responseDataCity);
    //   }
    //   }, error => {
    //   });
    //   }




}