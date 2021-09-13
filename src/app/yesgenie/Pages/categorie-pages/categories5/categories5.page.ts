import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ModalController } from '@ionic/angular';
import { YesServiceService } from '../../../../yes-service.service';
import { Router } from '@angular/router';
import { SearchPage } from '../../search/search.page';

@Component({
  selector: 'app-categories5',
  templateUrl: './categories5.page.html',
  styleUrls: ['./categories5.page.scss'],
})
export class Categories5Page implements OnInit {
  responseData: any;
  
  public items = [
    {
      name: "Women Clothing", img: "assets/template-themes/becrux/images/category-images/7.jpg",
      
      products: [
        { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
        { name: "Bottom", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "9" },
      ]
    }
    // {
    //   name: "Watch Accessories", img: "assets/template-themes/becrux/images/category-images/8.jpg",
    //   products: [
    //     { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
    //   ]
    // },
  ];
  constructor(public modalCtrl: ModalController, private router: Router, public menuCtrl: MenuController,public services: YesServiceService, public nav: NavController) { }

  ngOnInit() {
    this.category()
  }


  goNotification(){
    this.nav.navigateForward("bs-notifications");
  }

  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  goToSearchPage() {
    this.nav.navigateForward("bs-search");
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }

category() {

  this.services.category().subscribe(result => {
  this.responseData = result.response;
  if (this.responseData.Status === 0) {
  } else {
  console.log(this.responseData);
  }
  }, error => {
  });
  }

  onClickDetails(id:number, name: string){
    this.router.navigate(['/bs-sub-categories',{id:id, name:name}])
    }


    async opensearch() {
      const modal = await this.modalCtrl.create({
          component: SearchPage
      });
      return await modal.present();
  }
    
}
