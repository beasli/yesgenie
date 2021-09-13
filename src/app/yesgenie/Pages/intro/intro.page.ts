import { Component, OnInit, ViewChild } from '@angular/core';

import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

// For Static Theme Apply


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  showSkip = true;
  slideOpts = {
    zoom: false
  };


  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }


  @ViewChild(IonSlides, { static: true }) autoSlides: IonSlides;
  indexGlobal: any;
  visiable = false;
  public slides = [
    { image: "assets/template-themes/becrux/images/starter/slider1.jpg" },
    { image: "assets/template-themes/becrux/images/starter/intro_top_bg.png" },
    { image: "assets/template-themes/becrux/images/starter/slider.jpg" }
    ];
  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController, public theme: ThemeService, public splashscreen: SplashScreen) {
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    // For Local Storage And Color Scheme 
  }

  ionViewDidEnter() {
    this.splashscreen.hide();
    this.autoSlides.startAutoplay();
  }

  slideChanged() {
    this.autoSlides.getActiveIndex().then(index => {
      if (index == 4) {
        this.visiable = true;
      }
      else {
        this.visiable = false;
      }
    });
  }

  goToHomeEcom() {
    this.navCtrl.navigateForward('/bs-home');
  }

  goToLogin() {
    this.navCtrl.navigateForward('/bs-login');
  }
  
  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }
}
