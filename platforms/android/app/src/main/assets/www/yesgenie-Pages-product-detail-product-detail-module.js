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

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 16px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 5px;\n    bottom: 14px; }\n  ion-content ion-list {\n  --background:#f9f9f9; }\n  ion-content .product-tags-top {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  z-index: 9; }\n  ion-content .product-tags-top .product-tag-new {\n    color: white;\n    background-color: red;\n    padding: 5px 8px;\n    display: inline-block;\n    margin-bottom: 4px; }\n  ion-content .product-tags-top .product-tag-featured {\n    color: white;\n    padding: 5px 8px; }\n  ion-content .icons {\n  position: absolute;\n  top: 10px;\n  right: 0;\n  background-color: #eee;\n  width: 45px;\n  z-index: 9;\n  direction: ltr;\n  height: 32px; }\n  ion-content .icons ion-icon[name=\"heart\"], ion-content .icons [name=\"heart-empty\"], ion-content .icons [name=\"share\"] {\n    color: var(--ion-color-primary); }\n  ion-content .icons ion-icon {\n    padding-top: 5px;\n    font-size: 22px;\n    padding-left: 10px; }\n  ion-content .product-slides .swiper-wrapper .swiper-slide {\n  background-color: #ececec; }\n  ion-content .product-slides img {\n  filter: brightness(0.9); }\n  ion-content .product-detail-title {\n  padding-left: 16px;\n  padding-right: 18px;\n  position: relative;\n  padding-bottom: 0; }\n  ion-content .product-detail-title .product-tags {\n    position: absolute;\n    left: 10px;\n    top: -15px;\n    z-index: 9; }\n  ion-content .product-detail-title .product-tags .product-tag-off {\n      background-color: black;\n      color: white;\n      padding: 5px 8px;\n      margin-right: 4px;\n      float: left; }\n  ion-content .product-detail-title .woo-price-group {\n    font-size: 12px; }\n  ion-content .product-detail-title .woo-price-group .woocommerce-Price-amount {\n      font-size: 20px;\n      font-weight: 600;\n      color: var(--ion-color-dark); }\n  ion-content .product-detail-title .woo-price-group .woo-price {\n      font-size: 24px;\n      font-family: 'roboto-regular';\n      font-weight: 200 !important;\n      float: left; }\n  ion-content .product-detail-title .woo-price-group .woo-price del .woocommerce-Price-amount {\n        font-size: 16px;\n        color: var(--ion-color-dark);\n        text-decoration: line-through; }\n  ion-content .product-detail-title .woo-price-group .woo-price ins {\n        text-decoration: none; }\n  ion-content .product-detail-title .woo-price-group .woo-price ins .woocommerce-Price-amount {\n          margin-left: 5px; }\n  ion-content .product-detail-title .woo-price-group .product-instock, ion-content .product-detail-title .woo-price-group .product-outstock {\n      float: right;\n      color: gray;\n      padding-top: 0; }\n  ion-content .product-detail-title .woo-price-group .product-instock {\n      color: #707070 !important;\n      font-size: 16px;\n      font-family: 'roboto-regular'; }\n  ion-content .product-detail-title .woo-price-group .product-outstock {\n      color: var(--ion-color-dark); }\n  ion-content .product-detail-title .product-title {\n    padding-bottom: 0; }\n  ion-content .product-detail-title .product-title h3 {\n      color: var(--ion-color-dark);\n      font-family: 'roboto-regular';\n      margin-top: 0;\n      margin-bottom: 0;\n      font-size: 14px; }\n  ion-content .product-detail-title .product-title h3 small {\n        font-size: 12px;\n        color: gray; }\n  ion-content .product-ratings ion-col {\n  padding-left: 0 !important; }\n  ion-content .product-ratings ion-icon {\n  font-size: 28px; }\n  ion-content .product-ratings h6 {\n  margin-bottom: 6px;\n  text-align: start;\n  color: black;\n  font-size: 14px;\n  margin-top: 3px; }\n  ion-content .product-detail-header {\n  background-color: #f5f5f5;\n  padding-left: 16px;\n  padding-right: 18px;\n  position: relative; }\n  ion-content .product-detail-header .left, ion-content .product-detail-header .right {\n    padding-bottom: 0; }\n  ion-content .product-detail-header .left .col, ion-content .product-detail-header .right .col {\n      display: flex;\n      align-items: center; }\n  ion-content .product-detail-header .left .col {\n    justify-content: flex-start; }\n  ion-content .product-detail-header .right .col {\n    justify-content: flex-end; }\n  ion-content .product-detail-header .qty-name {\n    padding-bottom: 10px !important;\n    padding-top: 0;\n    font-size: 20px;\n    font-family: 'roboto-regular'; }\n  ion-content .product-detail-header .qty-name, ion-content .product-detail-header .ttl-name {\n    padding-left: 0;\n    padding-bottom: 0;\n    padding-right: 0; }\n  ion-content .product-detail-header .ttl-vlue {\n    font-weight: bold;\n    font-size: 20px; }\n  ion-content .product-detail-header .qty-vlue, ion-content .product-detail-header .ttl-vlue {\n    padding-left: 0;\n    padding-right: 0; }\n  ion-content .product-detail-header .total-para {\n    font-size: 12px; }\n  ion-content .product-detail-header .qty-vlue ion-button {\n    background: var(--ion-color-primary);\n    --color: white;\n    border-width: 0;\n    margin: 0;\n    height: 30px;\n    width: 100%; }\n  ion-content .product-detail-header .qty-vlue .dgi {\n    text-align: center;\n    width: 100%;\n    /* margin-left: 1px; */\n    font-size: 14px;\n    --padding-end: 7px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.2); }\n  ion-content .product-detail-header .qty-vlue .dgi input {\n      text-align: center; }\n  ion-content .product-detail-content ion-slides {\n  padding-left: 7px; }\n  ion-content .product-detail-content h3 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px; }\n  ion-content .product-detail-content p {\n  margin-bottom: 0; }\n  ion-content .product-detail-content.bing-fo {\n  background-color: var(ion-color-light); }\n  ion-content .group-product ion-label {\n  margin-left: 10px; }\n  ion-content .group-product ion-thumbnail {\n  margin: 0;\n  width: 115px;\n  height: 115px; }\n  ion-content .group-product ion-item {\n  --padding-start:0;\n  align-items: flex-start;\n  border-bottom: 1px solid #dedede;\n  background-color: var(--ion-color-dark); }\n  ion-content .group-product ion-item .item-inner {\n    border-bottom: none; }\n  ion-content .group-product .item:last-child {\n  border-bottom: none; }\n  ion-content .group-product h3 {\n  color: var(--ion-color-dark);\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-weight: 400;\n  padding-left: 16px;\n  padding-right: 18px; }\n  ion-content .group-product .woo-price {\n  float: left;\n  font-size: 14px;\n  font-family: 'roboto-regular'; }\n  ion-content .group-product .woo-price del .woocommerce-Price-amount {\n    font-size: 16px;\n    color: var(--ion-color-dark);\n    text-decoration: line-through; }\n  ion-content .group-product .woo-price ins {\n    text-decoration: none; }\n  ion-content .group-product .woo-price ins .woocommerce-Price-amount {\n      margin-left: 5px; }\n  ion-content .group-product .qty-box-total {\n  float: left; }\n  ion-content .group-product .qty-box-total .left, ion-content .group-product .qty-box-total .right {\n    padding-bottom: 0;\n    padding-right: 0; }\n  ion-content .group-product .qty-box-total .left .col, ion-content .group-product .qty-box-total .right .col {\n      display: flex;\n      align-items: center; }\n  ion-content .group-product .qty-box-total .left {\n    padding-left: 0; }\n  ion-content .group-product .qty-box-total .left .col {\n      padding-left: 0;\n      justify-content: flex-start; }\n  ion-content .group-product .qty-box-total .right {\n    padding-right: 0; }\n  ion-content .group-product .qty-box-total .right .col {\n      padding-right: 0;\n      justify-content: flex-end; }\n  ion-content .group-product .qty-box-total .qty-name, ion-content .group-product .qty-box-total .ttl-name {\n    font-size: 14px;\n    padding-bottom: 0;\n    padding-left: 0;\n    font-family: 'roboto-regular'; }\n  ion-content .group-product .qty-box-total .ttl-vlue {\n    font-size: 14px;\n    font-family: 'roboto-regular';\n    padding-left: 0; }\n  ion-content .group-product .qty-box-total .qty-vlue .button {\n    --color:white;\n    border-width: 0;\n    margin: 0;\n    width: 45px; }\n  ion-content .group-product .qty-box-total .qty-vlue .dgi {\n    min-width: 50px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.2); }\n  ion-content .product-detail-content {\n  margin-bottom: 10px; }\n  ion-content .product-detail-content ion-row {\n    margin-right: 0 !important; }\n  ion-content .product-detail-content h3 {\n    margin-top: 0; }\n  ion-content .product-detail-content p {\n    margin-bottom: 0; }\n  ion-content .product-detail-content.bing-fo {\n    background-color: var(-ion-color-light); }\n  ion-content .product-description {\n  padding-left: 16px;\n  padding-right: 18px; }\n  ion-content .product-description h2 {\n    margin-top: 0;\n    margin-bottom: 0 !important;\n    padding-top: 9px !important;\n    font-size: 20px;\n    font-family: 'roboto-regular'; }\n  ion-content .product-description p {\n    font-size: 14px; }\n  ion-content .product-tags-top {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  z-index: 9; }\n  ion-content .product-tags-top .product-tag-new {\n    color: white;\n    background: var(--ion-color-primary);\n    padding: 5px 8px;\n    display: inline-block;\n    margin-bottom: 4px; }\n  ion-content .product-tags-top .product-tag-featured {\n    background: var(--ion-color-primary);\n    color: white;\n    padding: 5px 8px; }\n  ion-content ion-slides ion-slide:last-child {\n  height: auto; }\n  ion-content app-product {\n  width: 100%; }\n  ion-content ion-row ion-col h5 {\n  margin-top: 7px;\n  margin-bottom: 8px; }\n  ion-content ion-row ion-col ion-icon[name=\"star\"] {\n  zoom: 0.8;\n  border-color: #FFD700;\n  color: #FFD700;\n  border-width: 2px; }\n  ion-content .select-col {\n  padding-top: 8px !important;\n  padding-bottom: 9px !important;\n  font-size: 14px;\n  font-family: 'roboto-regular'; }\n  ion-content .related-item {\n  padding-left: 16px;\n  padding-right: 18px;\n  margin-top: 8px;\n  margin-bottom: 8px !important;\n  font-size: 21px;\n  font-family: 'roboto-regular'; }\n  ion-footer ion-button {\n  font-size: 13px;\n  font-weight: 600;\n  height: 48px;\n  width: 100%;\n  margin: 0;\n  --color: white;\n  --border-radius: 0; }\n  .icon-btn {\n  color: white !important; }\n  .product-desc {\n  font-family: 'roboto-regular';\n  font-size: 16px !important; }\n  .product-name {\n  font-family: 'roboto-regular';\n  font-size: 20px !important; }\n  .light-star {\n  color: #727C8E !important;\n  border-color: #727C8E !important; }\n  .rating-col {\n  padding-left: 20px; }\n  .detail-para {\n  margin-top: 10px !important;\n  margin-bottom: 8px !important; }\n  .swiper-slide img {\n  width: 411px;\n  max-width: 100;\n  height: 460px;\n  max-height: 100%; }\n  .ion-color-light {\n  --ion-color-base: #04132d !important; }\n  ion-footer {\n  --ion-color-primary: #14a689 !important;\n  --ion-color-secondary: #f49441 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxhQUFRLEVBQUE7RUFIWjtJQUtRLGVBQWUsRUFBQTtFQUx2QjtJQVNnQixlQUFlLEVBQUE7RUFUL0I7SUFZZ0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFLNUI7RUFFSSxvQkFBYSxFQUFBO0VBRmpCO0VBS0ksa0JBQWtCO0VBQ2xCLFNBQVE7RUFDUixPQUFNO0VBQ04sVUFBVSxFQUFBO0VBUmQ7SUFXSSxZQUFZO0lBQ1oscUJBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7RUFmdEI7SUFtQkksWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBcEJwQjtFQTJCSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsWUFBWSxFQUFBO0VBbENoQjtJQXlCWSwrQkFBK0IsRUFBQTtFQXpCM0M7SUFvQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtFQXRDdEI7RUErQ0kseUJBQWtDLEVBQUE7RUEvQ3RDO0VBbURJLHVCQUF1QixFQUFBO0VBbkQzQjtFQXVEUSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQTFEekI7SUFxRUksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVSxFQUFBO0VBeEVkO01BMkVJLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixXQUFXLEVBQUE7RUEvRWY7SUFxRkksZUFBZSxFQUFBO0VBckZuQjtNQXdGSSxlQUFlO01BQ2YsZ0JBQWdCO01B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USwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTtFQTFickM7RUE2YlEsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTtFQUdqQztFQUVRLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNoQixXQUFXO0VBQ1gsU0FBUztFQUVULGNBQVE7RUFDUixrQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLHVCQUF1QixFQUFBO0VBRTNCO0VBQ0ksNkJBQTZCO0VBQzdCLDBCQUEwQixFQUFBO0VBRTlCO0VBQ0ksNkJBQTZCO0VBQzdCLDBCQUEwQixFQUFBO0VBRTlCO0VBQ0kseUJBQXlCO0VBQ3pCLGdDQUFnQyxFQUFBO0VBRXBDO0VBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSwyQkFBMkI7RUFDM0IsNkJBQTZCLEVBQUE7RUFJakM7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLG9DQUFpQixFQUFBO0VBR3ZCO0VBQ0UsdUNBQW9CO0VBQ3BCLHlDQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbnN7XG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYmFkZ2V7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWxpc3R7XG4gICAgLS1iYWNrZ3JvdW5kOiNmOWY5Zjk7XG4gICAgfVxuICAgIC5wcm9kdWN0LXRhZ3MtdG9we1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MTBweDtcbiAgICBsZWZ0OjA7XG4gICAgei1pbmRleDogOTtcbiAgICBcbiAgICAucHJvZHVjdC10YWctbmV3e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICAgIC5wcm9kdWN0LXRhZy1mZWF0dXJlZHsgXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICB9XG4gICAgfVxuICAgIC5pY29uc3tcbiAgICAgICAgaW9uLWljb25bbmFtZT1cImhlYXJ0XCJdLFtuYW1lPVwiaGVhcnQtZW1wdHlcIl0sW25hbWU9XCJzaGFyZVwiXXtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgei1pbmRleDogOTtcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgaW9uLWljb257XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAvLyBpb24taWNvblthcmlhLWxhYmVsPVwiaGVhcnRcIl0sIC5pY29uW2FyaWEtbGFiZWw9XCJoZWFydCBvdXRsaW5lXCJde1xuICAgIC8vIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAvLyB9XG4gICAgfVxuICAgIC5wcm9kdWN0LXNsaWRlc3tcbiAgICAuc3dpcGVyLXdyYXBwZXJ7XG4gICAgLnN3aXBlci1zbGlkZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LDIzNiwyMzYpO1xuICAgIH1cbiAgICB9XG4gICAgaW1ne1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xuICAgIH0gXG4gICAgfVxuICAgIC5wcm9kdWN0LWRldGFpbC10aXRsZXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIFxuICAgIC8vIC5wcm9kdWN0LW9mZntcbiAgICAvLyBAZXh0ZW5kLnByb2R1Y3QtbmV3O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6Y29ybmZsb3dlcmJsdWU7XG4gICAgLy8gbGVmdDogMTBweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogMnB4O1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgLy8gdG9wOiAtMTBweDtcbiAgICAvLyB9XG4gICAgLnByb2R1Y3QtdGFnc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgICB0b3A6IC0xNXB4O1xuICAgIHotaW5kZXg6IDk7XG4gICAgXG4gICAgLnByb2R1Y3QtdGFnLW9mZntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC53b28tcHJpY2UtZ3JvdXB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIFxuICAgIC53b29jb21tZXJjZS1QcmljZS1hbW91bnR7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhciggLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuICAgIFxuICAgIC53b28tcHJpY2V7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkZWx7XG4gICAgXG4gICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6dmFyKCAtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgXG4gICAgfVxuICAgIH1cbiAgICBpbnN7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC53b29jb21tZXJjZS1QcmljZS1hbW91bnR7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICBcbiAgICAucHJvZHVjdC1pbnN0b2NrLCAucHJvZHVjdC1vdXRzdG9ja3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIC5wcm9kdWN0LWluc3RvY2t7XG4gICAgY29sb3I6IzcwNzA3MCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJ1xufVxuICAgIC5wcm9kdWN0LW91dHN0b2Nre1xuICAgIGNvbG9yOnZhciggLS1pb24tY29sb3ItZGFyayk7IH1cbiAgICB9XG4gICAgLnByb2R1Y3QtdGl0bGV7XG4gICAgcGFkZGluZy1ib3R0b206MDtcbiAgICBoM3tcbiAgICBjb2xvcjp2YXIoIC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInOyBcbiAgICBtYXJnaW4tdG9wOjA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgc21hbGx7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOmdyYXk7IH1cbiAgICB9XG4gICAgXG4gICAgfVxuICAgIH1cbiAgICAucHJvZHVjdC1yYXRpbmdze1xuICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBpb24taWNvbntcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgLy8gY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICBoNntcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB9XG4gICAgfVxuICAgIC5wcm9kdWN0LWRldGFpbC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAubGVmdCwgLnJpZ2h0e1xuICAgIHBhZGRpbmctYm90dG9tOjA7XG4gICAgLmNvbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIH1cbiAgICAubGVmdHtcbiAgICAuY29se1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAgfVxuICAgIC5yaWdodHtcbiAgICAuY29se1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgIH1cbiAgICBcbiAgICAucXR5LW5hbWV7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6MDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgfVxuICAgIC5xdHktbmFtZSwgLnR0bC1uYW1le1xuICAgIHBhZGRpbmctbGVmdDowO1xuICAgIHBhZGRpbmctYm90dG9tOjA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gICAgLnR0bC12bHVle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLnF0eS12bHVlLCAudHRsLXZsdWV7XG4gICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gICAgLnRvdGFsLXBhcmF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAucXR5LXZsdWV7XG4gICAgaW9uLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC8vIC0tYm9yZGVyLWNvbG9yOmJsYWNrO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyB0b3A6IC05LjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmRnaXtcbiAgICAvLyBtaW4td2lkdGg6IDM3cHg7XG4gICAgLy8gbWF4LXdpZHRoOiA1MHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBtYXJnaW4tbGVmdDogMXB4OyAqL1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLXBhZGRpbmctZW5kOiA3cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDAgcmdiYSgwLDAsMCwwLjIwKTtcbiAgICBcbiAgICBpbnB1dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgfVxuICAgIC5wcm9kdWN0LWRldGFpbC1jb250ZW50e1xuICAgICAgICBpb24tc2xpZGVze1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICBoM3tcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICBwe1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgICYuYmluZy1mb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoaW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgfVxuICAgIC5ncm91cC1wcm9kdWN0e1xuICAgIGlvbi1sYWJlbHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gICAgaW9uLXRodW1ibmFpbHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIGhlaWdodDogMTE1cHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgIC0tcGFkZGluZy1zdGFydDowO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspOztcbiAgICAuaXRlbS1pbm5lcntcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICB9XG4gICAgLml0ZW06bGFzdC1jaGlsZHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICBoM3tcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLy9mb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDowO1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gICAgfVxuICAgIC53b28tcHJpY2V7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIGRlbHtcbiAgICBcbiAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IFxuICAgIH1cbiAgICB9XG4gICAgaW5ze1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50e1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnF0eS1ib3gtdG90YWx7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgXG4gICAgLmxlZnQsIC5yaWdodHtcbiAgICBwYWRkaW5nLWJvdHRvbTowO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgLmNvbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIH1cbiAgICAubGVmdHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgLmNvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0e1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgLmNvbHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgIH1cbiAgICAucXR5LW5hbWUsIC50dGwtbmFtZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1ib3R0b206MDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7IFxuICAgIH1cbiAgICAudHRsLXZsdWV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInOyBcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuICAgIC5xdHktdmx1ZXtcbiAgICAuYnV0dG9ue1xuICAgIC8vIC0tYm9yZGVyLWNvbG9yOmJsYWNrO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIC0tY29sb3I6d2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogNDVweDtcbiAgICB9XG4gICAgLmRnaXtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDAgcmdiYSgwLDAsMCwwLjIwKTtcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgLnByb2R1Y3QtZGV0YWlsLWNvbnRlbnR7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBpb24tcm93e1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaDN7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgIC8vZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICBwe1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgICYuYmluZy1mb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICAgIH1cbiAgICAucHJvZHVjdC1kZXNjcmlwdGlvbntcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgIGgye1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgfVxuICAgIC5wcm9kdWN0LXRhZ3MtdG9we1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MTBweDtcbiAgICBsZWZ0OjA7XG4gICAgei1pbmRleDogOTtcbiAgICBcbiAgICAucHJvZHVjdC10YWctbmV3e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICAucHJvZHVjdC10YWctZmVhdHVyZWR7IFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIH1cbiAgICB9XG4gICAgaW9uLXNsaWRlc3tcbiAgICBpb24tc2xpZGV7XG4gICAgJjpsYXN0LWNoaWxke1xuICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgfVxuICAgIH1cbiAgICBpb24tc2xpZGVze1xuICAgICAgICAvLyAtLWJ1bGxldC1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgLy8gLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IGJsYWNrO1xuICAgIH1cbiAgICBhcHAtcHJvZHVjdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgaW9uLXJvd3tcbiAgICBpb24tY29se1xuICAgIGg1e1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGlvbi1pY29uW25hbWU9XCJzdGFyXCJde1xuICAgIHpvb206IDAuODtcbiAgICBib3JkZXItY29sb3I6ICNGRkQ3MDA7XG4gICAgY29sb3I6ICNGRkQ3MDA7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgfVxuICAgIH1cbiAgICB9XG4gICAgLnNlbGVjdC1jb2x7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDlweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIH1cbiAgICAucmVsYXRlZC1pdGVte1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XG4gICAgfVxuICAgIH1cbiAgICBpb24tZm9vdGVye1xuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaWNvbi1idG57XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucHJvZHVjdC1kZXNje1xuICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wcm9kdWN0LW5hbWV7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxpZ2h0LXN0YXJ7XG4gICAgICAgIGNvbG9yOiAjNzI3QzhFICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzcyN0M4RSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucmF0aW5nLWNvbHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAuZGV0YWlsLXBhcmF7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG5cbiAgICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MTFweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDA7XG4gICAgICAgIGhlaWdodDogNDYwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmlvbi1jb2xvci1saWdodCB7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwNDEzMmQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgaW9uLWZvb3RlcntcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMTRhNjg5ICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjZjQ5NDQxICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"

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