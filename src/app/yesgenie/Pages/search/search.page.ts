import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YesServiceService } from 'src/app/yes-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchproduct: FormGroup;

  responseData: any;

  searchtype: any;

  public categories = [
    { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
    { name: "Bottoms", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "3" },
    { name: "Shirts", img: "assets/template-themes/becrux/images/category-images/3.jpg", count: "2" },
    { name: "Winter Wear", img: "assets/template-themes/becrux/images/category-images/4.jpg", count: "2" },
    { name: "Shoes", img: "assets/template-themes/becrux/images/category-images/5.jpg",  count: "2" },
    { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
 ];

  constructor(public menuCtrl: MenuController, private toastCtrl: ToastController,     public mdCtrl: ModalController,
    public nav: NavController, public formBuilder: FormBuilder, public services: YesServiceService) { }

  ngOnInit() {
    this.ProdcutSearch();
  }

  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
  }


  Searchformemberandproduct(vale) {
    const  userData = 'search_type=' + 'product' + '&input_value=' + this.searchproduct.get('input_value').value;
    console.log(userData);
    this.services.Searchformemberandproduct(userData).subscribe(result => {
    this.responseData = result.response.response;
    console.log(this.responseData);
  
  }, error => {

  });
  }



  ProdcutSearch() {
    this.searchproduct = this.formBuilder.group({
    //  search_type: ['', Validators.compose([Validators.required])],
      input_value: ['', Validators.compose([Validators.required])],
    //  search_type: ['', Validators.compose([Validators.required])],

    });
}



async presentToast(msg) {
  const toast = await this.toastCtrl.create({
    message: msg,
    duration: 2000,
    position: "middle",
    color: "primary"
  });
  toast.present();
}


dismiss() {
  this.mdCtrl.dismiss();
}



}
