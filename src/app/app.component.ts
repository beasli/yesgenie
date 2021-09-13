import { Component, ViewChildren, QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Platform, NavController, ModalController, MenuController, ToastController, IonRouterOutlet, AlertController } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './yesgenie/Pages/login/login.page';
import { CurrencyListPage } from './yesgenie/Pages/currency-list/currency-list.page';
import { LanguagePage } from './yesgenie/Pages/language/language.page';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Events } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Market } from '@ionic-native/market/ngx';



// For Static Theme Apply
const themes = {
  undefined: {
    primary: '',
    secondary: '',
    tertiary: '',
    light: '',//background
    medium: '',//all btn color
    dark: '',//text color
    warning: ''
  }
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['app.scss']
})
export class AppComponent {

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;


  userdata: any;

  tempArray: any;
  // For UI Components Array
  
  // For Becrux, Lesath, Rigel Bottom
  bb_visible = true;
  lb_visible = true;
  sb_visible = true;

  // For Main Menu (Components)
  itemColor: any;
  public iconColorVar = "";

  // For Multipurpose Screen Content
  public itemsScreen: any = [];


 
  // For Becrux Side Menu
  visibleHome = false;//for home expand
  public itemsHome: any = [];//home list
  visibleCategory = false;//for category expand
  public itemsCategory: any = [];//category list
  visibleShop = false;//for shop expand
  public itemsShop: any = [];//shop list

  // For Becrux SideMenu Items
  //home list
  public bs_Home = [
    {
      name: "Home",
      icon: 'home',
      url: 'tabs/bs-home'
    },
    {
      name: "Category",
      icon: 'list',
      url: 'tabs/bs-categories'
    },
    {
      name: 'My Wish List',
      icon: 'heart',
      url: 'tabs/bs-wish-list'

    },

    // {
    //   name: 'My Orders',
    //   icon: 'cart',
    //   url: '/bs-my-orders'
    // },
   
    // {
    //   name: 'Edit Profile',
    //   icon: 'lock',
    //   url: '/bs-my-account'
    // },

    // {
    //   name: 'Reward Points',
    //   icon: 'happy',
    //   url: '/bs-reward-points'

    // },
    // {
    //   name: 'Scratch Card',
    //   icon: 'notifications',
    //   url: '/bs-notifications'

    // },
    {
      name: 'Contact Us',
      icon: 'call',
      url: '/bs-contact-us'
    },

    {
      name: 'About Us',
      icon: 'information-circle',
      url: '/bs-about-us'

    },


    // {
    //   name: 'Support',
    //   icon: 'people',
    //   url: '/support'

    // },
    // {
    //   name: 'News',
    //   icon: 'paper',
    //   url: '/bs-news'
    // },
    // {
    //   name: 'Share',
    //   icon: 'share'
    // },
    // {
    //   name: 'Rate Us',
    //   icon: 'star-half'
    // },
    // {
    //   name: 'Settings',
    //   icon: 'settings',
    //   url: '/bs-settings'
    // },
    
    // {
    //   name: 'Exit',
    //   icon: 'exit',
    //   url: '/bs-login'
    // },
  ]

 
 
  // For All pages
  bs_Pages = [
    {
      name: "Home",
      icon: 'home',
      url: 'tabs/bs-home'
    },
    {
      name: "Category",
      icon: 'list',
      url: 'tabs/bs-categories'
    },
    {
      name: 'My Wish List',
      icon: 'heart',
      url: 'tabs/bs-wish-list'
    },

    // {
    //   name: 'My Orders',
    //   icon: 'cart',
    //   url: '/bs-my-orders'
    // },
   
    // {
    //   name: 'Edit Profile',
    //   icon: 'lock',
    //   url: '/bs-my-account'
    // },
    // {
    //   name: 'Reward Points',
    //   icon: 'happy',
    //   url: '/bs-reward-points'

    // },
    // {
    //   name: 'Scratch Card',
    //   icon: 'notifications',
    //   url: '/bs-notifications'

    // },
    {
      name: 'Contact Us',
      icon: 'call',
      url: '/bs-contact-us'
    },
    {
      name: 'About Us',
      icon: 'information-circle',
      url: '/bs-about-us'

    },
    // {
    //   name: 'News',
    //   icon: 'paper',
    //   url: '/bs-news'
    // },
    {
      name: 'Share',
      icon: 'share'
    },
    // {
    //   name: 'Rate Us',
    //   icon: 'star-half'
    // },
    // {
    //   name: 'Settings',
    //   icon: 'settings',
    //   url: '/bs-settings'
    // },
    
    // {
    //   name: 'Exit',
    //   icon: 'exit',
    //   url: '/bs-login'
    // },
  ]



