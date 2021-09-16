import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController, MenuController, LoadingController, AlertController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SignUpPage } from '../sign-up/sign-up.page';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { YesServiceService } from '../../../yes-service.service';
import { Events } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { environment } from '../../../../environments/environment';
import { Storage } from '@ionic/storage';



import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  responseData: any;

  userDataGoogle: any = {};
  
  formData = {
    email: '',
    password: '',
  };

  
  //Invalid username or password.
  errorMessage = 'Invalid username or password.';
  isLoggedIn: boolean;
  users: any;
  // FacebookData: { username: any; email: any;};

  FacebookData = { username: '', email: '',};

  userData: any;
  name: any;
  email: any;
  displayName: any;
  userId: any;
  Googlemail: any;

  ngOnInit() { }
  constructor(private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private googlePlus: GooglePlus,
    public navCtrl: NavController,
    public authService: YesServiceService, 
    public menuCtrl: MenuController,
    translate: TranslateService,
    private router: Router,
    public events: Events,
    private fb: Facebook,
    private storage: Storage,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private platform: Platform
  ) {
    fb.getLoginStatus()
    .then(res => {
      console.log(res.status);
      if (res.status === 'connect') {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log(e));


    events.subscribe('fblogout', (value) => {
      
        this.fb.logout()
          .then( res => this.isLoggedIn = false)
          .catch(e => console.log('Error logout from Facebook', e));    
      });

  }



  // googleSignIn() {
  //   this.googlePlus.login({})
  //     .then(result => this.userData = result)
  //     .catch(err => this.userData = `Error ${JSON.stringify(err)}`);
  //     alert(this.userData);
  // }




  // async doGoogleLogin(){
    
  //   this.googlePlus.login({
  //     'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
  //     'webClientId': '534601769735-nm6cfadr7ur0psi86kr666119n4jgntr.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
  //     'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
  //     })
  //     .then(user => {
  //       this.name = user.displayName,
  //       this.email = user.email,
  //       //save user data on the native storage
  //       alert(this.name)
  //       // .then(() => {
  //       //    this.router.navigate(["/user"]);
  //       // }, (error) => {
  //       //   console.log(error);
  //       // })
  //     }, err => {
  //       console.log(err);
        
  //     })
  // }





  // async doGoogleLogin(){
  //   const loading = await this.loadingController.create({
  //     message: 'Please wait...'
  //   });
  //   this.presentLoading(loading);
  //   this.googlePlus.login({
  //     'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
  //     'webClientId': environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
  //     'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
  //     })
  //     .then(user => {
        
  //       this.FacebookData = {
  //                 username: user.displayName,
  //                 email: user.email,
  //               };
  //               alert(user.email);
  //       //save user data on the native storage
  //       this.storage.set('google_user', {
  //         name: user.displayName,
  //         email: user.email,
  //         picture: user.imageUrl
  //       })
  //       .then(() => {
  //         this.signup();
  //       }, (error) => {
  //         console.log(error);
  //       })
  //       loading.dismiss();
  //     }, err => {
  //       console.log(err);
  //       if(!this.platform.is('cordova')){
  //         this.presentAlert();
  //       }
  //       loading.dismiss();
  //     })
  // }


  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }


  async presentLoading(loading) {
    return await loading.present();
  }


  forgot() {
    this.navCtrl.navigateForward("bs-forgot-password");
  }



  // googleSignIn() {
  //   this.googlePlus.login({})
  //     .then(result => this.userDataGoogle = result)
  //     .catch(err => this.userDataGoogle = `Error ${JSON.stringify(err)}`);
  //     alert(this.userDataGoogle);
  //       this.FacebookData = {
  //         username: this.userDataGoogle.displayName,
  //         email: this.userDataGoogle.email,
  //       };
  //      // alert(this.users);
  //       this.signup();
  // }





  fbLoginuser() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if (res.status === 'connected') {
          this.getUserDetail(res.authResponse.userID);
        } else if (res.status === 'connect') {
          this.getUserDetail(res.authResponse.userID);
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }


  

  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        console.log(res);
        this.users = res;
        this.FacebookData = {
          username: this.users.name,
          email: this.users.email,
        };

        setTimeout(() => {
          this.signup();
        }, 1000);

      })
      .catch(e => {
        console.log(e);
      });
  }





  Googlelogin() {
    this.googlePlus.login({})
      .then(res => {
        console.log(res);

        this.users = res;

        this.FacebookData = {
          username: this.users.displayName,
          email: this.users.email,
        };


        setTimeout(() => {
          this.signup();
        }, 1000);

    
      })
      .catch(err => console.error(err));
  }



  


  signup() {

    this.authService.registerUser(this.FacebookData).then(result => {
    this.responseData = result;

    console.log(this.responseData)
  //  this.data = JSON.parse(result["_body"]);
    if (this.responseData.status.code === 200) {

      localStorage.setItem('userdata', JSON.stringify(this.responseData.response));
      this.router.navigateByUrl('tabs/bs-home');
  
      this.events.publish("updateSideMenu");
  
      console.log(this.responseData);
  //  localStorage.setItem('token', JSON.stringify(this.responseData.response));
    // this.presentToast('User successfully registered');

  } else if(this.responseData.status.code === 404) {
    this.presentToast('You are already registered');
    this.fbuserlogin()
   // alert('all ready registered');
  }

  }, error => {
    if (error.url == null) {
      this.fbuserlogin()
    //  alert('all ready registered');

    } else {
      this.fbuserlogin()
    //  alert('all ready registered');

    }
  });
  }



  fbuserlogin() {
    console.log(this.FacebookData);
    this.authService.fblogin(this.FacebookData).then(result => {
    this.responseData = result;

    console.log(this.responseData)
  //  this.data = JSON.parse(result["_body"]);
    if (this.responseData.status.code == 200) {

    console.log(this.responseData);
      localStorage.setItem('userdata', JSON.stringify(this.responseData.response));
    // this.presentToast('User successfully registered');
    this.router.navigateByUrl('tabs/bs-home');

    this.events.publish("updateSideMenu");

  } else if(this.responseData.status.code == 406) {
    this.presentToast('Invalid username or password.');
  }

  }, error => {
    if (error.url == null) {
        this.presentToast('Please check your internet connection');
    } else {
        this.presentToast('Invalid username or password.');
    }
  });
  }




  login() {
    this.authService.loginUser(this.formData).then(result => {
    this.responseData = result;

    console.log("LOgin ",result)
  //  this.data = JSON.parse(result["_body"]);
    if (this.responseData.status.code == 200) {

    console.log(this.responseData);
      localStorage.setItem('userdata', JSON.stringify(this.responseData.response));
    // this.presentToast('User successfully registered');
    this.router.navigateByUrl('tabs/bs-home');

    this.events.publish("updateSideMenu");

  } else if(this.responseData.status.code == 406) {
    this.presentToast('Invalid username or password.');
  }

  }, error => {
    if (error.url == null) {
        this.presentToast('Please check your internet connection');
    } else {
        this.presentToast('Invalid username or password.');
    }
  });
  }


  /*function to move back to main menu*/
  dismiss() {
    this.navCtrl.navigateForward("tabs/bs-home");
  }



 

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
    });

    toast.present();
  }



   goToSignUp() {
    this.navCtrl.navigateForward("bs-sign-up");
  }

   goToForgot() {
    this.navCtrl.navigateForward("bs-forgot-password");
  }

  goToHomeEcom() {
    this.navCtrl.navigateForward('tabs/bs-home');
  }

  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }
  
  ionViewWillEnter() {
  
  }
  passwordType: string = 'password';
    
     passwordIcon: string = 'eye-off';

hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}
}
