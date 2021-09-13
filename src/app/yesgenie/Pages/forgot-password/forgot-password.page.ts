import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YesServiceService } from 'src/app/yes-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  ForgotPass: FormGroup;
  formData = {
    customers_email_address: '',
  };
  errorMessage = '';
  responseData: any;
  //The Email not Valid exist

  constructor(private modalCtrl: ModalController,
    public services: YesServiceService,
    private toastCtrl: ToastController,
    private nav: NavController,
    translate: TranslateService,
    public menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    private router: Router,
    ) { }

  dismiss() {
    this.nav.navigateForward("bs-login");
   }
  ngOnInit() {
    this.PassForgot();
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
  }


  forgotPassword() {

    const  userData = 'email_address=' + this.ForgotPass.get('email').value;

    console.log(userData);
    this.services.forgetpassword(userData).subscribe(result => {
    this.responseData = result;
    console.log(this.responseData);
    if (this.responseData.status == 404) {
    this.presentToast(this.responseData.message);
   } else {
    console.log(this.responseData);
    // this.presentToast('User successfully registered');
    this.router.navigateByUrl('bs-login');
    }
  }, error => {

    if (error.url == null) {
      this.presentToast('Invalid Email Id');
      //  alert('all ready registered');

    } else {
      this.presentToast('Invalid Email Id');
      //  alert('all ready registered');

    }

  });
  }


  PassForgot() {
    this.ForgotPass = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
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
