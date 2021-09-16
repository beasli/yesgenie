import { Component, OnInit, ApplicationRef } from '@angular/core';

import { LoginPage } from '../login/login.page'

import { NavController, AlertController, ModalController, MenuController, ToastController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';

import { YesServiceService } from '../../../yes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../../../share.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  couponcode: FormGroup;

  DiscountPercentage: any;

  TotalDiscount: any = 0;

  coupontype: any;

  Discountfix: any;

  responseData: any;

  token: any;

  userdata: any;

  subtotal: any;

  product_total_price: any;

  product_price_afterDiscount: any;

  deliveryCharges = 5000;

  products = [];

  value = 0;
  public translationListArray = [];
  orders = [{ subTotal: "100.00", discount: "0.00", total: "100.00" }]
  tax: any;

  product_price_afterDeliveryChargeApply : any;
  
  constructor(public shared: SharedDataService,
    public config: ConfigService,
    public nav: NavController,
    public alertController: AlertController,
    public modalCtrl: ModalController, 
    private router: Router, private route: ActivatedRoute, public services: ShareService, public menuCtrl: MenuController,
    public navCtrl: NavController, public services1: YesServiceService, private toastCtrl: ToastController,
    private storage: Storage,
    private applicationRef: ApplicationRef,
    public formBuilder: FormBuilder
    ) {

  }


  ionViewWillEnter() {

    this.deliveryCharges = 5000;
    this.updateCart();

    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token);

  }


  ngOnInit() {
  //  this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100
    this.codecoupon();
  }



  Getcoupon() {
    const  userData = 'coupon-code=' + this.couponcode.get('coupon').value;
    console.log(userData);
    this.services1.Getcoupon(userData).subscribe(result => {
    this.responseData = result.response;
    if (this.responseData.coupon == null) {
      this.TotalDiscount = 0
      this.totalPrice();
    this.presentToast('Invalid Coupon');
   } else {
     if(this.responseData.coupon.discount_name == "Percentage"){
       this.coupontype = this.responseData.coupon.discount_name;
       this.DiscountPercentage = this.responseData.coupon.coupon_amount;
       this.TotalDiscount = this.product_total_price * this.DiscountPercentage/100;
       this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100;

     } else if(this.responseData.coupon.discount_name == "Fixed"){
      this.coupontype = this.responseData.coupon.discount_name;
      this.TotalDiscount = this.responseData.coupon.coupon_amount * 100;
      this.product_price_afterDiscount = this.product_total_price - parseFloat(this.TotalDiscount);
      if(this.product_price_afterDiscount*1 /100*1 < 699 || this.product_price_afterDiscount*1 /100*1 == 699){
        this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount + this.deliveryCharges;
      }
      else{
        this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount;
      }
      console.log(this.product_price_afterDeliveryChargeApply);
    }

    console.log(this.responseData);
   this.presentToast('Coupon Applied Successfully');
  }
  }, error => {

  });
  }


  codecoupon() {
    this.couponcode = this.formBuilder.group({
      coupon: ['', Validators.compose([Validators.required])],
    });
}



  changingCart() {
    this.products = this.services1.cartProducts;
    console.log(this.products);
    this.storage.set('cartProducts', this.services1.cartProducts);
    this.services1.cartTotalItems();

    // this.shared.couponArray.forEach((value) => {
    //   this.products = this.couponProvider.apply(value, this.shared.cartProducts);
    // });
   

    this.totalPrice();
    this.applicationRef.tick();
  }



  totalPrice() {
    var price = 0;
    var subPrice = 0;
    var totaltax = 0;
    for (let value of this.products) {
      subPrice = subPrice + value.product_total_price;
      price = price + value.product_total_price;
      totaltax = totaltax + value.tax;
    }
  //  this.subtotal = subPrice;
    this.product_total_price = price;
    this.tax = totaltax;
    console.log(this.tax);
  if(this.coupontype == "Percentage"){
    if(this.TotalDiscount != 0) {
      this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100;
      if(this.product_price_afterDiscount*1 /100*1 < 699 || this.product_price_afterDiscount*1 /100*1 == 699){
        this.deliveryCharges = 5000;
        this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount + this.deliveryCharges;
      }
      else{
        this.deliveryCharges = 0;
        this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount;
      }
    } else {
      this.product_price_afterDiscount = this.product_total_price;
      if(this.product_price_afterDiscount*1 /100*1 < 699 || this.product_price_afterDiscount*1 /100*1 == 699){
        this.deliveryCharges = 5000;
        this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount + this.deliveryCharges;
      }
      else{
        this.deliveryCharges = 0;
        this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount;
      }
    }
  } else if(this.coupontype == "Fixed")
  {
    if(this.TotalDiscount != 0) {
      this.product_price_afterDiscount = this.product_total_price - parseFloat(this.TotalDiscount);

      if(this.product_price_afterDiscount*1 /100*1 < 699 || this.product_price_afterDiscount*1 /100*1 == 699){
        this.deliveryCharges = 5000;
        this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount + this.deliveryCharges;
      }
      else{
        this.deliveryCharges = 0;
        this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount;
      }

    } else {
    this.product_price_afterDiscount = this.product_total_price;
    if(this.product_price_afterDiscount*1 /100*1 < 699 || this.product_price_afterDiscount*1 /100*1 == 699){
      this.deliveryCharges = 5000;
      this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount + this.deliveryCharges;
    }
    else{
      this.deliveryCharges = 0;
      this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount;
    }
    }
  } else {
    this.product_price_afterDiscount = this.product_total_price;
    if(this.product_price_afterDiscount*1 /100*1 < 699 || this.product_price_afterDiscount*1 /100*1 == 699){
      this.deliveryCharges = 5000;
      this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount + this.deliveryCharges;
    }
    else{
      this.deliveryCharges = 0;
      this.product_price_afterDeliveryChargeApply = this.product_price_afterDiscount;
    }
  }
    // console.log(price);
  }



  removeCart(id) {
    this.products.forEach((value, index) => {
      if (value.product_id == id) {
        this.products.splice(index, 1);
        console.log("removing" + id);
      }
    });
    this.services1.removeToCart(this.products);
    this.updateCart();
  }



  updateCart(){
    console.log('update cart')

    this.changingCart();
  }




