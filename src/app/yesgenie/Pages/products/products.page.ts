import { Component, OnInit, Input, ViewChild, ViewEncapsulation, ApplicationRef } from '@angular/core';

import { LoadingController, ToastController, ActionSheetController, NavController, MenuController, ModalController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { CustomThemeService } from '../services/custom-theme.service';
import { YesServiceService } from '../../../yes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchPage } from '../search/search.page';

// import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  
  Id: any;
  responseData: any;
  ProductResponse: any;
  proid: any;
  SubCatName: any;
  ProductResponse1: any;

  ResponseFieldOption: any;
  customfieldoption = new Array(); 

  ResponseFields: any;
  catproid: any;
  MessShow:any = '';

  maxAmount = 1000000;
  minAmount = 0;

  structure: any = { lower: 0, upper: this.maxAmount };
  // @ViewChild(Content,{static:false}) content: Content;
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  data1: any;
  side = "right";
 // @Input('type') type;//product data
  products: any = [1, 1, 1, 1];
  scrollSegments = "all"//scrollable segment
  productView = 'grid';
  type = "";
  sortOrder = 'Newest';
  sortArray = ['Newest', 'A - Z', 'Z - A'];
  productresvar: any;

  minPrice: any;
  maxPrice: any;

  constructor(private router: Router, public services: YesServiceService, public menuCtrl: MenuController,
    public shared: SharedDataService, private route: ActivatedRoute, public modalCtrl: ModalController,
    public config: ConfigService, public toastController: ToastController,
    public actionSheetController: ActionSheetController, public loadingController: LoadingController,
    public nav: NavController, private service: CustomThemeService, private applicationRef: ApplicationRef) {
   
  }
  
  changeLayout() {
    if (this.productView == 'list') this.productView = "grid";
    else this.productView = "list";
  }
  // async onIconClick(i) {

  //   if (i.fav == false) {
  //     i.fav = true;
  //     const toast = await this.toastController.create({
  //       message: 'Added To Wish List!',
  //       duration: 2000
  //     });
  //     toast.present();

  //   }
  //   else {
  //     i.fav = false;
  //     const toast = await this.toastController.create({
  //       message: 'Removed From Wish List!',
  //       duration: 2000
  //     });
  //     toast.present();
  //   }
  // }




  ngOnInit() {
    this.menuCtrl.enable(true, 'Menu2');
  }
  async resetFilters() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Newest',
      cssClass: 'action-sheet',
      buttons: [{
        text: 'A - Z',
        handler: () => {
        }
      }, {
        text: 'Z - A',
        handler: () => {
        }
      }, {
        cssClass: 'as-cancel-color',
        text: 'Cancel',
        role: 'destructive',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
  async refresh() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'lines',
      duration: 2000
    });
    return await loading.present();
  }

  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }

  openRightMenu() {
    this.menuCtrl.enable(true, 'bbShop');
  }


  toggleMenu() {
    this.menuCtrl.toggle("bbShop");
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'Menu2');
    this.menuCtrl.enable(false, 'bbShop');
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

    this.Getcustomfields();

    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu2');
    this.menuCtrl.enable(false, 'Menu3');
  }


  async subcategory(id: number) {

    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'lines',
      duration: 4000,
    });
    await loading.present();

    let data = {
      id: id
  };
  
    this.services.subcat(data).subscribe(result => {
      console.log(result);
    this.responseData = result.response;
  //  console.log(result);
    if(this.responseData.length==0){
      this.productbysubcategory(this.Id)
      loading.dismiss();
    } else {
    this.proid = result.response[0].category_id;
    this.product(this.proid);
    
    if (this.responseData.Status === 0) {
    } else {
    console.log(this.responseData);
    loading.dismiss();
    }
  }
    }, error => {
    });
    }


    async product(id1) {

      const loading = await this.loadingController.create({
        message: 'Please wait...',
        spinner: 'lines',
        duration: 4000,
      });
      await loading.present();

      let data1 = {
        id1: id1
    };

    this.catproid = id1;
    
      this.services.product(data1).subscribe(result => {
        console.log(result);
        if(result == null){
          this.ProductResponse = result;
          loading.dismiss();

          setTimeout(() => {
            this.MessShow =  "No products found!";
           }, 4000);

        } else{
      this.ProductResponse = result.response.product_data;

      console.log(this.ProductResponse);
     
      setTimeout(() => {
        this.MessShow =  "No products found!";
       }, 4000);

      this.applicationRef.tick();
    //  this.toggleMenu();
    loading.dismiss();
        }
      }, error => {
      });
      }



      productbysubcategory(id5: number) {

        let data5 = {
          id5: id5
      };
      
        this.services.productbysubcategory(data5).subscribe(result => {
          console.log(result);
          if(result.response == null || ''){
        this.productbycat(this.Id)
          } else {
        this.ProductResponse = result.response.product_data;
        this.productresvar = result.response.variations_price;
        console.log(this.productresvar)

        setTimeout(() => {
          this.MessShow =  "No products found!";
         }, 4000);

        if (this.ProductResponse.status == 0) {
        } else {
        console.log(this.ProductResponse);

        setTimeout(() => {
          this.MessShow =  "No products found!";
         }, 4000);

        }
      }
        }, error => {
        });
        }



        productbycat(id6: number) {

          let data6 = {
            id6: id6
        };
        
          this.services.productbycat(data6).subscribe(result => {
            console.log(result);
          this.ProductResponse = result.response.product_data;
          this.productresvar = result.response.variations_price;
          console.log(this.productresvar)
          
          setTimeout(() => {
            this.MessShow =  "No products found!";
           }, 4000);

          if (this.ProductResponse.status == 0) {
          } else {
          console.log(this.ProductResponse);
          
          setTimeout(() => {
            this.MessShow =  "No products found!";
           }, 4000);

          }
          }, error => {
          });
          }



      async opensearch() {
        const modal = await this.modalCtrl.create({
            component: SearchPage
        });
        return await modal.present();
    }



      FilterProduct() {

        const  userData = 'third_category_id=' + this.catproid + '&min-price=' + this.minPrice * 100 + '&max-price=' + this.maxPrice * 100;
  
        this.services.Filterproduct(userData).subscribe(result => {
        this.ProductResponse = result.response.product;
        console.log(result);
        if (this.ProductResponse.status == 0) {
        } else {
        console.log(this.ProductResponse);
        this.applicationRef.tick();
        this.toggleMenu();
      //  this.toggleMenu();
        }
        }, error => {
        });
        }


        Getcustomfieldoptions(id) {
         const  userData = 'field_id=' + id;
          this.services.Getcustomfieldoptions(userData).subscribe(result => {
            console.log(result);
          this.ResponseFieldOption = result.response.custom_field_options;
          this.customfieldoption.push(this.ResponseFieldOption);
          console.log(this.customfieldoption);
          if (this.ResponseFieldOption.status == 0) {
          } else {
          console.log(this.ResponseFieldOption);
          this.applicationRef.tick();
        //  this.toggleMenu();
          }
          }, error => {
          });
          }


        Getcustomfields() {
          const  userData = 'category_id=' + this.Id;
          this.services.Getcustomfields(userData).subscribe(result => {
            console.log(result);
          this.ResponseFields = result.response.custom_filters;

          for (let value of this.ResponseFields) {
            this.Getcustomfieldoptions(value.id);
          }

          if (this.ResponseFields.status == 0) {
          } else {
          console.log(this.ResponseFields);
          this.applicationRef.tick();
        //  this.toggleMenu();
          }
          }, error => {
          });
          }


        Getcustomfieldproduct(id) {
          const  userData = 'field_id=' + id;
          this.services.Getcustomfieldproduct(userData).subscribe(result => {
          this.ProductResponse = result.response.custom_field_options;
          if (this.ProductResponse.Status === 0) {
          } else {
          console.log(this.ProductResponse);
          this.applicationRef.tick();
        //  this.toggleMenu();
          }
          }, error => {
          });
          }


      goToProductDetail(id:number, catid:number, subcatid:number, title:string){
        this.router.navigate(['bs-product-detail',{id:id, catid:catid, subcatid:subcatid, title:title}])
        }


}