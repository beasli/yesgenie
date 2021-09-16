import { Component, OnInit, ViewEncapsulation, ApplicationRef } from '@angular/core';
import { LoadingController, NavController, MenuController, ToastController, ModalController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { YesServiceService } from 'src/app/yes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

declare var RazorpayCheckout: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  userdata: any;

  token: any;

  totalAfterDiscShipingFixed: any;

  responseData: any;

  folloing: any;

  products: any[];

  subtotal: any;

  product_total_price: any;

  responseDatainfo: any;

  responseData1: any;

  proorder: FormGroup;

  payid: any;

  orderId: any;

  responseDataRewards: any;

  methodpay: any;
  CalAllPrice: any;
  CalAllShipingcost: any;
  discountPrice: any;
  totalAfterDiscShiping: any;
  totaltaxamount: any;
  totalTaxInDecimal: any;
  billingAddress: any;
  checkboxes: boolean;
  wallet_amount: any;
  responseSendSMSMail: any;

  totalRedwardPoint: any;

  totalCartValue: any;
  paymentMethods: any[];
  OnlinepaymentMethods: any[];


  constructor(public mdCtrl: ModalController, public services: YesServiceService, public menuCtrl: MenuController, private toastCtrl: ToastController, public shared: SharedDataService, public config: ConfigService, public loadingController:LoadingController, public nav:NavController,
    public formBuilder: FormBuilder, private router: Router, public events: Events, private applicationRef: ApplicationRef, private storage: Storage) { 


      storage.get('totaldiscount').then((val) => {
        this.discountPrice = val;
        console.log(this.discountPrice);
      });

      const billlingAdd = localStorage.getItem('BillingAddress');

      this.billingAddress = JSON.parse(billlingAdd);

      console.log(this.billingAddress);

    }


  

  // goToThankYouPage() {
  //   this.nav.navigateForward("bs-thank-you");
  // }

  ngOnInit() {
  }




  goToShippingMethod() {
    this.nav.navigateBack("bs-shipping-address");
  }

  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }


  ionViewWillEnter() {

    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token); 

    this.totalPrice();

   this.changingCart();

    this.Personalinfo();
  
  }



  selectPayment(PayMethod) {

    this.methodpay = PayMethod;
    
  }

  goToThankYouPage(){

    if(this.methodpay == 'Cash on delivery') {
      this.Productorder();
     }  
    else if(this.methodpay == 'Razorpay') {
      this.payWithRazor();
    } else {
      this.presentToast('Please select Payment Method');
    }
  }




  totalPrice() {
    var price = 0;
    var subPrice = 0;
    var ShipingCost = 0;
    console.log("cartProducts..",this.services.cartProducts)
    for (let value of this.services.cartProducts) {
      subPrice = subPrice + value.product_total_price;
      price = price + value.product_total_price;
      ShipingCost = ShipingCost + parseFloat(value.product_shipping_cost);
      console.log(ShipingCost);
    }
    
    this.CalAllShipingcost = ShipingCost;

    this.storage.get('totalShippingCharge').then((val) => {
      this.CalAllShipingcost = val
      console.log("totalShippingCharge VAL..",val);
    });
    

    // console.log("shippingCharge..",this.services.shippingCharge)
    this.product_total_price = price.toFixed(2);
    // if(price < 100000) {
    //   this.CalAllShipingcost = 4000;
    //   this.product_total_price = price.toFixed(2);
    // } else {
    //   this.CalAllShipingcost = 0;
    //   this.product_total_price = price.toFixed(2);
    // }

   // this.totaltaxamount = totaltax.toFixed(2);



   setTimeout(()=>{ 

    this.storage.get('totalpriceafterdisc').then((val) => {
     
      this.CalAllPrice = val;
      this.totalCartValue = this.CalAllPrice;
      this.totalAfterDiscShiping = parseFloat(this.CalAllShipingcost) + parseFloat(this.CalAllPrice);
      this.totalAfterDiscShipingFixed = this.totalAfterDiscShiping.toFixed(2);
      console.log(this.CalAllPrice);

      if(this.totalAfterDiscShipingFixed < 200000){
        this.paymentMethods = ["Razorpay"];
      } else if(this.totalAfterDiscShipingFixed >= 200000){
        this.paymentMethods = ["Razorpay"];
      // this.paymentMethods = ["Razorpay", "Cash on delivery"];
      } else {
        this.paymentMethods = [""];
      }
      
    });                  
  }, 1000);


  
  //  this.subtotal = subPrice;


   // this.CalAllPrice = parseFloat(this.CalAllPrice) + this.CalAllShipingcost;
    // console.log(price);
  }



  payWithRazor() {
    const options = {
      description: 'Welcome to Yes Genie',
      image: 'https://www.yesgenie.com/uploads/logo/logo_5ef719c54807c.png',
      currency: 'INR', // your 3 letter currency code
      key: 'rzp_live_bqpVscreY18vrq', // your Key Id from Razorpay dashboard
      amount: this.totalAfterDiscShiping, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Yes Genie',
      prefill: {
        email: this.responseDatainfo.email,
        contact: this.responseDatainfo.phone_number,
        name: this.responseDatainfo.username
      },
      theme: {
        color: '#021841'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };
    var successCallback = (payment_id) =>{
    //  alert('payment_id: ' + payment_id);
      this.payid = payment_id
      // var orderId = success.razorpay_order_id
      // var signature = success.razorpay_signature
      this.Productorder();
     // this.storage.set('payment_success',true); // here, storage must be an instance variable of RazorpayCheckout
      }


    const cancelCallback = function (error) {
      alert(error.description);
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  
   }




   Paybyrazorpay() {

    const  userData = 'token=' + this.token +  '&payment_method=' + this.methodpay + '&payment_id=' + this.payid + '&order_id=' + this.orderId + '&currency=' + 'INR' + '&payment_amount=' + this.totalAfterDiscShipingFixed + '&payment_status=' + '1';

    console.log(userData);
    this.services.Paybyrazorpay(userData).subscribe(result => {
    this.responseData1 = result.response;
    if (this.responseData1.status == 0) {
    this.presentToast(this.responseData1.Message);
   } else {
    console.log(this.responseData1);
    // this.presentToast('User successfully registered');
   // this.events.publish("updateSideMenu");
   this.services.emptyCart();
   this.presentToast('Your order has been placed successfully');
   this.nav.navigateForward("bs-thank-you");
  }
  }, error => {

  });
  }

  paywithwallet(){
    this.methodpay = 'pay_on_wallet'
    this.Productorder()
  }



  Sendsmsandemail() {

    const  userData = 'token=' + this.token;

    console.log(userData);
    this.services.Sendsmsandemail(userData).subscribe(result => {
    this.responseSendSMSMail = result.response;
   console.log()
  }, error => {

  });
  }



  Productorder() {

    if(this.checkboxes == false){
      this.wallet_amount = 0;
    }

    const  userData = 'token=' + this.token +  '&price_subtotal=' + this.product_total_price + '&price_shipping=' + this.CalAllShipingcost + '&price_total=' + this.totalAfterDiscShipingFixed + '&price_currency=' + 'INR' + '&payment_method=' + this.methodpay + '&wallet=' + this.responseDatainfo.wallet + '&paid_by_wallet=' + this.wallet_amount  + '&coupon_amount=' + this.discountPrice + '&tax_type=' + ''
    + '&shipping_first_name=' + this.shipping_first_name + '&shipping_email=' + this.shipping_email + '&shipping_phone_number=' + this.shipping_phone_number + '&shipping_address_1=' + this.shipping_address_1 + '&shipping_address_2=' + this.shipping_address_2 + '&shipping_country_id=' + this.shipping_country_id + '&shipping_state=' + this.shipping_state + '&shipping_city=' + this.shipping_city
    + '&shipping_zip_code=' + this.shipping_zip_code + '&billing_first_name=' + this.billingAddress.shipping_first_name + '&billing_email=' + this.billingAddress.shipping_email + '&billing_phone_number=' + this.billingAddress.shipping_phone_number + '&billing_address_1=' + this.billingAddress.shipping_address_1 + '&billing_address_2=' + this.billingAddress.shipping_address_2 + '&billing_country=' + this.billingAddress.shipping_country_id + '&billing_state=' + this.billingAddress.shipping_state
    + '&billing_city=' + this.billingAddress.shipping_city + '&billing_zip_code=' + this.billingAddress.shipping_zip_code +'&shipping_is_billing=' + '0' + '&product_data=' + JSON.stringify(this.products);

    console.log(userData);
    this.services.Productorder(userData).subscribe(result => {
    this.responseData1 = result.response;
    if (this.responseData1.status == 0) {
    this.presentToast(this.responseData1.Message);
   } else {
    console.log(this.responseData1);
    // this.presentToast('User successfully registered');
   // this.events.publish("updateSideMenu");
    this.orderId = this.responseData1.order_number;

   if(this.methodpay == 'Razorpay'){
    this.Paybyrazorpay();
   }

   this.services.emptyCart();
   this.presentToast('Your order has been placed successfully');
   this.Sendsmsandemail();
   this.nav.navigateForward("bs-thank-you");
  }
  }, error => {

  });
  }


  ProUpdate() {
    this.proorder = this.formBuilder.group({

      shipping_first_name: ['', Validators.compose([Validators.required])]
    });
}


  changingCart() {

    this.products = this.services.cartProducts;
    
    console.log(this.products);

    this.applicationRef.tick();

  }

  shipping_first_name: any;
  shipping_last_name: any;
  shipping_address_1: any;
  shipping_address_2: any;
  shipping_city: any;
  shipping_country_id: any;
  shipping_email: any;
  shipping_phone_number: any;
  shipping_state: any;
  shipping_zip_code: any;
  // shipping_last_name: any;
  // shipping_last_name: any;
  // shipping_last_name: any;
  // shipping_last_name: any;





  Personalinfo() {

    const  userData = 'token=' + this.token;

    console.log(userData);
    this.services.Getpersonalinfo(userData).subscribe(result => {
    this.responseDatainfo = result.response[0];
    if (this.responseDatainfo.Status === 0) {
    this.presentToast(this.responseDatainfo.Message);
   } else {
    console.log(this.responseDatainfo);    
    this.shipping_first_name = this.responseDatainfo.shipping_first_name;
    this.shipping_last_name = this.responseDatainfo.shipping_last_name;
    this.shipping_address_1 = this.responseDatainfo.shipping_address_1;
    this.shipping_address_2 = this.responseDatainfo.shipping_address_2;
    this.shipping_city = this.responseDatainfo.shipping_city;
    this.shipping_country_id = this.responseDatainfo.shipping_country_id;
    this.shipping_email = this.responseDatainfo.shipping_email;
    this.shipping_phone_number = this.responseDatainfo.shipping_phone_number;
    this.shipping_zip_code = this.responseDatainfo.shipping_zip_code;
    this.shipping_state = this.responseDatainfo.shipping_state;
    this.wallet_amount = this.responseDatainfo.wallet;
    // this.shipping_first_name = this.responseDatainfo.shipping_first_name;

    }

  }, error => {

  });
  }



  FillBilling(f){
    if(f == true){

      if(this.totalAfterDiscShiping <= this.responseDatainfo.wallet) {
        this.wallet_amount = parseFloat(this.totalAfterDiscShipingFixed)
        this.totalAfterDiscShipingFixed = 0;
        console.log(this.wallet_amount)
      } else {
        this.totalAfterDiscShipingFixed = parseFloat(this.totalAfterDiscShipingFixed) - parseFloat(this.wallet_amount)
        this.wallet_amount = this.wallet_amount
        console.log(this.wallet_amount)
      }

   } 
    else{  

      if(this.totalAfterDiscShipingFixed == 0) {
        this.totalPrice()
        this.wallet_amount = this.responseDatainfo.wallet;
        console.log(this.wallet_amount)
      } else {
        this.totalAfterDiscShipingFixed = parseFloat(this.totalAfterDiscShipingFixed) + parseFloat(this.wallet_amount)
        console.log(this.wallet_amount)
      }
   
    }

  }



  ConvertToInt(val){
    return val.toFixed(2);
  }



    async presentToast(msg) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 2000,
        position: "middle",
        color: "primary"
      });
      toast.present();
    }



    dismiss() {
      this.mdCtrl.dismiss();
    }


}