async proceedToCheckOut() {
  if (this.userdata == null || this.userdata == undefined) {

    this.nav.navigateForward("bs-login");

  }
  else {
    // <!-- 2.0 updates -->
    this.storage.set('totalpriceafterdisc', this.product_price_afterDiscount);

    if(this.product_price_afterDiscount*1 /100*1 < 699 || this.product_price_afterDiscount*1 /100*1 == 699){
      this.deliveryCharges = 5000;
      this.storage.set('totalShippingCharge', this.deliveryCharges);
    }
    else{
      this.deliveryCharges = 0;
      this.storage.set('totalShippingCharge', this.deliveryCharges);
    }
    this.storage.set('totaldiscount', this.TotalDiscount);
    this.nav.navigateForward("bs-shipping-address");
  }
}




addQuantity = function (p) {
  if (p.stock_quantity == p.product_quantity)
    this.toast("Product Quantity is Limited!");
  else if (p.stock_quantity == null || p.stock_quantity > p.product_quantity) {
    p.product_quantity++;
  //  p.product_unit_price = p.product_unit_price/100 + parseFloat(p.product_unit_price)/100;
    p.product_total_price = p.product_total_price + parseFloat(p.product_unit_price)
    p.tax = p.tax + parseFloat(p.single_pro_Tax);

   // this.product_total_price = p.product_total_price + parseFloat(p.product_unit_price)


   // this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100;
if(this.coupontype == "Percentage"){
    if(this.TotalDiscount != 0) {
      this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100;
      this.TotalDiscount = p.product_total_price * this.DiscountPercentage/100;
      } else {
        this.TotalDiscount = 0;
      this.product_price_afterDiscount = this.product_total_price;
      }
    } else if(this.coupontype == "Fixed"){
      if(this.TotalDiscount != 0) {
        this.product_price_afterDiscount = this.product_total_price - parseFloat(this.TotalDiscount);
        this.TotalDiscount = this.TotalDiscount;
        } else {
          this.TotalDiscount = 0;
        this.product_price_afterDiscount = this.product_total_price;
        }
    }

    this.updateCart();

  }

}


//============================================================================================  
//function decreasing the quantity
minusQuantity = function (p) {
  if (p.product_quantity != 1) {
    p.product_quantity--;
  //  p.product_unit_price = parseFloat(p.product_unit_price) * p.product_quantity;
    p.product_total_price = parseFloat(p.product_unit_price) * p.product_quantity;
   // this.TotalDiscount = p.product_total_price * this.DiscountPercentage/100;
   p.tax = parseFloat(p.single_pro_Tax) * p.product_quantity;

   if(this.coupontype == "Percentage"){
    if(this.TotalDiscount != 0) {
     // this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100;
      this.TotalDiscount = p.product_total_price * this.DiscountPercentage/100;
      } else {
        this.TotalDiscount = 0;
    //  this.product_price_afterDiscount = this.product_total_price;
      } 
    } if(this.coupontype == "Fixed"){

      if(this.TotalDiscount != 0) {
        // this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100;
         this.TotalDiscount = this.TotalDiscount;
         } else {
           this.TotalDiscount = 0;
       //  this.product_price_afterDiscount = this.product_total_price;
         }

    }
    this.updateCart();
  }

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


  toast(msg) {
    this.translateString(msg).then(async (res: string) => {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    });
  }



  translateString(value) {
    return new Promise(resolve => {
      resolve(this.translationListArray[value]);
    });
  }


  

  goToProductDetail(id:number, catid:number){
    this.router.navigate(['bs-product-detail',{id:id, catid:catid}])
    }




openProductsPage(){
  this.nav.navigateForward("tabs/bs-home");
}

  openShopPage() {
    this.nav.navigateForward("bs-products");
  }



  goToProductDetailPage() {
    this.nav.navigateForward("bs-product-detail");
  }



  goToAddress() {
    this.nav.navigateForward("bs-shipping-address");
  }


  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }


}
