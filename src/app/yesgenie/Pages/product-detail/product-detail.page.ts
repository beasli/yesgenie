import { Component, OnInit, ApplicationRef } from '@angular/core';
import { NavController, MenuController, ToastController, ModalController} from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { YesServiceService } from '../../../yes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../../../share.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SearchPage } from '../search/search.page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  select: any;

  optionValue: any;

  updatePro: FormGroup;

  public wishArray = [];

  public varAllOption = [];

  public selectedOptionValue = [];

  public pushselected = [];
  
  TotalTaxSingleProduct: any;
  responseDatatax: any;

  public disableCartButton = false;

  public isLiked = 0;
  responseData: any;
  responseData1: any;

  ProName: any;

  responseDataImg: any;
  Id: any;
  ProductResponse: any;
  catId: any;
  SubCatId: any;

  compareWith : any ;
  MyDefaultYearIdValue : any ;

  product_quantity = 1;

  public itemColor = [];
  public iconColorVar = "";
  data: any;
  heart = false;
  qtyy = 0;
  public tab1: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  
    sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  productid: any;
  thirdcategoryid: any;
  subcategoryid: any;
  categoryid: any;
  sellerid: any;
  unitprice: any;
  saleprice: any;
  quantity: any;
  shippingstate: any;
  vendorstate: any;
  totaltax: any;
  varprice: any;
  productVariation: any;
  productVariationOption: any;
  responseDataVarPrice: any;
  varresponse: any;
  ProValQun: any;
  proid: any;
  firstCatId: any;
  productresvar: any;
  MessShow: string;

  

  constructor(public formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, public services: ShareService, private service: CustomThemeService, public menuCtrl: MenuController,
    public navCtrl: NavController, public toastController: ToastController, public services1: YesServiceService, private events: Events, private storage: Storage,
    private applicationRef: ApplicationRef, private socialSharing: SocialSharing, public modalCtrl: ModalController,) {

  }


  share() {
    // Share via email
    this.socialSharing.share(
      this.responseData.title,
      this.responseData.title,
      'https://www.yesgenie.com/uploads/images/' + this.responseData.image_small,
      'https://www.yesgenie.com/' + this.responseData.slug);
  }

  async opensearch() {
    const modal = await this.modalCtrl.create({
        component: SearchPage
    });
    return await modal.present();
}



  enableDisbaleCartButton() {

    this.services1.cartProducts.forEach((value, index) => {

      if (value.product_id != this.responseData.product_id || this.responseData.quantity != '0' ) {
        this.disableCartButton = false;
      }
    });
    
    this.services1.cartProducts.forEach((value, index) => {

      if (value.product_id == this.responseData.product_id || this.responseData.quantity == '0' ) {
        this.disableCartButton = true;
      }
    });

    this.applicationRef.tick();
  }


  checkWishList() {
    //getting wishList items from local storage
    let count = 0;
    if (this.wishArray != null)
      for (let value of this.wishArray) {
        if (value.product_id == this.responseData.product_id) count++;
      }
    if (count != 0) this.isLiked = 1; else this.isLiked = 0;

  }


  ngOnInit() {
  }

  clickWishList() {
    this.heart = !this.heart;
  }

  goToProductPage() {
    this.navCtrl.navigateForward("/bs-categories");
  }


  goToCart() {
    this.navCtrl.navigateForward("bs-cart");
  }

  addQuantity() {
    if(this.responseData.quantity > this.product_quantity){
    this.product_quantity++;
    }
    else{
      this.presentToast('Product quantity is limited')
    }
  }

  minusQuantity() {
    if (this.product_quantity > 1) {
      this.product_quantity--;
    }
  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "middle",
      color: "primary"
    });
    toast.present();
  }


  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }


  addtoFav(p) {
    // this.loading.autoHide(500);
    if (this.isLiked == 0)  { this.addWishList(p);
    }
    else { this.removeWishList(p); 
    }
  }


  addWishList(p) {
    this.services1.addWishList(p);
  }

  removeWishList(p) {
    this.services1.removeWishList(p);
  }




  ionViewWillEnter() {

    this.Id = this.route.snapshot.paramMap.get('id');
    console.log(JSON.parse(this.Id));

    this.ProName = this.route.snapshot.paramMap.get('title');

    this.catId = this.route.snapshot.paramMap.get('catid');
    console.log(JSON.parse(this.Id));

      //  this.subcategory();
        this.ProdView(this.Id);
        this.ProdImg(this.Id); 

        this.SubCatId = this.route.snapshot.paramMap.get('subcatid');
        console.log(JSON.parse(this.SubCatId));

        this.firstCatId = this.route.snapshot.paramMap.get('firstCatId');
        console.log(JSON.parse(this.firstCatId));


setTimeout(() => {

  if(this.catId != 'null'){
this.productbysubcategory(this.catId)
}  if(this.catId != 'null') {
  this.RelatedProduct(this.catId)
}
else{
this.productbycat(this.firstCatId)
}

 }, 1000);

  }

  ProdView(id2: number) {

    let data2 = {
      id2: id2
  };
  
    this.services1.productView(data2).subscribe(result => {
      console.log(result);
    this.responseData = result.response.product_data[0];
    this.varresponse = result.response.variations_price;
    this.productVariation = result.response.products_variations;

    this.productVariation.forEach((value, index) => {
      this.Variationoption(value.common_id);

    });

   // this.productVariationOption = result.response.products_variations_options;

   // this.MyDefaultYearIdValue =  result.response.products_variations_options[0].option_text;
    this.ProValQun = this.MyDefaultYearIdValue
    this.compareWith = this.compareWithFn;

    if (this.responseData.status.code == 0) {
    } else {
    console.log(this.responseData);
    this.productid = this.responseData.product_id;
    this.thirdcategoryid = this.responseData.third_category_id;
    this.subcategoryid = this.responseData.subcategory_id;
    this.categoryid = this.responseData.category_id;
    this.sellerid = this.responseData.user_id;
    this.unitprice = this.responseData.price;
    this.saleprice = this.responseData.sale_price;
    this.vendorstate = this.responseData.state_id;

    this.events.subscribe('wishListUpdate', (product_id, value) => {
      if (product_id == this.responseData.product_id) this.isLiked = value;
    });
    this.storage.get('wishListProducts').then((val) => {
      this.wishArray = val;
      this.checkWishList();
    });

    if(this.responseData.product_pricing == "variable") {
    this.services1.cartProducts.forEach((value, index) => {
      if (this.responseData.quantity != '0' || value.product_unit_price != this.varresponse.price || this.varresponse.outofstock != "Out of Stock" || this.varresponse != '') {
        this.disableCartButton = false;
      }
    });
    
    this.services1.cartProducts.forEach((value, index) => {
  
      if (this.responseData.quantity == '0' || value.product_unit_price == this.varresponse.price || this.varresponse.outofstock == "Out of Stock" || this.varresponse == '') {
        this.disableCartButton = true;
      }
    });
    this.enableDisbaleCartButton()
  } else {
    this.enableDisbaleCartButton()
  }

    }
    }, error => {
    });
    }


    compareWithFn(o1, o2) {
      return o1 === o2;
    };
        

    Variationoption(VarComId) {

      const  userData = 'variation_common_id=' + VarComId;
    
      this.services1.Variationoption(userData).subscribe(result => {
      this.productVariationOption = result.response;
      
      this.varAllOption.push(this.productVariationOption);
      
      console.log(this.varAllOption);
      console.log(this.productVariationOption);
      }, error => {
      });
      }


      addtocartvariation(val, id, label) {


        this.optionValue = val;

        // this.varAllOption.forEach((value, index) => {
        //   value.forEach((value1, index)  => {

        //     this.proid = 'variation' + value1.id;

        //   });

        //   this.userDatavar = {
        //     product_id: this.productid,
        //     [this.proid]: val,
        //     };
    
        //     console.log(this.userDatavar)
         
        // });

      //   if(this.varAllOption.length == 1) {        
      //   var proid = 'variation' + id;
       
      //  this.userDatavar = {
      //   product_id: this.productid,
      //   [proid]: val,
      //   };
        
      //   this.ProValQun = val;
      // } else if(this.varAllOption.length == 2) {
      //   var proid = 'variation' + id;          
      //   this.userDatavar = {
      //    product_id: this.productid,
      //    [proid]: val,
      //    };
      //    this.ProValQun = val;
      // }
       
      const userDatavar = {
       product_id: this.productid,
       var: 'variation',
       id: id,
       value: val,
       label: label
    //   [proid]: val,
       };

       var uservardata = {};

      // this.userDatavar[proid] = val;

       
      //  this.ProValQun = val;
       
      //  this.userDatavar[proid] = val;

       this.selectedOptionValue.push(userDatavar);

      console.log(this.selectedOptionValue);

       this.selectedOptionValue.forEach((value, index) => {

        value[proid] = val;

        var proid = value.var + value.id;

        uservardata[proid] = value.value;

        uservardata['product_id'] = value.product_id;

      });

        console.log(userDatavar);

        console.log(uservardata);
        
        this.services1.addtocartvariation(uservardata).then(result => {
        this.responseDataVarPrice = result;
        this.varresponse = this.responseDataVarPrice.response;
        console.log(this.varresponse);

        this.services1.cartProducts.forEach((value, index) => {
          if (this.responseData.quantity != '0' || value.product_unit_price != this.varresponse.price || this.varresponse.outofstock != 'Out of Stock') {
            this.disableCartButton = false;
          }
        });
        
        this.services1.cartProducts.forEach((value, index) => {
      
          if (this.responseData.quantity == '0' || value.product_unit_price == this.varresponse.price || this.varresponse.outofstock == 'Out of Stock') {
            this.disableCartButton = true;
          }
        });

        if (this.varresponse.outofstock != 'Out of Stock') {
          this.disableCartButton = false;
        } else if(this.varresponse.outofstock == 'Out of Stock')
        {
          this.disableCartButton = true;
        }
               
      }, error => {
    
      });
      }


    ProdImg(id3: number) {

      let data3 = {
        id3: id3
    };
    
      this.services1.productimg(data3).subscribe(result => {
      this.responseDataImg = result.response;
      if (this.responseDataImg.Status === 0) {
      } else {
      console.log(this.responseDataImg);
      }
      }, error => {
      });
      }


      RelatedProduct(id1) {
      let data1 = {
      id1: id1
      };
      
      this.services1.product(data1).subscribe(result => {
      this.ProductResponse = result.response.product_data;
      if (this.ProductResponse.Status === 0) {
      } else {
      console.log(this.ProductResponse);
      }
      }, error => {
      });
      }



      productbysubcategory(id5: number) {

        let data5 = {
          id5: id5
      };

      this.services1.productbysubcategory(data5).subscribe(result => {
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
      
        this.services1.productbycat(data6).subscribe(result => {
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


      goToProductCat(){
          if(this.SubCatId != 'null'){
         this.router.navigate(['/bs-products',{id:this.SubCatId}])
          } if(this.catId != 'null'){
            this.router.navigate(['/bs-products',{id:this.catId}])
          } else {
            this.router.navigate(['/bs-products',{id:this.firstCatId}])
          }
          }


          openReviewsPage(ProId) {
            this.router.navigate(['bs-reviews',{ProId:ProId}])
          }



        //   addToCartProduct(product) {
        //  console.log(product)
        
        //   }



          // checkWishList() {
          //   //getting wishList items from local storage
          //   let count = 0;
          //   if (this.wishArray != null)
          //     for (let value of this.wishArray) {
          //       if (value.id == this.p.id) count++;
          //     }
          //   if (count != 0) this.isLiked = 1; else this.isLiked = 0;
        
          // }
        
        
          // clickWishList() {
          //   // this.loading.autoHide(500);
          //   if (this.isLiked == 0) { this.addWishList(); }
          //   else { this.removeWishList(); }
          // }


          addToCartProduct(product) {

            if(this.productVariation.length != this.selectedOptionValue.length) {
              this.presentToast('Please select option');
            }  else {
              this.services1.addToCart(product, this.product_quantity, this.varresponse, this.selectedOptionValue);
            this.enableDisbaleCartButton();
            }
          }
     
          // removeWishList() {
          //   this.services.removeWishList(this.p);
          // }




}
