import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController, NavController, Events } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { YesServiceService } from 'src/app/yes-service.service';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  

  Id: any;

  product_quantity = 1;

  public wishArray = [];

  autoquntity = [];
  // @ViewChild('myProduct', { read: ElementRef }) myProduct;

  public itemColor = [];
  public iconColorVar = "";
  data: any;
  @Input('data') p;//product data
  @Input('data1') v;//product data

  @Input('type') type;
  public isLiked = 0;
  segments = "Newest"//first segment by default
  disableCartButton: boolean;
  responseDataVarPrice: any;
  varresponse: any;
  varprice: any;
  provarprice: any;
  provar: any;
  responseoption: any;
  varoption: any;
  DataVarPrice: any;
  VarResponsePrice: any;
  ProductsVariations: any;

  compareWith : any ;
  MyDefaultYearIdValue : any ;
  provarAuto: any;
  ProQunVal: any;


  constructor(public services: YesServiceService, public translate: TranslateService, public toastController: ToastController, public renderer: Renderer2,
    public nav: NavController, private storage: Storage, private router: Router, private route: ActivatedRoute,
    private events: Events, private toastCtrl: ToastController) {


      
        events.subscribe('wishListUpdate', (product_id, value) => {
          if (product_id == this.p.product_id) this.isLiked = value;
        });
        this.storage.get('wishListProducts').then((val) => {
          this.wishArray = val;

          setTimeout(() => {
            this.checkWishList();
          }, 1000);
        });
      
  

        
   // this.itemColor = ["black"];//to get the coloe from custom-theme service
   // this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
  //  this.iconColorVar = this.data;
    //for the selection of colors
  //  if (this.data == "black")//if selected color is black 
    // {
    //   this.itemColor = ["black"];
    // }
    // else if (this.data == "red")//if selected color is red 
    // {
    //   this.itemColor = ["#F44336"];
    // }
    // else if (this.data == "green")//if selected color is green 
    // {
    //   this.itemColor = ["#4CAF50"];
    // }
    // else if (this.data == "blue")//if selected color is blue
    // {
    //   this.itemColor = ["#008577"];
    // }
    // else if (this.data == "gray")//if selected color is gray
    // {
    //   this.itemColor = ["#9E9E9E"];
    // }

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


  addQuantity() {
    if(this.p.quantity > this.product_quantity){
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



  addToCartProduct(product) {
    this.services.addToCart(product, this.product_quantity, this.provarprice, this.ProQunVal);

    this.services.cartProducts.forEach((value, index) => {
      if (value.product_id != this.p.product_id || this.p.quantity != '0') {
        this.disableCartButton = false;
      }
    });
    
    this.services.cartProducts.forEach((value, index) => {

      if (value.product_id == this.p.product_id || this.p.quantity == '0') {
        this.disableCartButton = true;
      }
    });
   // this.enableDisbaleCartButton();
  }


  checkWishList() {
    //getting wishList items from local storage
    let count = 0;
    if (this.wishArray != null)
      for (let value of this.wishArray) {
        if (value.product_id == this.p.product_id) count++;
      }
    if (count != 0) this.isLiked = 1; else this.isLiked = 0;

  }


  ionViewWillEnter() {

  //  this.Id = this.route.snapshot.paramMap.get('id');


  }



  clickWishList() {
    // this.loading.autoHide(500);
    if (this.isLiked == 0) { this.addWishList(); }
    else { this.removeWishList(); }
  }

  addWishList() {
    this.services.addWishList(this.p);
  }

  removeWishList() {
    this.services.removeWishList(this.p);
  }

  //icon funtion for wishlist
  async onIconClick(i) {

    if (i.fav == false) {
      i.fav = true;
      const toast = await this.toastController.create({
        message: 'Added To Wish List!',
        duration: 2000
      });
      toast.present();
    }

    else {
      i.fav = false;
      const toast = await this.toastController.create({
        message: 'Removed From Wish List!',
        duration: 2000
      });
      toast.present();
    }
  }
  // goToProductDetail() {
  //   this.nav.navigateForward("bs-product-detail");
  // }

  goToProductDetail(id:number, catid:number, subcatid:number, firstCatId:number, title:string){
    this.router.navigate(['bs-product-detail',{id:id, catid:catid, subcatid:subcatid, firstCatId:firstCatId, title:title,}])
    }

  ngOnInit() {

    // console.log(this.p);
    // console.log(this.v);

if(this.p.product_pricing == 'variable'){

  // const  userData = 'product_id=' + this.p.product_id;

      const userData = {
        product_id: this.p.product_id,
       };

      console.log(userData);
   
       this.services.Productvariation(userData).then(result => {
       this.responseDataVarPrice = result;
      this.varresponse = this.responseDataVarPrice;
      this.provarprice = this.responseDataVarPrice.response.variations_price;
      this.provar = this.responseDataVarPrice.response.products_variations_options;
      this.provarAuto = this.responseDataVarPrice.response.products_variations_options[0];
      this.autoquntity.push(this.provarAuto);

      this.ProductsVariations = this.responseDataVarPrice.response.products_variations;
       console.log(this.varresponse);
       console.log(this.provarprice);
       console.log(this.provar);
       console.log(this.autoquntity)   


       this.services.cartProducts.forEach((value, index) => {
        if (this.p.quantity != '0' || value.product_unit_price != this.provarprice.price && value.product_id == this.p.product_id || this.provarprice.outofstock != "Out of Stock") {
          this.disableCartButton = false;
        }
      });
      
      this.services.cartProducts.forEach((value, index) => {
    
        if (this.p.quantity == '0' || value.product_unit_price == this.provarprice.price && value.product_id == this.p.product_id || this.provarprice.outofstock == "Out of Stock") {
          this.disableCartButton = true;
        }
      });


      // this.autoquntity.forEach((value) => {
      //   this.MyDefaultYearIdValue = value.option_text;
      //   console.log(this.MyDefaultYearIdValue);
      //   this.compareWith = this.compareWithFn;
      //   this.ProQunVal = value.option_text;
      // });


      //  for (let value of this.autoquntity) {
      //   this.MyDefaultYearIdValue = value.option_text;
      //   console.log(this.MyDefaultYearIdValue);
      //   this.compareWith = this.compareWithFn;
      //   this.ProQunVal = value.option_text;
      // }

       this.MyDefaultYearIdValue =  this.MyDefaultYearIdValue;
       this.ProQunVal = this.ProQunVal
         
     }, error => {
   
     });
    }



    this.services.cartProducts.forEach((value, index) => {

      if (value.product_id != this.p.product_id || this.p.quantity != '0' ) {
        this.disableCartButton = false;
      }

    });
    
    this.services.cartProducts.forEach((value, index) => {

      if (value.product_id == this.p.product_id || this.p.quantity == '0' ) {
        this.disableCartButton = true;
      }
    });
     


}



compareWithFn(o1, o2) {
  return o1 === o2;
};




Variationoption(comon_id) {
  const userData = {
    variation_common_id: comon_id,
   };

  console.log(userData);

   this.services.Variationoption(userData).subscribe(result => {
   this.responseoption = result;
  this.varoption = this.responseoption.response;
   console.log(this.varoption);
          
 }, error => {

 });

 

}



addtocartvariation(val, id, pro_id) {

const  userData = {product_id: pro_id};

  var proid = 'variation' + id;

  userData[proid] = val;

  console.log(userData);

  this.ProQunVal = val;


   this.services.addtocartvariation(userData).then(result => {
   this.DataVarPrice = result;
   this.provarprice = this.DataVarPrice.response;
   console.log(this.provarprice);


   this.services.cartProducts.forEach((value, index) => {
    if (this.p.quantity != '0' || value.product_unit_price != this.provarprice.price && value.product_id == this.p.product_id || this.provarprice.outofstock != "Out of Stock") {
      this.disableCartButton = false;
    }
  });
  
  this.services.cartProducts.forEach((value, index) => {

    if (this.p.quantity == '0' || value.product_unit_price == this.provarprice.price && value.product_id == this.p.product_id || this.provarprice.outofstock == "Out of Stock") {
      this.disableCartButton = true;
    }
  });
   
          
 }, error => {

 });
 }


ConvertToInt(val){
  return val.toFixed(2);
}

}