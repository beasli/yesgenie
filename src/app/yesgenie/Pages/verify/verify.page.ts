import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../term-services/term-services.page';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  formData = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
    wpgdprc: 1,
    register: 'Register'
};
image;
errorMessage = 'Invalid username or password.';

  constructor(private modalCtrl: ModalController,
    // private camera: Camera,
    private toastCtrl: ToastController,
    translate: TranslateService,
    private navCtrl: NavController,
    public menuCtrl: MenuController) { }



    dismiss() {
      this.navCtrl.navigateForward("bs-login");
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
}
