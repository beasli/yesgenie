import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController, ModalController, MenuController, ToastController } from '@ionic/angular';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../term-services/term-services.page';
import { CustomThemeService } from '../services/custom-theme.service';
import { Router } from '@angular/router';
import { FollowersPage } from '../followers/followers.page';
import { FollowingPage } from '../following/following.page';
import { ChangePasswordPage } from '../change-password/change-password.page';
import { MyOrdersPage } from '../my-orders/my-orders.page';
import { MyAccountPage } from '../my-account/my-account.page';
import { DownloadsPage } from '../downloads/downloads.page';
import { QuoteRequestPage } from '../quote-request/quote-request.page';
import { YesServiceService } from 'src/app/yes-service.service';
import { Events } from '@ionic/angular';
import { WalletPage } from '../wallet/wallet.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Market } from '@ionic-native/market/ngx';
import { SearchPage } from '../search/search.page';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    userdata: any;


    public itemColor = [];
    public iconColorVar = "";
    data: any;
    constructor(public services: YesServiceService, private router: Router, public events: Events, public toastController: ToastController, private service: CustomThemeService, public menuCtrl: MenuController,
        public nav: NavController, public modalCtrl: ModalController, private elementRef: ElementRef, private socialSharing: SocialSharing, private market: Market) {
        this.itemColor = ["black"];//to get the coloe from custom-theme service
        this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
        this.iconColorVar = this.data;
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        //for the selection of colors
        if (this.data == "black")//if selected color is black 
        {
            this.itemColor = ["black"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "red")//if selected color is red 
        {
            this.itemColor = ["#F44336"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "green")//if selected color is green 
        {
            this.itemColor = ["#4CAF50"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "blue")//if selected color is blue
        {
            this.itemColor = ["#008577"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
        else if (this.data == "gray")//if selected color is gray
        {
            this.itemColor = ["#9E9E9E"];
            this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
        }
    }
    ngOnInit() {
    }
    openAddAccountPage() {
        this.nav.navigateForward("bb-my-account");
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


    async openWalletPage() {
        const modal = await this.modalCtrl.create({
            component: WalletPage
        });
        return await modal.present();
    }



    async openFollowersPage() {
        const modal = await this.modalCtrl.create({
            component: FollowersPage
        });
        return await modal.present();
    }


    async openFollowingPage() {
        const modal = await this.modalCtrl.create({
            component: FollowingPage
        });
        return await modal.present();
    }

    async openChangePassPage() {
        const modal = await this.modalCtrl.create({
            component: ChangePasswordPage
        });
        return await modal.present();
    }



    async openOrdersPage() {
        this.nav.navigateForward("bs-my-orders");
    }


    async openQuoteRequestPage() {
        const modal = await this.modalCtrl.create({
            component: QuoteRequestPage
        });
        return await modal.present();
    }



    async openEditProPage() {
        const modal = await this.modalCtrl.create({
            component: MyAccountPage
        });
        return await modal.present();
    }


    async openDownloadPage() {
        const modal = await this.modalCtrl.create({
            component: DownloadsPage
        });
        return await modal.present();
    }



    async openRefundPolicyPage() {
        const modal = await this.modalCtrl.create({
            component: RefundPolicyPage
        });
        return await modal.present();
    }


    goToWishListPage() {
        this.nav.navigateForward("bs-wish-list");
    }

    usersettings() {
        this.nav.navigateForward("user-settings");
    }


    openMessagePage() {
        this.nav.navigateForward("message");
    }


    goToAddressPage() {
        this.nav.navigateForward("bs-addresses");
    }


    goToSearchPage() {
        this.nav.navigateForward("bs-search");
    }


    goToCartPage() {
        this.nav.navigateForward("bs-cart");
    }


    async officiaWebSite() {
        const toast = await this.toastController.create({
            message: 'Official Website Clicked',
            duration: 2000
        });
        toast.present();
    }


    // async rateUs() {
    //     const toast = await this.toastController.create({
    //         message: 'Rate Us Clicked',
    //         duration: 2000
    //     });
    //     toast.present();
    // }


    // async share() {
    //     const toast = await this.toastController.create({
    //         message: 'Share Clicked',
    //         duration: 2000
    //     });
    //     toast.present();
    // }


    share() {
        this.socialSharing.share('https://play.google.com/store/apps/details?id=yesgenie.app.com');
      }  // End of fu
      
      
      
      rateUs() {
        this.market.open('yesgenie.app.com');
        // this.inAppBrowser.create('https://play.google.com/store/apps/details?id=health.optim');
       }

    pinchEvent(e) {
        this.nav.navigateForward("ui-templates-details");
    }


    ionViewWillEnter() {


        const userDetails = localStorage.getItem('userdata');

        this.userdata = JSON.parse(userDetails);
    
        console.log(this.userdata);

    }

    logOut(){
      localStorage.removeItem('userdata');
     // localStorage.clear();
      setTimeout(() =>     this.router.navigateByUrl('tabs/bs-home'), 1000);
            this.events.publish("updateSideMenu");
            this.events.publish("fblogout");
    }

    async opensearch() {
        const modal = await this.modalCtrl.create({
            component: SearchPage
        });
        return await modal.present();
    }
}