import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController, MenuController, ToastController, AlertController} from '@ionic/angular';
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
import { SearchPage } from '../../search/search.page';


@Component({
  selector: 'app-multiple-shipping-address',
  templateUrl: './multiple-shipping-address.page.html',
  styleUrls: ['./multiple-shipping-address.page.scss'],
})
export class MultipleShippingAddressPage implements OnInit {
  userdata: any;
  token: any;
  responseAddress: any;
  resMultipleAdd: any;
  responseDeleteAddress: any;

  id : any;

  constructor(public shared: SharedDataService,
    public modalCtrl: ModalController,
    public config: ConfigService,
    public nav: NavController, private storage: Storage,
    public loadingController: LoadingController, private router: Router, 
    private route: ActivatedRoute, public services: YesServiceService, public menuCtrl: MenuController,
    translate: TranslateService, private toastCtrl: ToastController, 
    public formBuilder: FormBuilder, public events: Events, public alertController: AlertController,) {
    
    
      const userDetails = localStorage.getItem('userdata');

      this.userdata = JSON.parse(userDetails);
  
      this.token = this.userdata.token;
      this.id = {
        user_id: this.token
      }
      console.log(this.token);
      this.getAddressList();
  }

  getAddressList(){
    this.services
    .post('getaddress', this.id)
    .then((response: any) => {
      console.log("SHOW LIST",response);
      // this.countryList = response['data'];
    })
    .catch((error) => {
      console.log(error);
    });
  }


  ngOnInit() {
  }


  ionViewWillEnter() {
    this.Getmultipleshippingaddress();
  }



  Getmultipleshippingaddress() {
    const userData = {
      token: this.token,
     };
  
    console.log(userData);
  
     this.services.Getmultipleshippingaddress(userData).then(result => {
     this.responseAddress = result;
     this.resMultipleAdd = this.responseAddress.response.shipping_address;
     console.log("Addresses..",this.responseAddress);
            
   }, error => {
  
   });
  
  }




  Deletemultipleshippingaddress(id) {
    
    const  userData = 'token=' + this.token + '&id=' + id;
  
    console.log(userData);
  
     this.services.Deletemultipleshippingaddress(userData).subscribe(result => {
     this.responseDeleteAddress = result;
     this.Getmultipleshippingaddress();
     //this.resMultipleAdd = this.responseAddress.response.shipping_address;
     console.log(this.responseDeleteAddress);
     this.presentToast('Address Deleted Successfully');         
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




  async presentAlertPrompt(id, address) {
    const alert = await this.alertController.create({
      header: 'Are You Sure ? You want to delete ' + address + ' Address',
      // inputs: [
      //           // input date with min nor max

      //   {
      //     name: 'date',
      //     type: 'date',
      //     min: this.minDate,
      //     max: this.maxDate,
      //   },
      // ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel', address);
          //  this.utilProvider.showToast('No Data', 'danger', 'bottom');
          }
        }, {
          text: 'Ok',
          handler: () => {

            this.Deletemultipleshippingaddress(id)
         //  this.utilProvider.showToast(JSON.stringify(data), 'success', 'bottom');
          }
        }
      ]
    });

    await alert.present();
  }








  goToCartPage(){
    this.nav.navigateForward("bs-cart");    
  }


  AddNewAdress(){
    this.nav.navigateForward("bs-addresses");    
  }


  async opensearch() {
    const modal = await this.modalCtrl.create({
        component: SearchPage
    });
    return await modal.present();
}


onClickDetails(id:string){
  this.router.navigate(['/update-shipping-address',{id:id}])
  }


}
