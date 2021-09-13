import { Component, OnInit, Input, ApplicationRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { YesServiceService } from 'src/app/yes-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input('type') type;
//for product slider after banner
sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0,
    // initialSlide: 0,
    // autoplay:true
  }

sliderConfigHomeSix = {
  slidesPerView: 2.2,
  spaceBetween: 0
}
// For products
public responseDatacat: any

  constructor(private router: Router, public services: YesServiceService, public config: ConfigService, public shared: SharedDataService,public nav:NavController
    , private applicationRef: ApplicationRef,) {
    // setTimeout(() => {
    //   this.categories = [
    //    { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
    //    { name: "Bottoms", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "3" },
    //    { name: "Shirts", img: "assets/template-themes/becrux/images/category-images/3.jpg", count: "2" },
    //    { name: "Winter Wear", img: "assets/template-themes/becrux/images/category-images/4.jpg", count: "2" },
    //    { name: "Shoes", img: "assets/template-themes/becrux/images/category-images/5.jpg",  count: "2" },
    //    { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
    //  ];
    // }, 4000);
  }

  goToSubCategories(){
    this.nav.navigateForward("bs-products");
  }

  ngOnInit() {
    this.category();

  }

  ionViewWillEnter() {

    this.category();

  }



  category() {

    this.services.category().subscribe(result => {
    this.responseDatacat = result.response;
    if (this.responseDatacat.Status === 0) {
    } else {
      this.responseDatacat.length = 6;
    console.log(this.responseDatacat);
    }
    }, error => {
    });
    this.applicationRef.tick();
    }
  
    onClickDetails(id:number, name:number){
      this.router.navigate(['/bs-sub-categories',{id:id, name:name}])
      }

  
}
