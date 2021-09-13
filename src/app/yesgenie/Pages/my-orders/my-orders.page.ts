import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { LoadingController, NavController, MenuController, ToastController, ModalController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { YesServiceService } from 'src/app/yes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';



@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  orders=[{ number:"1902", date_created:"Jul 30, 2019", total:"USD 229.00", status:"Processing"}]
 
 
  userdata: any;

  token: any;

  responseData: any;

  folloing: any;

  constructor(public mdCtrl: ModalController, public services: YesServiceService, public menuCtrl: MenuController, private toastCtrl: ToastController, public shared: SharedDataService, public config: ConfigService, public loadingController:LoadingController, public nav:NavController,
    public formBuilder: FormBuilder, private router: Router, public events: Events) { }


 
  async refreshPage(){
    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();
    this.mdCtrl.dismiss();
  }

  ngOnInit() {
  }
  
  goToCartPage(){
    this.nav.navigateForward("bs-cart");
    this.mdCtrl.dismiss();
  }
  // goToOrderDetail(){
  //   this.nav.navigateForward("bs-order-detail");
  // }

  openProductsPage(){
    this.nav.navigateForward("tabs/bs-home");
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }



  ionViewWillEnter() {

    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token); 

    this.Getorder();
  
  }





  Getorder() {

      const userData = 'token=' + this.token;
  
      console.log(userData);
      this.services.Getorder(userData).subscribe(result => {
      this.responseData = result.response;
    //  console.log(this.responseData);
      if (this.responseData.Status == 0) {
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



    goToOrderDetail(id:number){
      this.router.navigate(['bs-order-detail',{id:id}])
      }

  
}
