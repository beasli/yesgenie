import { Injectable, ApplicationRef } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { forkJoin } from "rxjs";
import { catchError, tap, map, retry, reduce } from "rxjs/operators";
import { Storage } from "@ionic/storage";
import { ToastController, AlertController } from "@ionic/angular";
import { Events } from "@ionic/angular";
import { Subject } from "rxjs";

declare var require: any;



const Base_Url = "https://www.yesgenie.com/app/registration/banner";
const cat_Url = "https://www.yesgenie.com/app/registration/allcategory";
const sub_cat = "https://www.yesgenie.com/app/registration/subcategory";
const base_url_register = "https://www.yesgenie.com/app/registration/register";
const base_url_verify = "https://www.yesgenie.com/app/registration/verifyotp";

const base_url_send_otp = "https://www.yesgenie.com/app/registration/sendotp";
const base_url_login = "https://www.yesgenie.com/app/registration/login";
const fb_url_login = "https://yesgenie.com/app/registration/Gettokenbyfb";
const product = "https://yesgenie.com/app/registration/product";
const pro_deatels = "https://yesgenie.com/app/registration/productbyID";
const pro_img = "https://yesgenie.com/app/registration/productImageID";
const latest_pro = "https://yesgenie.com/app/registration/latestproduct";
const BlogDetails = "https://yesgenie.com/app/registration/blogByid";
const blog = "https://yesgenie.com/app/registration/blog";
const GetProfile = "https://yesgenie.com/app/registration/profileGet";

const main_url = "https://yesgenie.com/app/registration";
const productbysubcat =
  "https://www.yesgenie.com/app/registration/productbysubcategory";
const productbycat = "https://www.yesgenie.com/app/registration/productbycat";

@Injectable({
  providedIn: "root",
})
export class YesServiceService {
  private fooSubject = new Subject<any>();

  publishSomeData(data: any) {
    this.fooSubject.next(data);
  }

  getObservable(): Subject<any> {
    return this.fooSubject;
  }

  public baseUrl = 'https://www.yesgenie.com/api/';


  public cartProducts = new Array();

  public wishListProducts = new Array();

  public wishList = new Array();

  public translationListArray = [];

  public cartquantity;

  proquantity: any;

