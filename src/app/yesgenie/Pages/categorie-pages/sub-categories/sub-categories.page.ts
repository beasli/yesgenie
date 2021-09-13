import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ModalController } from '@ionic/angular';
import { YesServiceService } from '../../../../yes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchPage } from '../../search/search.page';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.page.html',
  styleUrls: ['./sub-categories.page.scss'],
})
export class SubCategoriesPage implements OnInit {

  responseData: any;
  Id: any;
  SubCatName: any;
  
  public items = [
    { name: "Shirts", img: "assets/images/category-images/shirt.jpg", count: "12" },
    { name: "Top", img: "assets/images/category-images/top.jpg", count: "12" },
    { name: "Bottom", img: "assets/images/category-images/bottom.jpg", count: "12" },
    { name: "Winter", img: "assets/images/category-images/winter.jpg", count: "15" },
    { name: "Shoes", img: "assets/images/category-images/shoes.jpg",  count: "12" },
    { name: "Watches", img: "assets/images/category-images/watches.jpg", count: "12" },
  ];
  constructor(public modalCtrl: ModalController, private router: Router, private route: ActivatedRoute, public menuCtrl: MenuController, public nav: NavController, public services: YesServiceService) { }
  ngOnInit() {
  }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    this.Id = this.route.snapshot.paramMap.get('id');

    console.log(JSON.parse(this.Id));

    this.SubCatName = this.route.snapshot.paramMap.get('name');

  //  this.subcategory();
    this.subcategory(this.Id);

    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }


subcategory(id: number) {

  let data = {
    id: id
};

  this.services.subcat(data).subscribe(result => {
  if (result.response == '' || null) {
    this.GoToProdustsPage(this.Id, this.SubCatName)
  } else {
    this.responseData = result.response;
  }
  }, error => {
  });
  }

  onClickDetails(id:number, name:number){
    this.router.navigate(['/bs-products',{id:id, name:name}])
    }


    GoToProdustsPage(id:number, name:string){
      this.router.navigate(['/bs-products',{id:id, name:name}])
      }

  
      async opensearch() {
        const modal = await this.modalCtrl.create({
            component: SearchPage
        });
        return await modal.present();
    }
}
