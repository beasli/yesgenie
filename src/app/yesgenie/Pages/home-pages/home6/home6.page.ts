import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonContent, NavController, MenuController, ModalController } from '@ionic/angular';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { CustomThemeService } from '../../services/custom-theme.service';
import { YesServiceService } from '../../../../yes-service.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { SearchPage } from '../../search/search.page';


@Component({
  selector: 'app-home6',
  templateUrl: './home6.page.html',
  styleUrls: ['./home6.page.scss'],
})

export class Home6Page implements OnInit {

  responseData: any;

  responseDatacat: any;

  responseDataLatPro: any;

  responseDatablog: any;

  latitude: any;

  longitude: any;

  nearestProduct: any;

  @ViewChild(IonContent, { static: true }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0,
    // initialSlide: 0,
    // autoplay:true
  }

  public saleItems: any = [1, 1, 1, 1, 1, 1];

  constructor(public modalCtrl: ModalController, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private router: Router, public services: YesServiceService, public menuCtrl: MenuController, public http: HttpClient, private service: CustomThemeService, public config: ConfigService, public shared: SharedDataService, public nav: NavController) {
  
  }
  ngOnInit() {

  }

  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }
  goToSearchPage() {
    this.nav.navigateForward("bs-search");
  }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }


  goNotification(){
    this.nav.navigateForward("bs-notifications");
  }


  ionViewWillEnter() {

    this.getGeolocation();

    this.slider() 

      this.LatestPro();

      this.blog();

      this.category();
    
  }


  async opensearch() {
    const modal = await this.modalCtrl.create({
        component: SearchPage
    });
    return await modal.present();
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


Searchnearest() {
  
  const  userData = 'lat=' + this.latitude + '&long=' + this.longitude;
  console.log(userData);
  this.services.Searchnearest(userData).subscribe(result => {
  this.nearestProduct = result.response;
  console.log(this.nearestProduct);

}, error => {

});
}



slider() {

  this.services.slider().subscribe(result => {
  this.responseData = result.response;
  if (this.responseData.Status === 0) {
  } else {
  console.log(this.responseData);
  }
  }, error => {
  });
  }


  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };


  category() {

    this.services.category().subscribe(result => {
    this.responseDatacat = result.response;
    if (this.responseDatacat.Status === 0) {
    } else {
    console.log(this.responseDatacat);
    }
    }, error => {
    });
    }


    LatestPro() {

      this.services.LatestPro().subscribe(result => {
      this.responseDataLatPro = result.response;
      console.log(this.responseDataLatPro);
      if (this.responseDataLatPro.Status === 0) {
      } else {
      }
      }, error => {
      });
      }



      blog() {

        this.services.blog().subscribe(result => {
        this.responseDatablog = result.response;
        if (this.responseDatablog.Status === 0) {
        } else {
        console.log(this.responseDatablog);
        }
        }, error => {
        });
        }

  
    onClickDetails(id:string){
      this.router.navigate(['/bs-sub-categories',{id:id}])
      }


      onClickBlog(idb:string){
        this.router.navigate(['/bs-news-detail',{idb:idb}])
        }
      
  }
