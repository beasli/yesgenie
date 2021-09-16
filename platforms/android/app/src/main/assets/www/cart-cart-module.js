(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/yesgenie/Pages/cart/cart.module.ts":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/cart/cart.module.ts ***!
  \****************************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/yesgenie/Pages/cart/cart.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







// For Translation Language

var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/cart/cart.page.html":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/cart/cart.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" routerLink=\"/tabs/bs-home\" routerDirection=\"backward\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\"> {{'My Cart'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge>{{services1.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n\n\n\n\n  <ion-grid class=\"ion-no-padding grid-empty\" *ngIf=\"services1.cartProducts.length==0\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"basket\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your cart is empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continue shopping'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button color=\"secondary\" (click)=\"openProductsPage()\">{{'Explore'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n  <ion-card padding *ngFor=\"let p of products\">\n    <ion-card-header no-padding>\n      <ion-card-subtitle>\n        <h3> {{p.product_title}} </h3>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid no-padding>\n        <ion-row style=\"margin-top: 30px;\">\n          <ion-col size=\"3\" class=\"ion-no-padding\">\n            <ion-img src=\"https://www.yesgenie.com/uploads/images/{{p.image}}\"></ion-img>\n          </ion-col>\n          <ion-col class=\"col-price\" size=\"5\">\n            <p>MRP:</p>\n            <p style=\"margin-bottom: -16px;\">Unit Price:</p><br>\n            <p style=\"margin-bottom: 8px;\">Quantity:</p>\n            <p><b>Sub Total:</b></p>\n          </ion-col>\n          <ion-col class=\"col-price-ori\" size=\"4\">\n            <p class=\"para-del\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{p.product_unit_price*1 /100*1 | number : '1.2-2'}}</p>\n            <p class=\"para-del\"><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{p.product_price*1 /100*1 | number : '1.2-2'}}</p>\n            <div class=\"div-btn\">\n              <ion-button (click)=\"minusQuantity(p)\" size=\"small\" class=\"sub-btn\">\n                <p class=\"minus-para\">-</p>\n              </ion-button>\n              <span>{{p.product_quantity}}</span>\n              <ion-button (click)=\"addQuantity(p)\" class=\"add-btn\" size=\"small\">\n                <p class=\"plus-para\">+</p>\n              </ion-button>\n            </div>\n            <br /><br />\n            \n            <p  class=\"para-price-ori\"><b><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{p.product_total_price*1 /100*1 | number : '1.2-2'}}</b></p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2.5\" class=\"view-col\">\n            <ion-button (click)=\"goToProductDetail(p.product_id, p.category_id)\">view</ion-button>\n          </ion-col>\n          <ion-col size=\"8.5\">\n            <ion-button (click)=\"removeCart(p.product_id)\" fill=\"clear\" color=\"danger\">remove</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card padding *ngIf=\"services1.cartProducts.length!=0\">\n    <ion-card-header no-padding>\n      <ion-card-subtitle>\n        <h3> Apply Coupon Codes </h3>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content [formGroup]=\"couponcode\">\n      <ion-item>\n        <ion-input placeholder=\"coupon codes\" formControlName=\"coupon\"></ion-input>\n        <ion-button class=\"coupon-btn\" slot=\"end\" class=\"btn\" [disabled]=\"!couponcode.valid\" type=\"submit\" (click)=\"Getcoupon()\"> APPLY</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"price-card\" *ngFor=\"let order of orders\">\n    <ion-card-content *ngIf=\"services1.cartProducts.length!=0\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <p>\n            {{'Sub Total'|translate}}\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\">\n          <p>\n            <span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product_total_price*1 /100*1 | number : '1.2-2'}}\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <p>\n            {{'Discount'|translate}}\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\">\n          <p>\n            <span class=\"woocommerce-Price-currencySymbol\">₹</span>{{TotalDiscount*1 /100*1 | number : '1.2-2'}}\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <p>\n            <b>\n              {{'Total'|translate}}\n            </b>\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\">\n          <p>\n            <b>\n              <span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product_price_afterDiscount*1 /100*1 | number : '1.2-2'}}\n            </b>\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n<ion-footer *ngIf=\"services1.cartProducts.length!=0\">\n  <ion-button (click)=\"proceedToCheckOut()\" expnad=\"full\">Proceed</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/cart/cart.page.scss":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/cart/cart.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content .grid-empty {\n  margin-top: 50%; }\n  ion-content .grid-empty ion-row ion-col {\n    text-align: center; }\n  ion-content .grid-empty ion-row ion-col ion-icon {\n      zoom: 3.9;\n      color: lightgrey; }\n  ion-content .grid-empty ion-row ion-col ion-button {\n      --border-radius: 0px; }\n  ion-content .grid-empty ion-row ion-col h4 {\n      font-size: 16px;\n      font-weight: bold;\n      margin-top: 2px;\n      margin-bottom: 6px; }\n  ion-content .grid-empty ion-row ion-col h5 {\n      font-size: 14px;\n      color: gray;\n      margin-top: 0; }\n  ion-content p {\n  font-size: 14px;\n  font-family: 'roboto-regular'; }\n  ion-content ion-item {\n  --padding-start:0;\n  --inner-padding-end: 0; }\n  ion-content .grid {\n  margin-top: 50%; }\n  ion-content .grid ion-row ion-col {\n    text-align: center; }\n  ion-content .grid ion-row ion-col ion-img {\n      width: 35%;\n      margin-left: auto;\n      margin-right: auto; }\n  ion-content .grid ion-row ion-col ion-button {\n      --color: white;\n      --border-radius: 0px; }\n  ion-content .grid ion-row ion-col h4 {\n      font-size: 20px;\n      font-family: 'roboto-regular';\n      margin-top: 2px;\n      font-weight: bold;\n      margin-bottom: 10px; }\n  ion-content .grid ion-row ion-col h5 {\n      font-size: 14px;\n      color: gray;\n      margin-top: 0; }\n  ion-content .grid ion-row ion-col p {\n      font-size: 14px !important;\n      font-family: 'roboto-medium' !important;\n      margin-bottom: 10px; }\n  ion-content ion-card {\n  padding-top: 10px;\n  padding-left: 10px; }\n  ion-content ion-card ion-card-header {\n    height: 22px;\n    border-width: 0.2px; }\n  ion-content ion-card ion-card-header ion-card-subtitle h3 {\n      font-size: 18px;\n      margin-top: 0;\n      font-family: 'roboto-medium';\n      color: black;\n      white-space: pre-line;\n      text-overflow: ellipsis;\n      overflow: hidden; }\n  ion-content ion-card ion-card-content {\n    padding-left: 0;\n    padding-right: 0;\n    padding-bottom: 0; }\n  ion-content ion-card ion-card-content ion-grid {\n      color: black;\n      margin: 0; }\n  ion-content ion-card ion-card-content ion-grid ion-row ion-col ion-img {\n        margin-left: 0;\n        height: 100px;\n        width: 90px; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) {\n        height: 30px;\n        border-width: 0.2px; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:first-child {\n          text-align: right; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:first-child ion-button {\n            height: 30px;\n            width: 90%;\n            float: left;\n            --color: white !important;\n            --border-radius: 1px; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:nth-child(2) {\n          text-align: left; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:nth-child(2) ion-button {\n            height: 30px;\n            width: 30%; }\n  ion-footer ion-button {\n  --color:white;\n  margin: 0;\n  width: 100%;\n  --border-radius: 0; }\n  .col-price {\n  padding: 0;\n  padding-left: 5px; }\n  .col-price p {\n    text-align: left;\n    margin-bottom: 4px;\n    font-size: 14px !important; }\n  .col-price p:first-child {\n      margin-bottom: 6px; }\n  .col-price p:nth-child(3) {\n      margin-bottom: 0; }\n  .col-price-ori {\n  padding-top: 2px;\n  padding-right: 0; }\n  .add-btn {\n  float: right;\n  --color: white !important; }\n  .para-del {\n  text-align: right;\n  font-size: 14px !important;\n  font-family: 'roboto-medium' !important; }\n  .para-del del {\n    float: left; }\n  .div-btn ion-button {\n  --color:black;\n  --border-radius:0px;\n  --color: white !important;\n  width: 25%;\n  height: 20px; }\n  .div-btn ion-button:first-child {\n    float: left; }\n  .div-btn ion-button:nth-child(3) {\n    float: right; }\n  .div-btn span {\n  position: absolute;\n  z-index: 1;\n  left: 49%;\n  top: 51px; }\n  .para-price-ori {\n  width: 100%;\n  text-align: end;\n  margin-top: -8px; }\n  .coupon-btn {\n  --color:white; }\n  .price-card {\n  color: black; }\n  .price-card ion-card-content {\n    padding-top: 0; }\n  .view-col {\n  padding-left: 0 !important; }\n  .sub-btn {\n  --color: black !important;\n  margin-top: 5px !important; }\n  .minus-para {\n  font-size: 30px !important;\n  margin-top: -5px !important;\n  font-family: 'roboto-medium' !important; }\n  .plus-para {\n  font-size: 20px !important;\n  font-family: 'roboto-medium' !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0lBU2dCLFlBQVksRUFBQTtFQVQ1QjtJQWNnQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUs1QjtFQUVRLGVBQWUsRUFBQTtFQUZ2QjtJQUtZLGtCQUFrQixFQUFBO0VBTDlCO01BT2MsU0FBUztNQUNULGdCQUFnQixFQUFBO0VBUjlCO01BV2Msb0JBQWdCLEVBQUE7RUFYOUI7TUFjYyxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixrQkFBa0IsRUFBQTtFQWpCaEM7TUFvQmMsZUFBZTtNQUNmLFdBQVc7TUFDWCxhQUFhLEVBQUE7RUF0QjNCO0VBNkJRLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTtFQTlCckM7RUFpQ1EsaUJBQWdCO0VBQ2hCLHNCQUFvQixFQUFBO0VBbEM1QjtFQXFDUSxlQUFlLEVBQUE7RUFyQ3ZCO0lBd0NnQixrQkFBa0IsRUFBQTtFQXhDbEM7TUEwQ29CLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUE7RUE1Q3RDO01BK0NvQixjQUFRO01BRVIsb0JBQWdCLEVBQUE7RUFqRHBDO01Bb0RvQixlQUFlO01BQ2YsNkJBQTZCO01BQzdCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsbUJBQW1CLEVBQUE7RUF4RHZDO01BMkRvQixlQUFlO01BQ2YsV0FBVztNQUNYLGFBQWEsRUFBQTtFQTdEakM7TUFnRW9CLDBCQUEwQjtNQUMxQix1Q0FBdUM7TUFDdkMsbUJBQW1CLEVBQUE7RUFsRXZDO0VBd0VZLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtFQXpFOUI7SUEyRWdCLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQTVFbkM7TUErRXdCLGVBQWU7TUFDZixhQUFZO01BQ1osNEJBQTRCO01BQzVCLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsdUJBQXVCO01BQ3ZCLGdCQUFnQixFQUFBO0VBckZ4QztJQTBGZ0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQTVGakM7TUE4Rm9CLFlBQVk7TUFDWixTQUFTLEVBQUE7RUEvRjdCO1FBbUdnQyxjQUFjO1FBQ2QsYUFBYTtRQUNiLFdBQVcsRUFBQTtFQXJHM0M7UUF5R3dCLFlBQVk7UUFDWixtQkFBbUIsRUFBQTtFQTFHM0M7VUE2R2dDLGlCQUFpQixFQUFBO0VBN0dqRDtZQStHb0MsWUFBWTtZQUNaLFVBQVU7WUFDVixXQUFXO1lBQ1gseUJBQVE7WUFDUixvQkFBZ0IsRUFBQTtFQW5IcEQ7VUF3SGdDLGdCQUFnQixFQUFBO0VBeEhoRDtZQTBIb0MsWUFBWTtZQUNaLFVBQVUsRUFBQTtFQVU5QztFQUdRLGFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFnQixFQUFBO0VBR3hCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQixFQUFBO0VBRnJCO0lBSVEsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEIsRUFBQTtFQU5sQztNQVFZLGtCQUFrQixFQUFBO0VBUjlCO01BV1ksZ0JBQWUsRUFBQTtFQUkzQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFQUVwQjtFQUNJLFlBQVk7RUFFWix5QkFBUSxFQUFBO0VBRVo7RUFDSSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHVDQUF1QyxFQUFBO0VBSDNDO0lBS1EsV0FBVyxFQUFBO0VBR25CO0VBRVEsYUFBUTtFQUdSLG1CQUFnQjtFQUNoQix5QkFBUTtFQUNSLFVBQVU7RUFDVixZQUFZLEVBQUE7RUFScEI7SUFVWSxXQUFXLEVBQUE7RUFWdkI7SUFhZ0IsWUFBWSxFQUFBO0VBYjVCO0VBaUJRLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVMsRUFBQTtFQUdqQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFFcEI7RUFFSSxhQUFRLEVBQUE7RUFFWjtFQUNJLFlBQVksRUFBQTtFQURoQjtJQUdRLGNBQWMsRUFBQTtFQUd0QjtFQUNJLDBCQUEwQixFQUFBO0VBRTlCO0VBRUkseUJBQVE7RUFDUiwwQkFBMEIsRUFBQTtFQUU5QjtFQUNJLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsdUNBQXVDLEVBQUE7RUFFM0M7RUFDSSwwQkFBMEI7RUFDMUIsdUNBQXVDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGl0bGV7XG4gICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICAuZ3JpZC1lbXB0eSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIHpvb206IDMuOTtcbiAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgfVxuICAgIC5ncmlke1xuICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoNXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLW1lZGl1bScgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNhcmR7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjJweDtcbiAgICAgICAgICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1tZWRpdW0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBpb24tZ3JpZHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMC4ycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1mb290ZXJ7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbn1cbi5jb2wtcHJpY2V7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwe1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDMpe1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowOyBcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgICBcbiAgICB9XG59XG4uY29sLXByaWNlLW9yaXtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uYWRkLWJ0bntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucGFyYS1kZWx7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJyAhaW1wb3J0YW50O1xuICAgIGRlbHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxufVxuLmRpdi1idG57XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1jb2xvcjpibGFjaztcbiAgICAgICAgLy8gLS1ib3JkZXItY29sb3I6YmxhY2s7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2sgO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpe1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzcGFue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGxlZnQ6IDQ5JTtcbiAgICAgICAgdG9wOiA1MXB4O1xuICAgIH1cbn1cbi5wYXJhLXByaWNlLW9yaXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbn1cbi5jb3Vwb24tYnRue1xuICAgIC8vIC0tYmFja2dyb3VuZDpibGFjaztcbiAgICAtLWNvbG9yOndoaXRlO1xufVxuLnByaWNlLWNhcmR7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbn1cbi52aWV3LWNvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5zdWItYnRue1xuICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuLm1pbnVzLXBhcmF7XG4gICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLTVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLW1lZGl1bScgIWltcG9ydGFudDtcbn1cbi5wbHVzLXBhcmF7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJyAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/cart/cart.page.ts":
/*!**************************************************!*\
  !*** ./src/app/yesgenie/Pages/cart/cart.page.ts ***!
  \**************************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../share.service */ "./src/app/share.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var CartPage = /** @class */ (function () {
    function CartPage(shared, config, nav, alertController, modalCtrl, router, route, services, menuCtrl, navCtrl, services1, toastCtrl, storage, applicationRef, formBuilder) {
        this.shared = shared;
        this.config = config;
        this.nav = nav;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.route = route;
        this.services = services;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.services1 = services1;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.applicationRef = applicationRef;
        this.formBuilder = formBuilder;
        this.TotalDiscount = 0;
        this.products = [];
        this.value = 0;
        this.translationListArray = [];
        this.orders = [{ subTotal: "100.00", discount: "0.00", total: "100.00" }];
        this.addQuantity = function (p) {
            if (p.stock_quantity == p.product_quantity)
                this.toast("Product Quantity is Limited!");
            else if (p.stock_quantity == null || p.stock_quantity > p.product_quantity) {
                p.product_quantity++;
                //  p.product_unit_price = p.product_unit_price/100 + parseFloat(p.product_unit_price)/100;
                p.product_total_price = p.product_total_price + parseFloat(p.product_unit_price);
                p.tax = p.tax + parseFloat(p.single_pro_Tax);
                // this.product_total_price = p.product_total_price + parseFloat(p.product_unit_price)
                // this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100;
                if (this.coupontype == "Percentage") {
                    if (this.TotalDiscount != 0) {
                        this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage / 100;
                        this.TotalDiscount = p.product_total_price * this.DiscountPercentage / 100;
                    }
                    else {
                        this.TotalDiscount = 0;
                        this.product_price_afterDiscount = this.product_total_price;
                    }
                }
                else if (this.coupontype == "Fixed") {
                    if (this.TotalDiscount != 0) {
                        this.product_price_afterDiscount = this.product_total_price - parseFloat(this.TotalDiscount);
                        this.TotalDiscount = this.TotalDiscount;
                    }
                    else {
                        this.TotalDiscount = 0;
                        this.product_price_afterDiscount = this.product_total_price;
                    }
                }
                this.updateCart();
            }
        };
        //============================================================================================  
        //function decreasing the quantity
        this.minusQuantity = function (p) {
            if (p.product_quantity != 1) {
                p.product_quantity--;
                //  p.product_unit_price = parseFloat(p.product_unit_price) * p.product_quantity;
                p.product_total_price = parseFloat(p.product_unit_price) * p.product_quantity;
                // this.TotalDiscount = p.product_total_price * this.DiscountPercentage/100;
                p.tax = parseFloat(p.single_pro_Tax) * p.product_quantity;
                if (this.coupontype == "Percentage") {
                    if (this.TotalDiscount != 0) {
                        // this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100;
                        this.TotalDiscount = p.product_total_price * this.DiscountPercentage / 100;
                    }
                    else {
                        this.TotalDiscount = 0;
                        //  this.product_price_afterDiscount = this.product_total_price;
                    }
                }
                if (this.coupontype == "Fixed") {
                    if (this.TotalDiscount != 0) {
                        // this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100;
                        this.TotalDiscount = this.TotalDiscount;
                    }
                    else {
                        this.TotalDiscount = 0;
                        //  this.product_price_afterDiscount = this.product_total_price;
                    }
                }
                this.updateCart();
            }
        };
    }
    CartPage.prototype.ionViewWillEnter = function () {
        this.updateCart();
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
    };
    CartPage.prototype.ngOnInit = function () {
        //  this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage/100
        this.codecoupon();
    };
    CartPage.prototype.Getcoupon = function () {
        var _this = this;
        var userData = 'coupon-code=' + this.couponcode.get('coupon').value;
        console.log(userData);
        this.services1.Getcoupon(userData).subscribe(function (result) {
            _this.responseData = result.response;
            if (_this.responseData.coupon == null) {
                _this.TotalDiscount = 0;
                _this.totalPrice();
                _this.presentToast('Invalid Coupon');
            }
            else {
                if (_this.responseData.coupon.discount_name == "Percentage") {
                    _this.coupontype = _this.responseData.coupon.discount_name;
                    _this.DiscountPercentage = _this.responseData.coupon.coupon_amount;
                    _this.TotalDiscount = _this.product_total_price * _this.DiscountPercentage / 100;
                    _this.product_price_afterDiscount = _this.product_total_price - parseFloat(_this.product_total_price) * _this.DiscountPercentage / 100;
                }
                else if (_this.responseData.coupon.discount_name == "Fixed") {
                    _this.coupontype = _this.responseData.coupon.discount_name;
                    _this.TotalDiscount = _this.responseData.coupon.coupon_amount * 100;
                    _this.product_price_afterDiscount = _this.product_total_price - parseFloat(_this.TotalDiscount);
                }
                console.log(_this.responseData);
                _this.presentToast('Coupon Applied Successfully');
            }
        }, function (error) {
        });
    };
    CartPage.prototype.codecoupon = function () {
        this.couponcode = this.formBuilder.group({
            coupon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])],
        });
    };
    CartPage.prototype.changingCart = function () {
        this.products = this.services1.cartProducts;
        console.log(this.products);
        this.storage.set('cartProducts', this.services1.cartProducts);
        this.services1.cartTotalItems();
        // this.shared.couponArray.forEach((value) => {
        //   this.products = this.couponProvider.apply(value, this.shared.cartProducts);
        // });
        this.totalPrice();
        this.applicationRef.tick();
    };
    CartPage.prototype.totalPrice = function () {
        var price = 0;
        var subPrice = 0;
        var totaltax = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var value = _a[_i];
            subPrice = subPrice + value.product_total_price;
            price = price + value.product_total_price;
            totaltax = totaltax + value.tax;
        }
        //  this.subtotal = subPrice;
        this.product_total_price = price;
        this.tax = totaltax;
        console.log(this.tax);
        if (this.coupontype == "Percentage") {
            if (this.TotalDiscount != 0) {
                this.product_price_afterDiscount = this.product_total_price - parseFloat(this.product_total_price) * this.DiscountPercentage / 100;
            }
            else {
                this.product_price_afterDiscount = this.product_total_price;
            }
        }
        else if (this.coupontype == "Fixed") {
            if (this.TotalDiscount != 0) {
                this.product_price_afterDiscount = this.product_total_price - parseFloat(this.TotalDiscount);
            }
            else {
                this.product_price_afterDiscount = this.product_total_price;
            }
        }
        else {
            this.product_price_afterDiscount = this.product_total_price;
        }
        // console.log(price);
    };
    CartPage.prototype.removeCart = function (id) {
        var _this = this;
        this.products.forEach(function (value, index) {
            if (value.product_id == id) {
                _this.products.splice(index, 1);
                console.log("removing" + id);
            }
        });
        this.services1.removeToCart(this.products);
        this.updateCart();
    };
    CartPage.prototype.updateCart = function () {
        console.log('update cart');
        this.changingCart();
    };
    CartPage.prototype.proceedToCheckOut = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.userdata == null || this.userdata == undefined) {
                    this.nav.navigateForward("bs-login");
                }
                else {
                    // <!-- 2.0 updates -->
                    this.storage.set('totalpriceafterdisc', this.product_price_afterDiscount);
                    this.storage.set('totaldiscount', this.TotalDiscount);
                    this.nav.navigateForward("bs-shipping-address");
                }
                return [2 /*return*/];
            });
        });
    };
    CartPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
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
    CartPage.prototype.toast = function (msg) {
        var _this = this;
        this.translateString(msg).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    CartPage.prototype.translateString = function (value) {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.translationListArray[value]);
        });
    };
    CartPage.prototype.goToProductDetail = function (id, catid) {
        this.router.navigate(['bs-product-detail', { id: id, catid: catid }]);
    };
    CartPage.prototype.openProductsPage = function () {
        this.nav.navigateForward("tabs/bs-home");
    };
    CartPage.prototype.openShopPage = function () {
        this.nav.navigateForward("bs-products");
    };
    CartPage.prototype.goToProductDetailPage = function () {
        this.nav.navigateForward("bs-product-detail");
    };
    CartPage.prototype.goToAddress = function () {
        this.nav.navigateForward("bs-shipping-address");
    };
    CartPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/yesgenie/Pages/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/yesgenie/Pages/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
            _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _share_service__WEBPACK_IMPORTED_MODULE_7__["ShareService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map