  public recentViewedProducts = new Array();

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private applicationRef: ApplicationRef,
    private toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public events: Events
  ) {
    //  this.emptyCart();

    storage.get("wishListProducts").then((val) => {
      if (val != null) this.wishListProducts = val;
      // console.log(val);
    });

    storage.get("recentViewedProducts").then((val) => {
      if (val != null) this.recentViewedProducts = val;
    });

    //getting cart from local storage
    storage.get("cartProducts").then((val) => {
      if (val != null) this.cartProducts = val;
      this.cartTotalItems();
    });
    this.cartTotalItems();
  }

  httpOptions = {
    headers: new HttpHeaders()
      // .append('Content-Type', 'application/json')
      .append("Content-Type", "application/x-www-form-urlencoded"),

    // .append('userid', localStorage.getItem('userData'))
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  slider(): Observable<any> {
    return this.http
      .get(Base_Url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  category(): Observable<any> {
    return this.http
      .get(cat_Url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  registerUser(credentials) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http.post(base_url_register, credentials).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  verifyOTP(credentials) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http.post(base_url_verify, credentials).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  sendotp(credentials) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http.post(base_url_send_otp, credentials).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  loginUser(credentials) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http.post(`${main_url}/login`, credentials).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  fblogin(credentials) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http.post(`${main_url}/Gettokenbyfb`, credentials).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  login(data): Observable<any> {
    return this.http
      .post(base_url_login, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  subcat(data): Observable<any> {
    return this.http
      .get(`${sub_cat}/${data.id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  product(data1): Observable<any> {
    return this.http
      .get(`${product}/${data1.id1}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  productView(data2): Observable<any> {
    return this.http
      .get(`${pro_deatels}/${data2.id2}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  productimg(data3): Observable<any> {
    return this.http
      .get(`${pro_img}/${data3.id3}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  LatestPro(): Observable<any> {
    return this.http
      .get(latest_pro, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  blog(): Observable<any> {
    return this.http
      .get(blog, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  blogdetails(data4): Observable<any> {
    return this.http
      .get(`${BlogDetails}/${data4.id4}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Personalinformation(data): Observable<any> {
    return this.http
      .post(GetProfile, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Updateprofile(data): Observable<any> {
    return this.http
      .post(`${main_url}/Updateprofile`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getfollowing(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getfollowing`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getorder(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getorder`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getorderdetails(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getorderdetails`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getfollower(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getfollower`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Updatepassword(data): Observable<any> {
    return this.http
      .post(`${main_url}/Updatepassword`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getdownload(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getdownload`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getpersonalinfo(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getpersonalinfo`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  StateByCountry(state): Observable<any> {
    return this.http
      .get(`${main_url}/Statesbycountry?id=${state}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Citiesbystate(city): Observable<any> {
    return this.http
      .get(`${main_url}/Citiesbystate?id=${city}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getquoterequests(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getquoterequests`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getmessages(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getmessages`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Updatecontactinformations(data): Observable<any> {
    return this.http
      .post(`${main_url}/Updatecontactinformations`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Updateshippingaddress(data): Observable<any> {
    return this.http
      .post(`${main_url}/Updateshippingaddress`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Productorder(data): Observable<any> {
    return this.http
      .post(`${main_url}/Productorder`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Filterproduct(data): Observable<any> {
    return this.http
      .post(`${main_url}/Filterproduct`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Paybyrazorpay(data): Observable<any> {
    return this.http
      .post(`${main_url}/Paybyrazorpay`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getcoupon(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getcoupon`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Searchformemberandproduct(data): Observable<any> {
    return this.http
      .post(`${main_url}/Searchformemberandproduct`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Searchnearest(data): Observable<any> {
    return this.http
      .post(`${main_url}/Searchnearest`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Searchnearestall(data): Observable<any> {
    return this.http
      .post(`${main_url}/Searchnearestall`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Addwebsitereviews(data): Observable<any> {
    return this.http
      .post(`${main_url}/Addwebsitereviews`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getapprovedreviews(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getapprovedreviews`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getproductreviews(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getproductreviews`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Addproductreviews(data): Observable<any> {
    return this.http
      .post(`${main_url}/Addproductreviews`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Calculatetax(data): Observable<any> {
    return this.http
      .post(`${main_url}/Calculatetax`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  forgetpassword(data): Observable<any> {
    return this.http
      .post(`${main_url}/forgetpassword`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  productbysubcategory(data5): Observable<any> {
    return this.http
      .get(`${productbysubcat}/${data5.id5}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Searchforproductname(data): Observable<any> {
    return this.http
      .post(`${main_url}/Searchforproductname`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // addtocartvariation(data): Observable<any> {
  //   return this.http.post(`${main_url}/addtocartvariation`, data, this.httpOptions)
  //   .pipe(
  //     catchError(this.handleError)
  //   );
  // }

  addtocartvariation(credentials) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http.post(`${main_url}/addtocartvariation`, credentials).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  Productvariation(credentials) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http.post(`${main_url}/Productvariation`, credentials).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  Variationoption(data): Observable<any> {
    return this.http
      .post(`${main_url}/Variationoption`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getmultipleshippingaddress(credentials) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      this.http
        .post(`${main_url}/Getmultipleshippingaddress`, credentials)
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  // Addnewmultipleshippingaddress(credentials) {
  //   return new Promise((resolve, reject) => {
  //     const headers = new Headers();
  //     headers.append('Content-Type', 'application/json');

  //     this.http.post(`${main_url}/Addnewmultipleshippingaddress`, credentials)
  //       .subscribe(res => {
  //        resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });

  // }

  Addnewmultipleshippingaddress(data): Observable<any> {
    return this.http
      .post(`${main_url}/Addnewmultipleshippingaddress`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getshippingaddressbyid(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getshippingaddressbyid`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Updatemultipleshippingaddress(data): Observable<any> {
    return this.http
      .post(`${main_url}/Updatemultipleshippingaddress`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Deletemultipleshippingaddress(data): Observable<any> {
    return this.http
      .post(`${main_url}/Deletemultipleshippingaddress`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Sendsmsandemail(data): Observable<any> {
    return this.http
      .post(`${main_url}/Sendsmsandemail`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getcustomfieldoptions(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getcustomfieldoptions`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getcustomfields(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getcustomfields`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  Getcustomfieldproduct(data): Observable<any> {
    return this.http
      .post(`${main_url}/Getcustomfieldproduct`, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  productbycat(data6): Observable<any> {
    return this.http
      .get(`${productbycat}/${data6.id6}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  translateString(value) {
    return new Promise((resolve) => {
      resolve(this.translationListArray[value]);
    });
  }

  translateArray(value) {
    return new Promise((resolve) => {
      let tempArray = [];
      value.forEach((element) => {
        if (this.translationListArray[element] != undefined)
          tempArray[element] = this.translationListArray[element];
        else tempArray[element] = element;
      });
      resolve(tempArray);
    });
  }

  toast(msg) {
    this.translateString(msg).then(async (res: string) => {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 2000,
        position: "bottom",
      });
      toast.present();
    });
  }

  removeWishList(p) {
    this.wishListProducts.forEach((value, index) => {
      if (value.product_id == p.product_id) {
        this.wishListProducts.splice(index, 1);
        this.storage.set("wishListProducts", this.wishListProducts);
      }
    });
    this.events.publish("wishListUpdate", p.product_id, 0);
    this.toast("Removed From Favorites!");
    this.applicationRef.tick();
  }

  addWishList(p) {
    this.wishListProducts.push(p);
    this.storage.set("wishListProducts", this.wishListProducts);
    console.log(this.wishListProducts);
    this.events.publish("wishListUpdate", p.product_id, 1);
    this.toast("Added To Favorites!");
    this.applicationRef.tick();
  }

  // removeToCart(p) {
  //   this.cartProducts.forEach((value, index) => {
  //     if (value.product_id == p) {
  //       this.cartProducts.splice(index, 1);
  //       this.storage.set('cartProducts', this.cartProducts);
  //       this.cartTotalItems();
  //     }
  //   });
  //  // this.events.publish('wishListUpdate', p.id, 0);
  //   this.toast("Removed From Wish List!");
  //   this.applicationRef.tick();
  // }

  removeToCart(p) {
    //console.log(value);
    this.cartProducts = p;
    this.storage.set("cartProducts", this.cartProducts);
    // this.storage.get('cartProducts').then((val) => {
    //   //console.log(val);
    // });
    this.cartTotalItems();
  }

  addToCart(p, product_quantity, v, ProValQunt) {
    var d: { [k: string]: any } = {};

    d.seller_id = p.user_id;
    d.product_id = p.product_id;
    d.product_type = p.product_type;
    d.product_slug = p.slug;
    d.product_currency = p.currency;
    d.product_shipping_cost = p.shipping_cost;

    d.subcategory_id = p.subcategory_id;
    d.third_category_id = p.third_category_id;
    d.vender_state_id = p.state_id;

    var seconds = new Date().getTime();
    d.cart_id = p.id + seconds;
    d.image = p.image_small;
    d.stock_quantity = p.quantity;
    d.category_id = p.category_id;

    if (product_quantity == null || product_quantity == "null")
      d.product_quantity = 1;
    else {
      d.product_quantity = product_quantity;
      console.log(product_quantity);
      console.log("quantity not null");
    }

    if (p.product_pricing == "simple") {
      if (p.sale_price != 0) {
        d.product_price = p.sale_price;
      } else if (p.sale_price == 0) {
        d.product_price = p.price;
      }
      d.product_unit_price = p.price;
      d.product_sale_price = p.sale_price;
      d.subtotal = parseFloat(p.sale_price) * parseInt(d.product_quantity);
      d.product_title = p.title;

      if (p.sale_price != 0) {
        d.product_total_price =
          parseFloat(p.sale_price) * parseInt(d.product_quantity);
      } else if (p.sale_price == 0) {
        d.product_total_price =
          parseFloat(p.price) * parseInt(d.product_quantity);
      }
    }

    if (p.product_pricing == "variable") {
      if (v.sale_price != 0) {
        d.product_price = v.sale_price;
      } else if (v.sale_price == 0) {
        d.product_price = v.price;
      }
      d.product_unit_price = v.price;
      d.product_sale_price = v.sale_price;
      d.subtotal = parseFloat(v.sale_price) * parseInt(d.product_quantity);

      d.product_t = p.title;

      ProValQunt.forEach((element) => {
        d.product_t =
          d.product_t + " (" + element.label + ": " + element.value + ")";
      });

      d.product_title = d.product_t;

      if (v.sale_price != 0) {
        d.product_total_price =
          parseFloat(v.sale_price) * parseInt(d.product_quantity);
      } else if (v.sale_price == 0) {
        d.product_total_price =
          parseFloat(v.price) * parseInt(d.product_quantity);
      }
    }

    this.cartProducts.push(d);
    this.storage.set("cartProducts", this.cartProducts);
    console.log(this.cartProducts);
    this.cartTotalItems();
    //  this.events.publish('wishListUpdate', p.id, 1);
    this.toast("Added To Cart!");
    this.applicationRef.tick();
  }

  cartTotalItems = function () {
    this.events.publish("cartChange");
    let total = 0;
    for (let value of this.cartProducts) {
      total += parseInt(value.product_quantity);
    }
    this.cartquantity = total;
    // this.applicationRef.tick();
    return total;
  };

  emptyCart() {
    this.cartProducts = [];
    this.storage.set("cartProducts", this.cartProducts);
    this.cartTotalItems();
  }

  // addToCart1(product, variation, quantity: any, metaData: any) {

  //   if (!this.checkCart(product, quantity)) return 0;
  //   if (this.alreadyInCart(product, variation, quantity)) return 0;

  //   var p: { [k: string]: any } = {};
  //   p.product_id = product.id;
  //   p.name = product.name;
  //   if (quantity == null || quantity == "null") p.quantity = 1;
  //   else { p.quantity = quantity; console.log(quantity); console.log("quantity not null"); };
  //   var seconds = new Date().getTime();
  //   p.cart_id = product.id + seconds;
  //   p.image = product.images[0].src;
  //   //console.log(p.image)
  //   p.stock_quantity = product.stock_quantity;
  //   p.tax_class = product.tax_class;
  //   p.tax_status = product.tax_status;
  //   p.price = product.price;
  //   p.price_html = product.price_html;
  //   p.subtotal = parseFloat(product.price) * parseInt(p.quantity);
  //   p.total = parseFloat(product.price) * parseInt(p.quantity);
  //   p.on_sale = product.on_sale;
  //   p.categories = product.categories;

  //   if (metaData != null) p.meta_data = metaData;
  //   p.sold_individually = product.sold_individually;

  //   if (product.type == 'variable' && variation != null) {
  //     p.variation_id = variation.id;
  //     p.price = parseFloat(variation.price) * parseInt(p.quantity);
  //     p.subtotal = parseFloat(variation.price) * parseInt(p.quantity);
  //     p.total = parseFloat(variation.price) * parseInt(p.quantity);
  //     p.name = variation.name;
  //     p.stock_quantity = variation.stock_quantity;
  //     p.tax_status = variation.tax_status;
  //     if (variation.images[0].src.indexOf('placeholder') == -1) {
  //       p.image = variation.images[0].src;
  //       //console.log(variation.images[0].src)
  //     }

  //   }
  //   console.log(p);
  //   this.cartProducts.push(p);
  //   this.storage.set('cartProducts', this.cartProducts);

  //   this.cartTotalItems();
  //   this.applicationRef.tick();
  //   // console.log(this.cartProducts);
  //   //console.log(this.cartProducts);
  //   this.toast("Added To Cart!");
  // }

  checkCart(p, quantity) {
    let name = null;
    let onlyOneAllowed = true;
    let quantityCheck = true;
    //check for only one item is allowed
    for (let value of this.cartProducts) {
      if (value.sold_individually == true && p.id == value.product_id) {
        onlyOneAllowed = false;
        name = value.name;
      }
    }
    if (onlyOneAllowed == false)
      this.showAlertWithTitle(name, "Only One Item Allowed");

    //check for product quantity
    if (quantity == null) quantity = 1;

    if (p.stock_quantity == null || p.stock_quantity > quantity)
      quantityCheck = true;
    else if (p.stock_quantity < quantity) {
      quantityCheck = false;
      this.showAlert("Product Quantity is Limited!");
    }

    if (onlyOneAllowed && quantityCheck) return true;
    else return false;
  }

  alreadyInCart(p, vId, quantity) {
    let count = 0;
    for (let value of this.cartProducts) {
      //console.log(value.variation_id + "  " + vId.id + "  " + value.product_id + "  " + p.id);
      if (p.type != "variable" && value.product_id == p.id) {
        count++;
        value.quantity = parseInt(value.quantity) + parseInt(quantity);
      } else if (value.product_id == p.id && value.variation_id == vId.id) {
        count++;
        value.quantity = parseInt(value.quantity) + parseInt(quantity);
      }
    }

    this.storage.set("cartProducts", this.cartProducts);
    this.cartTotalItems();
    if (count != 0) return true;
    else return false;
  }

  //removing from recent array products
  removeCart(p) {
    //console.log(value);
    this.cartProducts = p;
    this.storage.set("cartProducts", this.cartProducts);
    // this.storage.get('cartProducts').then((val) => {
    //   //console.log(val);
    // });
    this.cartTotalItems();
  }

  emptyRecentViewed() {
    this.recentViewedProducts = [];
    this.storage.set("recentViewedProducts", this.recentViewedProducts);
  }

  //Function calcualte the total items of cart

  productsTotal() {
    let total = 0;
    for (let value of this.cartProducts) {
      total = total + parseFloat(value.total);
    }
    return total;
  }

  showAlert(text) {
    this.translateArray([text, "ok", "Alert"]).then(async (res) => {
      console.log(res);
      const alert = await this.alertCtrl.create({
        header: res["Alert"],
        message: res[text],
        buttons: [res["ok"]],
      });
      await alert.present();
    });
  }

  showAlertWithTitle(text, title) {
    this.translateArray([text, "ok", title]).then(async (res) => {
      let alert = await this.alertCtrl.create({
        header: res[title],
        message: res[text],
        buttons: [res["ok"]],
      });
      await alert.present();
    });
  }


  public get(apiRoute) {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + apiRoute).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  public post(apiRoute, formData) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + apiRoute, JSON.stringify(formData)).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
