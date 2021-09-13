import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, MenuController, ToastController, ModalController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { YesServiceService } from 'src/app/yes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  order = [
    { name: "Straight Long Coat", price: "USD 100.00", quantity: "1", total: "USD 100.00", img: "assets/template-themes/becrux/images/item-images/26.jpg" },
  ];
  paymentMethods = ["Direct bank transfer", "Cash on delivery"];
  orders = [{ shipping_tax: "USD 0.00", shipping_total: "USD 0.00", discount_total: "USD 0.00", total: "USD 188.00" }]
  product = [{ name:"Straight Long Coat",price: "95.00", quantity:"1", subtotal:"95.00", total:"95.00", img: "assets/template-themes/becrux/images/item-images/26.jpg" }];
  userdata: any;

  token: any;

  responseData: any;

  folloing: any;

  Id: any;

  orderdetalis: any;

  OrderProducts: any;

  ShippingDetails: any;

  ProductsImage: any;

  constructor(private route: ActivatedRoute, public mdCtrl: ModalController, public services: YesServiceService, public menuCtrl: MenuController, private toastCtrl: ToastController, public shared: SharedDataService, public config: ConfigService, public loadingController:LoadingController, public nav:NavController,
    public formBuilder: FormBuilder, private router: Router, public events: Events) { }
 
 
    ngOnInit() {
  }

  goToMyOrder() {
    this.nav.navigateForward("bs-my-orders");
  }
 
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
 
  ionViewWillEnter() {

    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token); 

    this.Id = this.route.snapshot.paramMap.get('id');
    console.log(JSON.parse(this.Id));

    this.Getorderdetails();
  }


  Getorderdetails() {

    const userData = 'token=' + this.token + '&order_number=' + this.Id;

    console.log(userData);
    this.services.Getorderdetails(userData).subscribe(result => {
    this.responseData = result.response;
  //  console.log(this.responseData);
    if (this.responseData.Status == 0) {
    this.presentToast(this.responseData.Message);
   } else {
     this.orderdetalis = this.responseData.order;
     this.OrderProducts = this.responseData.order_products;
     this.ShippingDetails = this.responseData.shipping_details;
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