  bs_Edit_profile = [
    {
      name: 'Edit Profile',
      icon: 'lock',
      url: '/bs-my-account'

    },
    {
      name: 'Addresses',
      icon: 'home',
      url: '/bs-addresses'
    },
    {
      name: 'My Orders',
      icon: 'cart',
      url: '/bs-my-orders'
    }
  ]
  // For Lesath Side Menu
  visibleMyAccount = false;//for MyAccount expand
  visibleAboutUs = false;//for AboutUs expand
  public itemsMyAccount: any = [];//MyAccount list
  public itemsAboutUs: any = [];//AboutUs list

  
  
  // Constructor
  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public modalCntrl: ModalController,
    public nav: NavController,
    private navCtrl: NavController,
    private events: Events,
    public statusbar: StatusBar,
    private elementRef: ElementRef,
    public toastCtrl: ToastController,
    private router: Router,
    private splashScreen: SplashScreen,
    private alertController: AlertController,
    private socialSharing: SocialSharing,
    private market: Market,
  ) {

    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    console.log(this.userdata);
    

    this.sidemenu();

    events.subscribe('updateSideMenu', (value) => {
      
    const userDetails = localStorage.getItem('userdata');

    this.userdata = JSON.parse(userDetails);

    console.log(this.userdata);

    
    });


    events.subscribe('updateSideMenu', (value) => {
      this.sidemenu();
    });


    //for status bar
    this.initializeApp();

    this.backButtonEvent();

    // For Becrux Bottom Tabs Handle
    this.events.subscribe('b_bottom', (data) => {
      this.bb_visible = data;
    });

    // For Lesath Bottom Tabs Handle
    this.events.subscribe('l_bottom', (data) => {
      this.lb_visible = data;
    });
    // For Rigel Bottom Tabs Handle
    this.events.subscribe('s_bottom', (data) => {
      this.sb_visible = data;
    });
    this.itemsHome = [
      { expandedHome: false },
    ];
    this.itemsCategory = [
      { expandedcategory: false },
    ];
    this.itemsShop = [
      { expandedShop: false },
    ];

    // For Lesath Side Menu
    // For MyAccount not expand by default
    this.itemsMyAccount = [
      { expandedHelp: false },
    ];
    // For aboutUs not expand by default
    this.itemsAboutUs = [
      { expandedHelp: false },
    ];

    // For Expandable Screen Item
    this.itemsScreen = [
      { expandedHelp: false },
    ];
 

    if(this.userdata != null || '' ) {
      this.router.navigateByUrl('/tabs/bs-home');
                } 
                else{
                  this.router.navigateByUrl('/bs-login');
                }


}



initializeApp() {
  this.platform.ready().then(() => {

    this.statusBar.overlaysWebView(false);
    // set status bar to white
    this.statusBar.backgroundColorByHexString('#021841');

    this.splashScreen.hide();

  });
}




backButtonEvent() {
  this.platform.backButton.subscribeWithPriority(0, () => {
    this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
      if (this.router.url != '/tabs/bs-home') {
        await this.router.navigate(['/tabs/bs-home']);
      } else if (this.router.url === '/tabs/bs-home') {
        if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
          this.lastTimeBackPress = new Date().getTime();
          this.presentAlertConfirm();
        } else {
          navigator['app'].exitApp();
        }
      }
    });
  });
}

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    // header: 'Confirm!',
    message: 'Are you sure you want to exit the app?',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {}
    }, {
      text: 'Close App',
      handler: () => {
        navigator['app'].exitApp();
      }
    }]
  });

  await alert.present();
}



sidemenu(){
  if(this.userdata != '' && this.userdata != null) {
    this.tempArray = this.bs_Home;
 } else if(this.userdata == '' && this.userdata == null) {
   this.tempArray = this.bs_Pages;
 }
}



share() {
  this.socialSharing.share('https://play.google.com/store/apps/details?id=yesgenie.app.com');
}  // End of fu



rateUs() {
  this.market.open('yesgenie.app.com');
  // this.inAppBrowser.create('https://play.google.com/store/apps/details?id=health.optim');
 }


loginPage(){
  this.router.navigateByUrl('/bs-login');
}

settingPage(){
  this.router.navigateByUrl('/bs-settings');
}


}
