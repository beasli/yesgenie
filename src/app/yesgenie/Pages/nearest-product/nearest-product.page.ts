import { Component, OnInit, Input, ViewChild, ViewEncapsulation, ApplicationRef } from '@angular/core';
import { ModalController, MenuController, NavController, IonContent, LoadingController } from '@ionic/angular';
import { YesServiceService } from 'src/app/yes-service.service';
import { Router } from '@angular/router';
import { CustomThemeService } from '../services/custom-theme.service';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { SearchPage } from '../search/search.page';

@Component({
  selector: 'app-nearest-product',
  templateUrl: './nearest-product.page.html',
  styleUrls: ['./nearest-product.page.scss'],
})
export class NearestProductPage implements OnInit {

  latitude: any;
  longitude: any;
  nearestProduct: any;
  data: any;
  @ViewChild(IonContent, { static: true }) content: IonContent;
 // @Input('type') type;//product data

  constructor(public modalCtrl: ModalController, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private router: Router, public services: YesServiceService, public menuCtrl: MenuController, public http: HttpClient, private service: CustomThemeService, public config: ConfigService,
  public loadingController: LoadingController, public shared: SharedDataService, public nav: NavController) {
  
  }

  ngOnInit() {
    this.getGeolocation();
  }


  getGeolocation() {
 
    this.geolocation.getCurrentPosition().then((resp) => {
  
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude)
      console.log(this.longitude)
      this.Searchnearest();
    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }
  
  
  async Searchnearest() {

    const loading = await this.loadingController.create({
      spinner: 'lines',
      duration: 6000,
    });
    await loading.present();
    
    const  userData = 'lat=' + this.latitude + '&long=' + this.longitude;
    console.log(userData);
    this.services.Searchnearestall(userData).subscribe(result => {
    this.nearestProduct = result.response;
    console.log(this.nearestProduct);
    loading.dismiss();
  
  }, error => {
  
  });
  }

  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }

  async opensearch() {
    const modal = await this.modalCtrl.create({
        component: SearchPage
    });
    return await modal.present();
}

}
