import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../term-services/term-services.page';
import { YesServiceService } from '../../../yes-service.service';
import * as $ from "jquery";
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

    responseData: any;
    
    
    listData: any;
    loading: any;

    phone_number: any;
    username: any;
    email: any;
    password: any;

    otp: any;
    otp1 = Math.floor(Math.random() * 900000) + 100000;

     passwordType = 'password';

     passwordIcon = 'eye-off';

formData = {
        username: '',
        email: '',
        password: '',
       phone_number: '',
      };

    image;
    errorMessage = 'Invalid username or password.';
    //Invalid username or password.
    constructor(private modalCtrl: ModalController,
        // private camera: Camera,
        private toastCtrl: ToastController,
        translate: TranslateService,
        public authService: YesServiceService,
        private navCtrl: NavController,
        public menuCtrl: MenuController,
        private router: Router,
        public events: Events,
        ) {

    }
    
    // openCamera()
    // {
    // const options: CameraOptions = {
    // quality: 100,
    // destinationType: this.camera.DestinationType.FILE_URI,
    // encodingType: this.camera.EncodingType.JPEG,
    // mediaType: this.camera.MediaType.PICTURE
    // }

    // this.camera.getPicture(options).then((imageData) => {
    // // imageData is either a base64 encoded string or a file URI
    // // If it's base64 (DATA_URL):
    // let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    // // Handle error
    // });
    // }
    signup() {

      this.formData = {
        username: this.username,
        email: this.email,
        password: this.password,
       phone_number: this.phone_number,
      };
    
        this.authService.registerUser(this.formData).then(result => {
        this.responseData = result;

        console.log(this.responseData)
      //  this.data = JSON.parse(result["_body"]);
        if (this.responseData.status.code == 200) {

        console.log(this.responseData);
        localStorage.setItem('userdata', JSON.stringify(this.responseData.response));
        this.presentToast('User successfully registered');
        this.router.navigateByUrl('tabs/bs-home');
        this.events.publish("updateSideMenu");

      } else if(this.responseData.status.code == 404) {
        this.presentToast('You are already registered');
      }

      }, error => {
        this.presentToast('You are already registered');
      });
      }


    send() {

        const phone_number = this.phone_number;
        console.log(phone_number);
        console.log(this.otp1);
    
        const settings = {
          async: true,
          crossDomain: true,
       
        //    url: 'https://control.msg91.com/api/sendotp.php?sender=&otp=' + this.otp1 + '&mobile=' + phone + '&authkey=297788A11nIWuhah5d9c4be1&message=',

          url: 'https://2factor.in/API/V1/423c7d24-b35f-11e9-ade6-0200cd936042/SMS/' + phone_number + '/' + this.otp1 + '/MDGROC',
    
           method: 'POST',
    
           // headers: {
             //   'Content-Type' : 'application/json',
           //   },
    
           processData: false,
           data: ''
         };
    
       // tslint:disable-next-line:only-arrow-functions
        $.ajax(settings).done(function(response) {
           console.log(response);
         });
    
    
    
      //  localStorage.setItem('otp', otp);
       // localStorage.setItem('phone', phone);
    
       // tslint:disable-next-line:max-line-length
       // const myUrl = 'https://api.msg91.com/api/v5/otp?invisible=1&otp=' + this.otp1 + '&userip=IPV4%20User%20IP&authkey=297788A11nIWuhah5d9c4be1&mobile=' + phone + '&otp_length=5&otp_expiry=';
       // console.log(myUrl);
       // fetch(myUrl, { headers: 'this.httpOptions' }, { method: 'POST' }).then(res => { console.log(res);
       // });
    
       const element = document.getElementById('otp');
       const snum = document.getElementById('numsend');
   
       element.classList.add('display');
       element.classList.remove('nodisplay');
       snum.classList.add('nodisplay');
   
    
      }
    
      verify() {
    
        const element = document.getElementById('otp');
        const snum = document.getElementById('numsend');
      
        if (this.otp === this.otp1) {
      
      
         element.classList.add('nodisplay');
         element.classList.remove('display');
      
         snum.classList.add('nodisplay');
         snum.classList.remove('display');
         alert('otp match');
      
        } else {
          alert('otp not match');
          return document.getElementById('otp').focus();
        }
      
      
      }
  

    async goToTermServicesPage() {
        const toast = await this.toastCtrl.create({
            message: 'Term and Service Clicked',
            buttons: [
              {
                text: 'Close',
                role: 'cancel',
                handler: () => {
                  console.log('Close clicked');
                }
              }
            ]
        
        });
        toast.present();
    }

    
    async goToPrivacyPolicyPage() {
        const toast = await this.toastCtrl.create({
            message: 'Privacy Policy Clicked',
            buttons: [
              {
                text: 'Close',
                role: 'cancel',
                handler: () => {
                  console.log('Close clicked');
                }
              }
            ]        
        });
        toast.present();
    }


    async goToRefundPolicyPage() {
        const toast = await this.toastCtrl.create({
            message: 'Fund Policy Clicked',
            buttons: [
              {
                text: 'Close',
                role: 'cancel',
                handler: () => {
                  console.log('Close clicked');
                }
              }
            ]        
        });
        toast.present();
    }
    ngOnInit() {
    }

    /*go back to login page*/
    dismiss() {
        this.navCtrl.navigateForward("bs-login");
    }
    async presentToast(msg) {
        const toast = await this.toastCtrl.create({
          message: msg,
          duration: 3000,
          position: 'bottom',
        });
  
        toast.present();
      }
  
    async openTermServicesPage() {
        const modal = await this.modalCtrl.create({
            component: TermServicesPage
        });
        return await modal.present();
    }
    async openPrivacyPolicyPage() {
        const modal = await this.modalCtrl.create({
            component: PrivacyPolicyPage
        });
        return await modal.present();
    }
    async openRefundPolicyPage() {
        const modal = await this.modalCtrl.create({
            component: RefundPolicyPage
        });
        return await modal.present();
    }
    pinchEvent(e) {
        this.navCtrl.navigateForward("ui-templates-details");
    }
    ionViewWillEnter() {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    }
    
hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}




}