(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-product-detail-product-detail-module"],{

/***/ "./src/app/yesgenie/Pages/product-detail/product-detail.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/product-detail/product-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_share_share_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/share/share.module */ "./src/app/yesgenie/components/share/share.module.ts");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/yesgenie/Pages/product-detail/product-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_7__["ProductDetailPage"]
    }
];
var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _components_share_share_module__WEBPACK_IMPORTED_MODULE_6__["ShareModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_7__["ProductDetailPage"]]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/product-detail/product-detail.page.html":
/*!************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/product-detail/product-detail.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goToProductCat()\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\">{{ProName}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button fill=\"clear\" (click)=\"opensearch()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button> -->\n      \n      <ion-button fill=\"clear\" (click)=\"goToCart()\">\n          <ion-icon name=\"cart\"></ion-icon>\n          <ion-badge>{{services1.cartTotalItems()}}</ion-badge>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <div class=\"product-tags-top\">\n    <div class=\"product-tag-new\">{{'New'|translate}}</div>\n    <!-- <div class=\"product-tag-featured\">{{'Featured'|translate}}</div> -->\n  </div>\n\n  <div class=\"icons\">\n    <ion-icon name=\"share\" (click)=\"share()\"></ion-icon>\n    <!-- <ion-icon *ngIf=\"heart\" name=\"heart\" (click)=\"clickWishList()\"></ion-icon>\n    <ion-icon *ngIf=\"!heart\" name=\"heart-empty\" (click)=\"clickWishList()\"></ion-icon> -->\n  </div>\n  <ion-slides class=\"product-slides\" pager=\"true\">\n    <ion-slide *ngFor=\"let img of responseDataImg\">\n      <div>\n        <!-- <img src=\"{{slide.img}}\" imageViewer> -->\n        <img src=\"https://www.yesgenie.com/uploads/images/{{img?.image_big}}\" imageViewer>\n\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid class=\"product-detail-title ion-no-padding\">\n    <ion-row>\n      <!-- <div class=\"product-tags\">\n        <div class=\"product-tag-off\">{{'SALE'|translate}}</div>\n      </div> -->\n      <!-- 2.0 updates -->\n\n      <ion-col class=\"woo-price-group ion-no-padding\" size=\"12\">\n        <!-- <span class=\"woo-price\"></span> -->\n        <!-- <span class=\"woo-price\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{responseData?.sale_price*1 /100*1}}</span> -->\n        <div *ngIf=\"responseData?.product_pricing != 'variable'\">\n        <div *ngIf=\"responseData?.sale_price != 0\">\n          <span class=\"woo-price\"><del style=\"color: #1f699c;\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{responseData?.price*1 /100*1}}</del></span>\n        <span class=\"woo-price\" style=\"margin-left: 10px;\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{responseData?.sale_price*1 /100*1}}</span>\n        </div>\n        <div *ngIf=\"responseData?.sale_price == 0\">\n            <span class=\"woo-price\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{responseData?.price*1 /100*1}}</span>\n          </div>\n        </div>\n\n\n        <div *ngIf=\"responseData?.product_pricing == 'variable'\">\n          <div *ngIf=\"varresponse?.sale_price != 0 && varresponse?.sale_price != ''\">\n            <span class=\"woo-price\"><del style=\"color: #1f699c;\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{varresponse?.price*1 /100*1}}</del></span>\n          <span class=\"woo-price\" style=\"margin-left: 10px;\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{varresponse?.sale_price*1 /100*1}}</span>\n          </div>\n  \n          <div *ngIf=\"varresponse?.sale_price == 0 && varresponse?.sale_price != ''\">\n              <span class=\"woo-price\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{varresponse?.price*1 /100*1}}</span>\n            </div>\n\n            <div *ngIf=\"varresponse?.outofstock == 'Out of Stock'\">\n              <p style=\"color: red; font-size: 20px;\">Out of Stock</p>\n            </div>\n          </div>\n\n\n          <!-- <div *ngIf=\"responseData?.product_pricing == 'variable' && responseDataVarPrice != null\">\n            <div *ngIf=\"varresponse?.sale_price != 0 || varresponse?.outofstock != 'Out of Stock'\">\n              <span class=\"woo-price\"><del style=\"color: #1f699c;\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{varresponse?.price*1 /100*1}}</del></span>\n            <span class=\"woo-price\" style=\"margin-left: 10px;\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{varresponse?.sale_price*1 /100*1}}</span>\n            </div>\n    \n            <div *ngIf=\"varresponse?.sale_price == 0 || varresponse?.outofstock != 'Out of Stock'\">\n                <span class=\"woo-price\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{varresponse?.price*1 /100*1}}</span>\n              </div>\n\n              <div *ngIf=\"varresponse?.outofstock == 'Out of Stock'\">\n                Out of Stock\n              </div>\n            </div> -->\n\n        <!-- <span class=\"product-outstock\">{{'Out of Stock'|translate}}</span> -->\n        <span class=\"product-instock\" *ngIf=\"varresponse?.outofstock != 'Out of Stock'\">{{'In Stock'|translate}}\n          <!-- <span>12</span> -->\n        </span>\n      </ion-col>\n\n      <ion-col class=\"product-title ion-no-padding\" size=\"12\">\n        <h3 class=\"product-name\">{{responseData?.title}}\n          <!-- <br>\n          <small class=\"product-desc\">Women Tops Collection</small> -->\n        </h3>\n\n        <div class=\"product-ratings\">\n          <ion-row class=\"product-rating animate\" (click)=\"openReviewsPage(Id)\">\n            <ion-col size=\"0.7\">\n              <ion-icon name=\"star\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"0.7\">\n              <ion-icon name=\"star\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"0.7\">\n              <ion-icon name=\"star\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"0.7\">\n              <ion-icon name=\"star\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"0.7\">\n              <ion-icon class=\"light-star\" name=\"star\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"7\" class=\"rating-col\">\n              <h6>0{{'Rating & Review'|translate}}</h6>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- <p style=\"display:none;\">{{'Total Sales'|translate}}&nbsp;({{product.total_sales}})</p> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-header ion-no-padding\" *ngIf=\"responseData?.product_pricing == 'variable'\">\n    <ion-row *ngFor=\"let p of productVariation\">\n      <ion-col class=\"qty-name\" size=\"12\">{{p.label}}</ion-col>\n      <ion-col size=\"5\">\n          <ion-select class=\"select-option\" placeholder=\"Select\" (ionChange)=\"addtocartvariation($event.detail.value, p.id, p.label)\">\n            <div *ngFor=\"let q of varAllOption\">\n              <div *ngFor=\"let a of q\">\n            <ion-select-option *ngIf=\"p.common_id == a.variation_common_id\" value={{a.option_text}}>{{a.option_text}}</ion-select-option>\n          </div>\n          </div>\n          </ion-select>\n       </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-header ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"left ion-no-padding\" size=\"6\">\n        <ion-row align-items-center>\n          <ion-col class=\"qty-name\" size=\"12\">Quantity</ion-col>\n\n          <ion-col class=\"qty-vlue ion-no-padding\" size=\"3\">\n            <ion-button (click)=\"minusQuantity(product_quantity)\" size=\"small\" fill=\"outline\">\n              <ion-icon class=\"icon-btn\" name=\"remove\"></ion-icon>\n            </ion-button>\n          </ion-col>\n\n          <ion-col class=\"qty-vlue ion-no-padding\" size=\"3\">\n            <ion-input [(ngModel)]=\"product_quantity\" class=\"dgi\" type=\"number\" name=\"q\" readonly>\n            </ion-input>\n          </ion-col>\n\n          <ion-col class=\"qty-vlue ion-no-padding\" size=\"3\">\n            <ion-button (click)=\"addQuantity(product_quantity)\" size=\"small\" fill=\"outline\">\n              <ion-icon class=\"icon-btn\" name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col class=\"right\" size=\"6\" *ngIf=\"responseData?.product_pricing != 'variable'\">\n        <ion-row>\n          <ion-col text-right class=\"ttl-name\" size=\"12\">{{'Total' |translate}}&nbsp;{{'Price' |translate}}</ion-col>\n          <ion-col text-right class=\"ttl-vlue\" size=\"12\" *ngIf=\"responseData?.sale_price != 0\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product_quantity*responseData?.sale_price*1 /100*1}}</ion-col>\n          <ion-col text-right class=\"ttl-vlue\" size=\"12\" *ngIf=\"responseData?.sale_price == 0\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product_quantity*responseData?.price*1 /100*1}}</ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col class=\"right\" size=\"6\" *ngIf=\"responseData?.product_pricing == 'variable' && varresponse == null\">\n        <ion-row>\n          <ion-col text-right class=\"ttl-name\" size=\"12\">{{'Total' |translate}}&nbsp;{{'Price' |translate}}</ion-col>\n          <ion-col text-right class=\"ttl-vlue\" size=\"12\" *ngIf=\"varprice?.sale_price != 0\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product_quantity*varprice?.sale_price*1 /100*1}}</ion-col>\n          <ion-col text-right class=\"ttl-vlue\" size=\"12\" *ngIf=\"varprice?.sale_price == 0\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product_quantity*varprice?.price*1 /100*1}}</ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col class=\"right\" size=\"6\" *ngIf=\"responseData?.product_pricing == 'variable' && varresponse != null\">\n        <ion-row>\n          <ion-col text-right class=\"ttl-name\" size=\"12\">{{'Total' |translate}}&nbsp;{{'Price' |translate}}</ion-col>\n          <ion-col text-right class=\"ttl-vlue\" size=\"12\" *ngIf=\"varresponse?.sale_price != 0\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product_quantity*varresponse?.sale_price*1 /100*1}}</ion-col>\n          <ion-col text-right class=\"ttl-vlue\" size=\"12\" *ngIf=\"varresponse?.sale_price == 0\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product_quantity*varresponse?.price*1 /100*1}}</ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <!-- <button ion-button block color=\"danger\" *ngIf=\"!product.in_stock\">{{'OUT OF STOCK'|translate}}</button> -->\n      <ion-col class=\"select-col ion-no-padding\" size=\"12\">{{'Please select all product options before adding this product to your\n        cart'|translate}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"product-description ion-no-padding\">\n    <h2>Product Description</h2>\n    <p class=\"detail-para\" [innerHTML]=\"responseData?.description\"></p>\n  </ion-grid>\n  <ion-grid no-padding class=\"product-detail-content animate-product ion-no-padding\">\n    <ion-row no-padding>\n      <ion-col class=\"ion-no-padding\" size=\"12\">\n        <h2 class=\"related-item\">{{'Related Items'|translate}}</h2>\n        <ion-slides class=\"animated bounceInRight delay-900ms\" [options]=\"sliderConfig\">\n          <ion-slide *ngFor=\"let p of ProductResponse\">\n            <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n          </ion-slide>\n          <ion-slide>\n            <ion-button class=\"more-btn\" (click)=\"goToProductPage()\" fill=\"clear\"> {{'Shop More'| translate}}\n              <ion-icon class=\"theme-icon\" name=\"arrow-dropright\"></ion-icon>\n            </ion-button>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col size=\"6\" style=\"padding: 0px 0px; padding-left: 0px;\">\n      <ion-button color=\"secondary\" (click)=\"addToCartProduct(responseData)\" *ngIf=\"disableCartButton == false\">\n        <ion-icon name=\"cart\" style=\"margin-right: 10px;\"></ion-icon>\n        Add to cart\n      </ion-button>\n\n      <ion-button color=\"secondary\" (click)=\"goToCart()\" *ngIf=\"disableCartButton == true\">\n        <ion-icon name=\"cart\" style=\"margin-right: 10px;\"></ion-icon>\n        Go to cart\n      </ion-button>\n    </ion-col>\n\n    <ion-col size=\"6\" style=\"padding: 0px 0px; padding-right: 0px;\">\n\n      <ion-button (click)=\"addtoFav(responseData)\" *ngIf=\"isLiked==0\">\n        <ion-icon name=\"heart\" style=\"margin-right: 10px;\"></ion-icon>\n        Add to Favorites\n      </ion-button>\n\n      <ion-button (click)=\"addtoFav(responseData)\" *ngIf=\"isLiked!==0\">\n        <ion-icon name=\"heart\" style=\"margin-right: 10px;\"></ion-icon>\n        Remove from Favorites\n      </ion-button>\n\n      <!-- <ion-icon class=\"icon\" (click)=\"clickWishList()\" *ngIf=\"isLiked==0\" name=\"heart-empty\"></ion-icon>\n      <ion-icon class=\"icon\" (click)=\"clickWishList()\" *ngIf=\"isLiked!=0\" name=\"heart\"></ion-icon> -->\n    </ion-col>\n\n  </ion-row>\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/product-detail/product-detail.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/product-detail/product-detail.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 16px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 5px;\n    bottom: 14px; }\n  ion-content ion-list {\n  --background:#f9f9f9; }\n  ion-content .product-tags-top {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  z-index: 9; }\n  ion-content .product-tags-top .product-tag-new {\n    color: white;\n    background-color: red;\n    padding: 5px 8px;\n    display: inline-block;\n    margin-bottom: 4px; }\n  ion-content .product-tags-top .product-tag-featured {\n    color: white;\n    padding: 5px 8px; }\n  ion-content .icons {\n  position: absolute;\n  top: 10px;\n  right: 0;\n  background-color: #eee;\n  width: 45px;\n  z-index: 9;\n  direction: ltr;\n  height: 32px; }\n  ion-content .icons ion-icon[name=\"heart\"], ion-content .icons [name=\"heart-empty\"], ion-content .icons [name=\"share\"] {\n    color: var(--ion-color-primary); }\n  ion-content .icons ion-icon {\n    padding-top: 5px;\n    font-size: 22px;\n    padding-left: 10px; }\n  ion-content .product-slides .swiper-wrapper .swiper-slide {\n  background-color: #ececec; }\n  ion-content .product-slides img {\n  filter: brightness(0.9); }\n  ion-content .product-detail-title {\n  padding-left: 16px;\n  padding-right: 18px;\n  position: relative;\n  padding-bottom: 0; }\n  ion-content .product-detail-title .product-tags {\n    position: absolute;\n    left: 10px;\n    top: -15px;\n    z-index: 9; }\n  ion-content .product-detail-title .product-tags .product-tag-off {\n      background-color: black;\n      color: white;\n      padding: 5px 8px;\n      margin-right: 4px;\n      float: left; }\n  ion-content .product-detail-title .woo-price-group {\n    font-size: 12px; }\n  ion-content .product-detail-title .woo-price-group .woocommerce-Price-amount {\n      font-size: 20px;\n      font-weight: 600;\n      color: var(--ion-color-dark); }\n  ion-content .product-detail-title .woo-price-group .woo-price {\n      font-size: 24px;\n      font-family: 'roboto-regular';\n      font-weight: 200 !important;\n      float: left; }\n  ion-content .product-detail-title .woo-price-group .woo-price del .woocommerce-Price-amount {\n        font-size: 16px;\n        color: var(--ion-color-dark);\n        text-decoration: line-through; }\n  ion-content .product-detail-title .woo-price-group .woo-price ins {\n        text-decoration: none; }\n  ion-content .product-detail-title .woo-price-group .woo-price ins .woocommerce-Price-amount {\n          margin-left: 5px; }\n  ion-content .product-detail-title .woo-price-group .product-instock, ion-content .product-detail-title .woo-price-group .product-outstock {\n      float: right;\n      color: gray;\n      padding-top: 0; }\n  ion-content .product-detail-title .woo-price-group .product-instock {\n      color: #707070 !important;\n      font-size: 16px;\n      font-family: 'roboto-regular'; }\n  ion-content .product-detail-title .woo-price-group .product-outstock {\n      color: var(--ion-color-dark); }\n  ion-content .product-detail-title .product-title {\n    padding-bottom: 0; }\n  ion-content .product-detail-title .product-title h3 {\n      color: var(--ion-color-dark);\n      font-family: 'roboto-regular';\n      margin-top: 0;\n      margin-bottom: 0;\n      font-size: 14px; }\n  ion-content .product-detail-title .product-title h3 small {\n        font-size: 12px;\n        color: gray; }\n  ion-content .product-ratings ion-col {\n  padding-left: 0 !important; }\n  ion-content .product-ratings ion-icon {\n  font-size: 28px; }\n  ion-content .product-ratings h6 {\n  margin-bottom: 6px;\n  text-align: start;\n  color: black;\n  font-size: 14px;\n  margin-top: 3px; }\n  ion-content .product-detail-header {\n  background-color: #f5f5f5;\n  padding-left: 16px;\n  padding-right: 18px;\n  position: relative; }\n  ion-content .product-detail-header .left, ion-content .product-detail-header .right {\n    padding-bottom: 0; }\n  ion-content .product-detail-header .left .col, ion-content .product-detail-header .right .col {\n      display: flex;\n      align-items: center; }\n  ion-content .product-detail-header .left .col {\n    justify-content: flex-start; }\n  ion-content .product-detail-header .right .col {\n    justify-content: flex-end; }\n  ion-content .product-detail-header .qty-name {\n    padding-bottom: 10px !important;\n    padding-top: 0;\n    font-size: 20px;\n    font-family: 'roboto-regular'; }\n  ion-content .product-detail-header .qty-name, ion-content .product-detail-header .ttl-name {\n    padding-left: 0;\n    padding-bottom: 0;\n    padding-right: 0; }\n  ion-content .product-detail-header .ttl-vlue {\n    font-weight: bold;\n    font-size: 20px; }\n  ion-content .product-detail-header .qty-vlue, ion-content .product-detail-header .ttl-vlue {\n    padding-left: 0;\n    padding-right: 0; }\n  ion-content .product-detail-header .total-para {\n    font-size: 12px; }\n  ion-content .product-detail-header .qty-vlue ion-button {\n    background: var(--ion-color-primary);\n    --color: white;\n    border-width: 0;\n    margin: 0;\n    height: 30px;\n    width: 100%; }\n  ion-content .product-detail-header .qty-vlue .dgi {\n    text-align: center;\n    width: 100%;\n    /* margin-left: 1px; */\n    font-size: 14px;\n    --padding-end: 7px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.2); }\n  ion-content .product-detail-header .qty-vlue .dgi input {\n      text-align: center; }\n  ion-content .product-detail-content ion-slides {\n  padding-left: 7px; }\n  ion-content .product-detail-content h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px; }\n  ion-content .product-detail-content p {\n  margin-bottom: 0; }\n  ion-content .product-detail-content.bing-fo {\n  background-color: var(ion-color-light); }\n  ion-content .group-product ion-label {\n  margin-left: 10px; }\n  ion-content .group-product ion-thumbnail {\n  margin: 0;\n  width: 115px;\n  height: 115px; }\n  ion-content .group-product ion-item {\n  --padding-start:0;\n  align-items: flex-start;\n  border-bottom: 1px solid #dedede;\n  background-color: var(--ion-color-dark); }\n  ion-content .group-product ion-item .item-inner {\n    border-bottom: none; }\n  ion-content .group-product .item:last-child {\n  border-bottom: none; }\n  ion-content .group-product h3 {\n  color: var(--ion-color-dark);\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-weight: 400;\n  padding-left: 16px;\n  padding-right: 18px; }\n  ion-content .group-product .woo-price {\n  float: left;\n  font-size: 14px;\n  font-family: 'roboto-regular'; }\n  ion-content .group-product .woo-price del .woocommerce-Price-amount {\n    font-size: 16px;\n    color: var(--ion-color-dark);\n    text-decoration: line-through; }\n  ion-content .group-product .woo-price ins {\n    text-decoration: none; }\n  ion-content .group-product .woo-price ins .woocommerce-Price-amount {\n      margin-left: 5px; }\n  ion-content .group-product .qty-box-total {\n  float: left; }\n  ion-content .group-product .qty-box-total .left, ion-content .group-product .qty-box-total .right {\n    padding-bottom: 0;\n    padding-right: 0; }\n  ion-content .group-product .qty-box-total .left .col, ion-content .group-product .qty-box-total .right .col {\n      display: flex;\n      align-items: center; }\n  ion-content .group-product .qty-box-total .left {\n    padding-left: 0; }\n  ion-content .group-product .qty-box-total .left .col {\n      padding-left: 0;\n      justify-content: flex-start; }\n  ion-content .group-product .qty-box-total .right {\n    padding-right: 0; }\n  ion-content .group-product .qty-box-total .right .col {\n      padding-right: 0;\n      justify-content: flex-end; }\n  ion-content .group-product .qty-box-total .qty-name, ion-content .group-product .qty-box-total .ttl-name {\n    font-size: 14px;\n    padding-bottom: 0;\n    padding-left: 0;\n    font-family: 'roboto-regular'; }\n  ion-content .group-product .qty-box-total .ttl-vlue {\n    font-size: 14px;\n    font-family: 'roboto-regular';\n    padding-left: 0; }\n  ion-content .group-product .qty-box-total .qty-vlue .button {\n    --color:white;\n    border-width: 0;\n    margin: 0;\n    width: 45px; }\n  ion-content .group-product .qty-box-total .qty-vlue .dgi {\n    min-width: 50px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.2); }\n  ion-content .product-detail-content {\n  margin-bottom: 10px; }\n  ion-content .product-detail-content ion-row {\n    margin-right: 0 !important; }\n  ion-content .product-detail-content h3 {\n    margin-top: 0; }\n  ion-content .product-detail-content p {\n    margin-bottom: 0; }\n  ion-content .product-detail-content.bing-fo {\n    background-color: var(-ion-color-light); }\n  ion-content .product-description {\n  padding-left: 16px;\n  padding-right: 18px; }\n  ion-content .product-description h2 {\n    margin-top: 0;\n    margin-bottom: 0 !important;\n    padding-top: 9px !important;\n    font-size: 20px;\n    font-family: 'roboto-regular'; }\n  ion-content .product-description p {\n    font-size: 14px; }\n  ion-content .product-tags-top {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  z-index: 9; }\n  ion-content .product-tags-top .product-tag-new {\n    color: white;\n    background: var(--ion-color-primary);\n    padding: 5px 8px;\n    display: inline-block;\n    margin-bottom: 4px; }\n  ion-content .product-tags-top .product-tag-featured {\n    background: var(--ion-color-primary);\n    color: white;\n    padding: 5px 8px; }\n  ion-content ion-slides ion-slide:last-child {\n  height: auto; }\n  ion-content app-product {\n  width: 100%; }\n  ion-content ion-row ion-col h5 {\n  margin-top: 7px;\n  margin-bottom: 8px; }\n  ion-content ion-row ion-col ion-icon[name=\"star\"] {\n  zoom: 0.8;\n  border-color: #FFD700;\n  color: #FFD700;\n  border-width: 2px; }\n  ion-content .select-col {\n  padding-top: 8px !important;\n  padding-bottom: 9px !important;\n  font-size: 14px;\n  font-family: 'roboto-regular'; }\n  ion-content .related-item {\n  padding-left: 16px;\n  padding-right: 18px;\n  margin-top: 8px;\n  margin-bottom: 8px !important;\n  font-size: 21px;\n  font-family: 'roboto-regular'; }\n  ion-footer ion-button {\n  font-size: 13px;\n  font-weight: 600;\n  height: 48px;\n  width: 100%;\n  margin: 0;\n  --color: white;\n  --border-radius: 0; }\n  .icon-btn {\n  color: white !important; }\n  .product-desc {\n  font-family: 'roboto-regular';\n  font-size: 16px !important; }\n  .product-name {\n  font-family: 'roboto-regular';\n  font-size: 20px !important; }\n  .light-star {\n  color: #727C8E !important;\n  border-color: #727C8E !important; }\n  .rating-col {\n  padding-left: 20px; }\n  .detail-para {\n  margin-top: 10px !important;\n  margin-bottom: 8px !important; }\n  .swiper-slide img {\n  width: 411px;\n  max-width: 100;\n  height: 460px;\n  max-height: 100%; }\n  .ion-color-light {\n  --ion-color-base: #04132d !important; }\n  ion-footer {\n  --ion-color-primary: #14a689 !important;\n  --ion-color-secondary: #f49441 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksYUFBUSxFQUFBO0VBSFo7SUFLUSxlQUFlLEVBQUE7RUFMdkI7SUFTZ0IsZUFBZSxFQUFBO0VBVC9CO0lBWWdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBSzVCO0VBRUksb0JBQWEsRUFBQTtFQUZqQjtFQUtJLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsT0FBTTtFQUNOLFVBQVUsRUFBQTtFQVJkO0lBV0ksWUFBWTtJQUNaLHFCQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0VBZnRCO0lBbUJJLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQXBCcEI7RUEyQkksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVksRUFBQTtFQWxDaEI7SUF5QlksK0JBQStCLEVBQUE7RUF6QjNDO0lBb0NJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7RUF0Q3RCO0VBK0NJLHlCQUFrQyxFQUFBO0VBL0N0QztFQW1ESSx1QkFBdUIsRUFBQTtFQW5EM0I7RUF1RFEsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUExRHpCO0lBcUVJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVUsRUFBQTtFQXhFZDtNQTJFSSx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsV0FBVyxFQUFBO0VBL0VmO0lBcUZJLGVBQWUsRUFBQTtFQXJGbkI7TUF3RkksZUFBZTtNQUNmLGdCQUFnQjtNQUNoQiw0QkFB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O0VBQzNCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7RUExYnJDO0VBNmJRLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7RUFHakM7RUFFUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDaEIsV0FBVztFQUNYLFNBQVM7RUFFVCxjQUFRO0VBQ1Isa0JBQWdCLEVBQUE7RUFHcEI7RUFDSSx1QkFBdUIsRUFBQTtFQUUzQjtFQUNJLDZCQUE2QjtFQUM3QiwwQkFBMEIsRUFBQTtFQUU5QjtFQUNJLDZCQUE2QjtFQUM3QiwwQkFBMEIsRUFBQTtFQUU5QjtFQUNJLHlCQUF5QjtFQUN6QixnQ0FBZ0MsRUFBQTtFQUVwQztFQUNJLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFBO0VBSWpDO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxvQ0FBaUIsRUFBQTtFQUd2QjtFQUNFLHVDQUFvQjtFQUNwQix5Q0FBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJhZGdle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIGlvbi1saXN0e1xuICAgIC0tYmFja2dyb3VuZDojZjlmOWY5O1xuICAgIH1cbiAgICAucHJvZHVjdC10YWdzLXRvcHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjEwcHg7XG4gICAgbGVmdDowO1xuICAgIHotaW5kZXg6IDk7XG4gICAgXG4gICAgLnByb2R1Y3QtdGFnLW5ld3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICAucHJvZHVjdC10YWctZmVhdHVyZWR7IFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgfVxuICAgIH1cbiAgICAuaWNvbnN7XG4gICAgICAgIGlvbi1pY29uW25hbWU9XCJoZWFydFwiXSxbbmFtZT1cImhlYXJ0LWVtcHR5XCJdLFtuYW1lPVwic2hhcmVcIl17XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIHotaW5kZXg6IDk7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGlvbi1pY29ue1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgLy8gaW9uLWljb25bYXJpYS1sYWJlbD1cImhlYXJ0XCJdLCAuaWNvblthcmlhLWxhYmVsPVwiaGVhcnQgb3V0bGluZVwiXXtcbiAgICAvLyBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLy8gfVxuICAgIH1cbiAgICAucHJvZHVjdC1zbGlkZXN7XG4gICAgLnN3aXBlci13cmFwcGVye1xuICAgIC5zd2lwZXItc2xpZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwyMzYsMjM2KTtcbiAgICB9XG4gICAgfVxuICAgIGltZ3tcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICB9IFxuICAgIH1cbiAgICAucHJvZHVjdC1kZXRhaWwtdGl0bGV7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBcbiAgICAvLyAucHJvZHVjdC1vZmZ7XG4gICAgLy8gQGV4dGVuZC5wcm9kdWN0LW5ldztcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOmNvcm5mbG93ZXJibHVlO1xuICAgIC8vIGxlZnQ6IDEwcHg7XG4gICAgLy8gcGFkZGluZy10b3A6IDJweDtcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIC8vIHRvcDogLTEwcHg7XG4gICAgLy8gfVxuICAgIC5wcm9kdWN0LXRhZ3N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdG9wOiAtMTVweDtcbiAgICB6LWluZGV4OiA5O1xuICAgIFxuICAgIC5wcm9kdWN0LXRhZy1vZmZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICAgIFxuICAgIH1cbiAgICBcbiAgICAud29vLXByaWNlLWdyb3Vwe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBcbiAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cbiAgICBcbiAgICAud29vLXByaWNle1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGVse1xuICAgIFxuICAgIC53b29jb21tZXJjZS1QcmljZS1hbW91bnR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOnZhciggLS1pb24tY29sb3ItZGFyayk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IFxuICAgIH1cbiAgICB9XG4gICAgaW5ze1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50e1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnByb2R1Y3QtaW5zdG9jaywgLnByb2R1Y3Qtb3V0c3RvY2t7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgICAucHJvZHVjdC1pbnN0b2Nre1xuICAgIGNvbG9yOiM3MDcwNzAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcidcbn1cbiAgICAucHJvZHVjdC1vdXRzdG9ja3tcbiAgICBjb2xvcjp2YXIoIC0taW9uLWNvbG9yLWRhcmspOyB9XG4gICAgfVxuICAgIC5wcm9kdWN0LXRpdGxle1xuICAgIHBhZGRpbmctYm90dG9tOjA7XG4gICAgaDN7XG4gICAgY29sb3I6dmFyKCAtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJzsgXG4gICAgbWFyZ2luLXRvcDowO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHNtYWxse1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjpncmF5OyB9XG4gICAgfVxuICAgIFxuICAgIH1cbiAgICB9XG4gICAgLnByb2R1Y3QtcmF0aW5nc3tcbiAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIC8vIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgaDZ7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICAgIH1cbiAgICAucHJvZHVjdC1kZXRhaWwtaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmxlZnQsIC5yaWdodHtcbiAgICBwYWRkaW5nLWJvdHRvbTowO1xuICAgIC5jb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICB9XG4gICAgLmxlZnR7XG4gICAgLmNvbHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIH1cbiAgICAucmlnaHR7XG4gICAgLmNvbHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnF0eS1uYW1le1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOjA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIH1cbiAgICAucXR5LW5hbWUsIC50dGwtbmFtZXtcbiAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICBwYWRkaW5nLWJvdHRvbTowO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICAgIC50dGwtdmx1ZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5xdHktdmx1ZSwgLnR0bC12bHVle1xuICAgIHBhZGRpbmctbGVmdDowO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICAgIC50b3RhbC1wYXJhe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnF0eS12bHVle1xuICAgIGlvbi1idXR0b257XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAvLyAtLWJvcmRlci1jb2xvcjpibGFjaztcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMzBweDtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdG9wOiAtOS41cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5kZ2l7XG4gICAgLy8gbWluLXdpZHRoOiAzN3B4O1xuICAgIC8vIG1heC13aWR0aDogNTBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDFweDsgKi9cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogN3B4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAwIHJnYmEoMCwwLDAsMC4yMCk7XG4gICAgXG4gICAgaW5wdXR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICAucHJvZHVjdC1kZXRhaWwtY29udGVudHtcbiAgICAgICAgaW9uLXNsaWRlc3tcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgICAgICB9XG4gICAgXG4gICAgaDN7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgcHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAmLmJpbmctZm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKGlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICAgIH1cbiAgICAuZ3JvdXAtcHJvZHVjdHtcbiAgICBpb24tbGFiZWx7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIGlvbi10aHVtYm5haWx7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMTVweDtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1kYXJrKTs7XG4gICAgLml0ZW0taW5uZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gICAgfVxuICAgIC5pdGVtOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gICAgaDN7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC8vZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6MDtcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgIH1cbiAgICAud29vLXByaWNle1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICBkZWx7XG4gICAgXG4gICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyBcbiAgICB9XG4gICAgfVxuICAgIGluc3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgICB9XG4gICAgfVxuICAgIFxuICAgIC5xdHktYm94LXRvdGFse1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIFxuICAgIC5sZWZ0LCAucmlnaHR7XG4gICAgcGFkZGluZy1ib3R0b206MDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIC5jb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICB9XG4gICAgLmxlZnR7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIC5jb2x7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAgfVxuICAgIC5yaWdodHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIC5jb2x7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgICB9XG4gICAgLnF0eS1uYW1lLCAudHRsLW5hbWV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInOyBcbiAgICB9XG4gICAgLnR0bC12bHVle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJzsgXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgICAucXR5LXZsdWV7XG4gICAgLmJ1dHRvbntcbiAgICAvLyAtLWJvcmRlci1jb2xvcjpibGFjaztcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAtLWNvbG9yOndoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgfVxuICAgIC5kZ2l7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAwIHJnYmEoMCwwLDAsMC4yMCk7XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgfVxuICAgIC5wcm9kdWN0LWRldGFpbC1jb250ZW50e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaW9uLXJvd3tcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGgze1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAvL2ZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG4gICAgcHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAmLmJpbmctZm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICB9XG4gICAgLnByb2R1Y3QtZGVzY3JpcHRpb257XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICBoMntcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIH1cbiAgICAucHJvZHVjdC10YWdzLXRvcHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjEwcHg7XG4gICAgbGVmdDowO1xuICAgIHotaW5kZXg6IDk7XG4gICAgXG4gICAgLnByb2R1Y3QtdGFnLW5ld3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gICAgLnByb2R1Y3QtdGFnLWZlYXR1cmVkeyBcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICB9XG4gICAgfVxuICAgIGlvbi1zbGlkZXN7XG4gICAgaW9uLXNsaWRle1xuICAgICY6bGFzdC1jaGlsZHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgaW9uLXNsaWRlc3tcbiAgICAgICAgLy8gLS1idWxsZXQtYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC8vIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiBibGFjaztcbiAgICB9XG4gICAgYXBwLXByb2R1Y3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIGlvbi1yb3d7XG4gICAgaW9uLWNvbHtcbiAgICBoNXtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICBpb24taWNvbltuYW1lPVwic3RhclwiXXtcbiAgICB6b29tOiAwLjg7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkZENzAwO1xuICAgIGNvbG9yOiAjRkZENzAwO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIH1cbiAgICB9XG4gICAgfVxuICAgIC5zZWxlY3QtY29se1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA5cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICB9XG4gICAgLnJlbGF0ZWQtaXRlbXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIH1cbiAgICB9XG4gICAgaW9uLWZvb3RlcntcbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmljb24tYnRue1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnByb2R1Y3QtZGVzY3tcbiAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucHJvZHVjdC1uYW1le1xuICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5saWdodC1zdGFye1xuICAgICAgICBjb2xvcjogIzcyN0M4RSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItY29sb3I6ICM3MjdDOEUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnJhdGluZy1jb2x7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG4gICAgLmRldGFpbC1wYXJhe1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICAgIH1cblxuXG4gICAgLnN3aXBlci1zbGlkZSBpbWcge1xuICAgICAgICB3aWR0aDogNDExcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwO1xuICAgICAgICBoZWlnaHQ6IDQ2MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5pb24tY29sb3ItbGlnaHQge1xuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDQxMzJkICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gIGlvbi1mb290ZXJ7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzE0YTY4OSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTogI2Y0OTQ0MSAhaW1wb3J0YW50O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/product-detail/product-detail.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/product-detail/product-detail.page.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/custom-theme.service */ "./src/app/yesgenie/Pages/services/custom-theme.service.ts");
/* harmony import */ var _yes_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share.service */ "./src/app/share.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search/search.page */ "./src/app/yesgenie/Pages/search/search.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(formBuilder, router, route, services, service, menuCtrl, navCtrl, toastController, services1, events, storage, applicationRef, socialSharing, modalCtrl) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.services = services;
        this.service = service;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.services1 = services1;
        this.events = events;
        this.storage = storage;
        this.applicationRef = applicationRef;
        this.socialSharing = socialSharing;
        this.modalCtrl = modalCtrl;
        this.wishArray = [];
        this.varAllOption = [];
        this.selectedOptionValue = [];
        this.pushselected = [];
        this.disableCartButton = false;
        this.isLiked = 0;
        this.product_quantity = 1;
        this.itemColor = [];
        this.iconColorVar = "";
        this.heart = false;
        this.qtyy = 0;
        this.tab1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.sliderConfig = {
            slidesPerView: 2.5,
            spaceBetween: 0
        };
    }
    ProductDetailPage.prototype.share = function () {
        // Share via email
        this.socialSharing.share(this.responseData.title, this.responseData.title, 'https://www.yesgenie.com/uploads/images/' + this.responseData.image_small, 'https://www.yesgenie.com/' + this.responseData.slug);
    };
    ProductDetailPage.prototype.opensearch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_9__["SearchPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductDetailPage.prototype.enableDisbaleCartButton = function () {
        var _this = this;
        this.services1.cartProducts.forEach(function (value, index) {
            if (value.product_id != _this.responseData.product_id || _this.responseData.quantity != '0') {
                _this.disableCartButton = false;
            }
        });
        this.services1.cartProducts.forEach(function (value, index) {
            if (value.product_id == _this.responseData.product_id || _this.responseData.quantity == '0') {
                _this.disableCartButton = true;
            }
        });
        this.applicationRef.tick();
    };
    ProductDetailPage.prototype.checkWishList = function () {
        //getting wishList items from local storage
        var count = 0;
        if (this.wishArray != null)
            for (var _i = 0, _a = this.wishArray; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value.product_id == this.responseData.product_id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    };
    ProductDetailPage.prototype.ngOnInit = function () {
    };
    ProductDetailPage.prototype.clickWishList = function () {
        this.heart = !this.heart;
    };
    ProductDetailPage.prototype.goToProductPage = function () {
        this.navCtrl.navigateForward("/bs-categories");
    };
    ProductDetailPage.prototype.goToCart = function () {
        this.navCtrl.navigateForward("bs-cart");
    };
    ProductDetailPage.prototype.addQuantity = function () {
        if (this.responseData.quantity > this.product_quantity) {
            this.product_quantity++;
        }
        else {
            this.presentToast('Product quantity is limited');
        }
    };
    ProductDetailPage.prototype.minusQuantity = function () {
        if (this.product_quantity > 1) {
            this.product_quantity--;
        }
    };
    ProductDetailPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            position: "middle",
                            color: "primary"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDetailPage.prototype.pinchEvent = function (e) {
        this.navCtrl.navigateForward("ui-templates-details");
    };
    ProductDetailPage.prototype.addtoFav = function (p) {
        // this.loading.autoHide(500);
        if (this.isLiked == 0) {
            this.addWishList(p);
        }
        else {
            this.removeWishList(p);
        }
    };
    ProductDetailPage.prototype.addWishList = function (p) {
        this.services1.addWishList(p);
    };
    ProductDetailPage.prototype.removeWishList = function (p) {
        this.services1.removeWishList(p);
    };
    ProductDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
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
        setTimeout(function () {
            if (_this.catId != 'null') {
                _this.productbysubcategory(_this.catId);
            }
            if (_this.catId != 'null') {
                _this.RelatedProduct(_this.catId);
            }
            else {
                _this.productbycat(_this.firstCatId);
            }
        }, 1000);
    };
    ProductDetailPage.prototype.ProdView = function (id2) {
        var _this = this;
        var data2 = {
            id2: id2
        };
        this.services1.productView(data2).subscribe(function (result) {
            console.log(result);
            _this.responseData = result.response.product_data[0];
            _this.varresponse = result.response.variations_price;
            _this.productVariation = result.response.products_variations;
            _this.productVariation.forEach(function (value, index) {
                _this.Variationoption(value.common_id);
            });
            // this.productVariationOption = result.response.products_variations_options;
            // this.MyDefaultYearIdValue =  result.response.products_variations_options[0].option_text;
            _this.ProValQun = _this.MyDefaultYearIdValue;
            _this.compareWith = _this.compareWithFn;
            if (_this.responseData.status.code == 0) {
            }
            else {
                console.log(_this.responseData);
                _this.productid = _this.responseData.product_id;
                _this.thirdcategoryid = _this.responseData.third_category_id;
                _this.subcategoryid = _this.responseData.subcategory_id;
                _this.categoryid = _this.responseData.category_id;
                _this.sellerid = _this.responseData.user_id;
                _this.unitprice = _this.responseData.price;
                _this.saleprice = _this.responseData.sale_price;
                _this.vendorstate = _this.responseData.state_id;
                _this.events.subscribe('wishListUpdate', function (product_id, value) {
                    if (product_id == _this.responseData.product_id)
                        _this.isLiked = value;
                });
                _this.storage.get('wishListProducts').then(function (val) {
                    _this.wishArray = val;
                    _this.checkWishList();
                });
                if (_this.responseData.product_pricing == "variable") {
                    _this.services1.cartProducts.forEach(function (value, index) {
                        if (_this.responseData.quantity != '0' || value.product_unit_price != _this.varresponse.price || _this.varresponse.outofstock != "Out of Stock" || _this.varresponse != '') {
                            _this.disableCartButton = false;
                        }
                    });
                    _this.services1.cartProducts.forEach(function (value, index) {
                        if (_this.responseData.quantity == '0' || value.product_unit_price == _this.varresponse.price || _this.varresponse.outofstock == "Out of Stock" || _this.varresponse == '') {
                            _this.disableCartButton = true;
                        }
                    });
                    _this.enableDisbaleCartButton();
                }
                else {
                    _this.enableDisbaleCartButton();
                }
            }
        }, function (error) {
        });
    };
    ProductDetailPage.prototype.compareWithFn = function (o1, o2) {
        return o1 === o2;
    };
    ;
    ProductDetailPage.prototype.Variationoption = function (VarComId) {
        var _this = this;
        var userData = 'variation_common_id=' + VarComId;
        this.services1.Variationoption(userData).subscribe(function (result) {
            _this.productVariationOption = result.response;
            _this.varAllOption.push(_this.productVariationOption);
            console.log(_this.varAllOption);
            console.log(_this.productVariationOption);
        }, function (error) {
        });
    };
    ProductDetailPage.prototype.addtocartvariation = function (val, id, label) {
        var _this = this;
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
        var userDatavar = {
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
        this.selectedOptionValue.forEach(function (value, index) {
            value[proid] = val;
            var proid = value.var + value.id;
            uservardata[proid] = value.value;
            uservardata['product_id'] = value.product_id;
        });
        console.log(userDatavar);
        console.log(uservardata);
        this.services1.addtocartvariation(uservardata).then(function (result) {
            _this.responseDataVarPrice = result;
            _this.varresponse = _this.responseDataVarPrice.response;
            console.log(_this.varresponse);
            _this.services1.cartProducts.forEach(function (value, index) {
                if (_this.responseData.quantity != '0' || value.product_unit_price != _this.varresponse.price || _this.varresponse.outofstock != 'Out of Stock') {
                    _this.disableCartButton = false;
                }
            });
            _this.services1.cartProducts.forEach(function (value, index) {
                if (_this.responseData.quantity == '0' || value.product_unit_price == _this.varresponse.price || _this.varresponse.outofstock == 'Out of Stock') {
                    _this.disableCartButton = true;
                }
            });
            if (_this.varresponse.outofstock != 'Out of Stock') {
                _this.disableCartButton = false;
            }
            else if (_this.varresponse.outofstock == 'Out of Stock') {
                _this.disableCartButton = true;
            }
        }, function (error) {
        });
    };
    ProductDetailPage.prototype.ProdImg = function (id3) {
        var _this = this;
        var data3 = {
            id3: id3
        };
        this.services1.productimg(data3).subscribe(function (result) {
            _this.responseDataImg = result.response;
            if (_this.responseDataImg.Status === 0) {
            }
            else {
                console.log(_this.responseDataImg);
            }
        }, function (error) {
        });
    };
    ProductDetailPage.prototype.RelatedProduct = function (id1) {
        var _this = this;
        var data1 = {
            id1: id1
        };
        this.services1.product(data1).subscribe(function (result) {
            _this.ProductResponse = result.response.product_data;
            if (_this.ProductResponse.Status === 0) {
            }
            else {
                console.log(_this.ProductResponse);
            }
        }, function (error) {
        });
    };
    ProductDetailPage.prototype.productbysubcategory = function (id5) {
        var _this = this;
        var data5 = {
            id5: id5
        };
        this.services1.productbysubcategory(data5).subscribe(function (result) {
            console.log(result);
            if (result.response == null || '') {
                _this.productbycat(_this.Id);
            }
            else {
                _this.ProductResponse = result.response.product_data;
                _this.productresvar = result.response.variations_price;
                console.log(_this.productresvar);
                setTimeout(function () {
                    _this.MessShow = "No products found!";
                }, 4000);
                if (_this.ProductResponse.status == 0) {
                }
                else {
                    console.log(_this.ProductResponse);
                    setTimeout(function () {
                        _this.MessShow = "No products found!";
                    }, 4000);
                }
            }
        }, function (error) {
        });
    };
    ProductDetailPage.prototype.productbycat = function (id6) {
        var _this = this;
        var data6 = {
            id6: id6
        };
        this.services1.productbycat(data6).subscribe(function (result) {
            console.log(result);
            _this.ProductResponse = result.response.product_data;
            _this.productresvar = result.response.variations_price;
            console.log(_this.productresvar);
            setTimeout(function () {
                _this.MessShow = "No products found!";
            }, 4000);
            if (_this.ProductResponse.status == 0) {
            }
            else {
                console.log(_this.ProductResponse);
                setTimeout(function () {
                    _this.MessShow = "No products found!";
                }, 4000);
            }
        }, function (error) {
        });
    };
    ProductDetailPage.prototype.goToProductCat = function () {
        if (this.SubCatId != 'null') {
            this.router.navigate(['/bs-products', { id: this.SubCatId }]);
        }
        if (this.catId != 'null') {
            this.router.navigate(['/bs-products', { id: this.catId }]);
        }
        else {
            this.router.navigate(['/bs-products', { id: this.firstCatId }]);
        }
    };
    ProductDetailPage.prototype.openReviewsPage = function (ProId) {
        this.router.navigate(['bs-reviews', { ProId: ProId }]);
    };
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
    ProductDetailPage.prototype.addToCartProduct = function (product) {
        if (this.productVariation.length != this.selectedOptionValue.length) {
            this.presentToast('Please select option');
        }
        else {
            this.services1.addToCart(product, this.product_quantity, this.varresponse, this.selectedOptionValue);
            this.enableDisbaleCartButton();
        }
    };
    ProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.page.html */ "./src/app/yesgenie/Pages/product-detail/product-detail.page.html"),
            styles: [__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/yesgenie/Pages/product-detail/product-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _share_service__WEBPACK_IMPORTED_MODULE_6__["ShareService"], _services_custom_theme_service__WEBPACK_IMPORTED_MODULE_3__["CustomThemeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _yes_service_service__WEBPACK_IMPORTED_MODULE_4__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-product-detail-product-detail-module.js.map