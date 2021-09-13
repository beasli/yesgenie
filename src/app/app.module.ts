import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import * as Hammer from 'hammerjs';
// For Translation
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
import { ConfigService } from './yesgenie/providers/config/config.service';
import { SharedDataService } from './yesgenie/providers/shared-data/shared-data.service';
import { LocationDataService } from './yesgenie/providers/location-data/location-data.service';
// // For Modals
import { CurrencyListPageModule } from './yesgenie//Pages/currency-list/currency-list.module';
import { SearchPageModule } from './yesgenie//Pages/search/search.module';
import { PrivacyPolicyPageModule } from './yesgenie//Pages/privacy-policy/privacy-policy.module';
import { TermServicesPageModule } from './yesgenie//Pages/term-services/term-services.module';
import { RefundPolicyPageModule } from './yesgenie//Pages/refund-policy/refund-policy.module';
import { FollowersPageModule } from './yesgenie//Pages/followers/followers.module';
import { FollowingPageModule } from './yesgenie//Pages/following/following.module';
import { SelectCountryPageModule } from './yesgenie//Pages/select-country/select-country.module';
import { SelectZonesPageModule } from './yesgenie//Pages/select-zones/select-zones.module';
import { LanguagePageModule } from './yesgenie//Pages/language/language.module';
import { ScratchCardPageModule } from './yesgenie//Pages/scratch-card/scratch-card.module';
import { BlankModalPage } from './yesgenie//Pages/blank-modal/blank-modal.page';
import { BlankModalPageModule } from './yesgenie//Pages/blank-modal/blank-modal.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LineLogin } from '@ionic-native/line-login/ngx';

// For Push Notifications
import { FCM } from '@ionic-native/fcm/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

// For Wordpress
import { HTTP } from '@ionic-native/http/ngx';

// For Youtube Api
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

// For Admob Free
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobFreeService } from './admob-free.service';
import { ChangePasswordPageModule } from './yesgenie/Pages/change-password/change-password.module';
import { MyAccountPageModule } from './yesgenie/Pages/my-account/my-account.module';
import { MyOrdersPageModule } from './yesgenie/Pages/my-orders/my-orders.module';
import { DownloadsPageModule } from './yesgenie/Pages/downloads/downloads.module';
import { WalletPageModule } from './yesgenie/Pages/wallet/wallet.module';
import { QuoteRequestPageModule } from './yesgenie/Pages/quote-request/quote-request.module';
import { Market } from '@ionic-native/market/ngx';


// For Pinch Gesture
@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pinch': { enable: true }
  }
}

@NgModule({
  declarations: [AppComponent,
  ],

  imports: [
    BlankModalPageModule,
    SearchPageModule,
    PrivacyPolicyPageModule,
    TermServicesPageModule,
    RefundPolicyPageModule,
    WalletPageModule,
    FollowersPageModule,
    FollowingPageModule,
    ChangePasswordPageModule,
    MyAccountPageModule,
    MyOrdersPageModule,
    DownloadsPageModule,
    QuoteRequestPageModule,
    SelectCountryPageModule,
    SelectZonesPageModule,
    LanguagePageModule,
    ScratchCardPageModule,
    CurrencyListPageModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    // For Becrux Side
    ConfigService,
    LocationDataService,
    SharedDataService,
    //For In App Browser
    InAppBrowser,
    // For Scripts
    Facebook,
    GooglePlus,
    LineLogin,
    Geolocation,
    NativeGeocoder,
    FCM,
    OneSignal,
    HTTP,
    YoutubeVideoPlayer,
    AdMobFree,
   SocialSharing,
   Market,
   ThemeableBrowser,
    AdmobFreeService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
