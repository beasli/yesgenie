import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LoadingController, NavController, MenuController, ToastController, ModalController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { YesServiceService } from 'src/app/yes-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  updatePass: FormGroup;

  responseData: any;

  userdata: any;

  token: any;

  constructor(public mdCtrl: ModalController, public services: YesServiceService, public menuCtrl: MenuController, private toastCtrl: ToastController, public shared: SharedDataService, public config: ConfigService, translate: TranslateService, public loadingController:LoadingController, public nav:NavController,
    public formBuilder: FormBuilder, private router: Router, public events: Events) { }

  ngOnInit() {
    this.PassUpdate();
  }


  ionViewWillEnter() {

    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    this.token = this.userdata.token;

    console.log(this.token);

  }




  Updatepassword() {

    const  userData = 'token=' + this.token + '&newpassword=' + this.updatePass.get('newpassword').value;

    console.log(userData);
    this.services.Updatepassword(userData).subscribe(result => {
    this.responseData = result.response;
    if (this.responseData.Status == 0) {
    this.presentToast(this.responseData.Message);
   } else {
    console.log(this.responseData);
    // this.presentToast('User successfully registered');
    this.router.navigateByUrl('bs-settings');
    }
  }, error => {

  });
  }


  PassUpdate() {
    this.updatePass = this.formBuilder.group({
      newpassword: ['', Validators.compose([Validators.required])],
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
