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

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content .grid-empty {\n  margin-top: 50%; }\n  ion-content .grid-empty ion-row ion-col {\n    text-align: center; }\n  ion-content .grid-empty ion-row ion-col ion-icon {\n      zoom: 3.9;\n      color: lightgrey; }\n  ion-content .grid-empty ion-row ion-col ion-button {\n      --border-radius: 0px; }\n  ion-content .grid-empty ion-row ion-col h4 {\n      font-size: 16px;\n      font-weight: bold;\n      margin-top: 2px;\n      margin-bottom: 6px; }\n  ion-content .grid-empty ion-row ion-col h5 {\n      font-size: 14px;\n      color: gray;\n      margin-top: 0; }\n  ion-content p {\n  font-size: 14px;\n  font-family: 'roboto-regular'; }\n  ion-content ion-item {\n  --padding-start:0;\n  --inner-padding-end: 0; }\n  ion-content .grid {\n  margin-top: 50%; }\n  ion-content .grid ion-row ion-col {\n    text-align: center; }\n  ion-content .grid ion-row ion-col ion-img {\n      width: 35%;\n      margin-left: auto;\n      margin-right: auto; }\n  ion-content .grid ion-row ion-col ion-button {\n      --color: white;\n      --border-radius: 0px; }\n  ion-content .grid ion-row ion-col h4 {\n      font-size: 20px;\n      font-family: 'roboto-regular';\n      margin-top: 2px;\n      font-weight: bold;\n      margin-bottom: 10px; }\n  ion-content .grid ion-row ion-col h5 {\n      font-size: 14px;\n      color: gray;\n      margin-top: 0; }\n  ion-content .grid ion-row ion-col p {\n      font-size: 14px !important;\n      font-family: 'roboto-medium' !important;\n      margin-bottom: 10px; }\n  ion-content ion-card {\n  padding-top: 10px;\n  padding-left: 10px; }\n  ion-content ion-card ion-card-header {\n    height: 22px;\n    border-width: 0.2px; }\n  ion-content ion-card ion-card-header ion-card-subtitle h3 {\n      font-size: 18px;\n      margin-top: 0;\n      font-family: 'roboto-medium';\n      color: black;\n      white-space: pre-line;\n      text-overflow: ellipsis;\n      overflow: hidden; }\n  ion-content ion-card ion-card-content {\n    padding-left: 0;\n    padding-right: 0;\n    padding-bottom: 0; }\n  ion-content ion-card ion-card-content ion-grid {\n      color: black;\n      margin: 0; }\n  ion-content ion-card ion-card-content ion-grid ion-row ion-col ion-img {\n        margin-left: 0;\n        height: 100px;\n        width: 90px; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) {\n        height: 30px;\n        border-width: 0.2px; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:first-child {\n          text-align: right; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:first-child ion-button {\n            height: 30px;\n            width: 90%;\n            float: left;\n            --color: white !important;\n            --border-radius: 1px; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:nth-child(2) {\n          text-align: left; }\n  ion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:nth-child(2) ion-button {\n            height: 30px;\n            width: 30%; }\n  ion-footer ion-button {\n  --color:white;\n  margin: 0;\n  width: 100%;\n  --border-radius: 0; }\n  .col-price {\n  padding: 0;\n  padding-left: 5px; }\n  .col-price p {\n    text-align: left;\n    margin-bottom: 4px;\n    font-size: 14px !important; }\n  .col-price p:first-child {\n      margin-bottom: 6px; }\n  .col-price p:nth-child(3) {\n      margin-bottom: 0; }\n  .col-price-ori {\n  padding-top: 2px;\n  padding-right: 0; }\n  .add-btn {\n  float: right;\n  --color: white !important; }\n  .para-del {\n  text-align: right;\n  font-size: 14px !important;\n  font-family: 'roboto-medium' !important; }\n  .para-del del {\n    float: left; }\n  .div-btn ion-button {\n  --color:black;\n  --border-radius:0px;\n  --color: white !important;\n  width: 25%;\n  height: 20px; }\n  .div-btn ion-button:first-child {\n    float: left; }\n  .div-btn ion-button:nth-child(3) {\n    float: right; }\n  .div-btn span {\n  position: absolute;\n  z-index: 1;\n  left: 49%;\n  top: 51px; }\n  .para-price-ori {\n  width: 100%;\n  text-align: end;\n  margin-top: -8px; }\n  .coupon-btn {\n  --color:white; }\n  .price-card {\n  color: black; }\n  .price-card ion-card-content {\n    padding-top: 0; }\n  .view-col {\n  padding-left: 0 !important; }\n  .sub-btn {\n  --color: black !important;\n  margin-top: 5px !important; }\n  .minus-para {\n  font-size: 30px !important;\n  margin-top: -5px !important;\n  font-family: 'roboto-medium' !important; }\n  .plus-para {\n  font-size: 20px !important;\n  font-family: 'roboto-medium' !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGFBQVEsRUFBQTtFQUhoQjtJQUtZLGVBQWUsRUFBQTtFQUwzQjtJQVNnQixZQUFZLEVBQUE7RUFUNUI7SUFjZ0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFLNUI7RUFFUSxlQUFlLEVBQUE7RUFGdkI7SUFLWSxrQkFBa0IsRUFBQTtFQUw5QjtNQU9jLFNBQVM7TUFDVCxnQkFBZ0IsRUFBQTtFQVI5QjtNQVdjLG9CQUFnQixFQUFBO0VBWDlCO01BY2MsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7RUFqQmhDO01Bb0JjLGVBQWU7TUFDZixXQUFXO01BQ1gsYUFBYSxFQUFBO0VBdEIzQjtFQTZCUSxlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7RUE5QnJDO0VBaUNRLGlCQUFnQjtFQUNoQixzQkFBb0IsRUFBQTtFQWxDNUI7RUFxQ1EsZUFBZSxFQUFBO0VBckN2QjtJQXdDZ0Isa0JBQWtCLEVBQUE7RUF4Q2xDO01BMENvQixVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO0VBNUN0QztNQStDb0IsY0FBUTtNQUVSLG9CQUFnQixFQUFBO0VBakRwQztNQW9Eb0IsZUFBZTtNQUNmLDZCQUE2QjtNQUM3QixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG1CQUFtQixFQUFBO0VBeER2QztNQTJEb0IsZUFBZTtNQUNmLFdBQVc7TUFDWCxhQUFhLEVBQUE7RUE3RGpDO01BZ0VvQiwwQkFBMEI7TUFDMUIsdUNBQXVDO01BQ3ZDLG1CQUFtQixFQUFBO0VBbEV2QztFQXdFWSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUF6RTlCO0lBMkVnQixZQUFZO0lBQ1osbUJBQW1CLEVBQUE7RUE1RW5DO01BK0V3QixlQUFlO01BQ2YsYUFBWTtNQUNaLDRCQUE0QjtNQUM1QixZQUFZO01BQ1oscUJBQXFCO01BQ3JCLHVCQUF1QjtNQUN2QixnQkFBZ0IsRUFBQTtFQXJGeEM7SUEwRmdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUE1RmpDO01BOEZvQixZQUFZO01BQ1osU0FBUyxFQUFBO0VBL0Y3QjtRQW1HZ0MsY0FBYztRQUNkLGFBQWE7UUFDYixXQUFXLEVBQUE7RUFyRzNDO1FBeUd3QixZQUFZO1FBQ1osbUJBQW1CLEVBQUE7RUExRzNDO1VBNkdnQyxpQkFBaUIsRUFBQTtFQTdHakQ7WUErR29DLFlBQVk7WUFDWixVQUFVO1lBQ1YsV0FBVztZQUNYLHlCQUFRO1lBQ1Isb0JBQWdCLEVBQUE7RUFuSHBEO1VBd0hnQyxnQkFBZ0IsRUFBQTtFQXhIaEQ7WUEwSG9DLFlBQVk7WUFDWixVQUFVLEVBQUE7RUFVOUM7RUFHUSxhQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBZ0IsRUFBQTtFQUd4QjtFQUNJLFVBQVU7RUFDVixpQkFBaUIsRUFBQTtFQUZyQjtJQUlRLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMEJBQTBCLEVBQUE7RUFObEM7TUFRWSxrQkFBa0IsRUFBQTtFQVI5QjtNQVdZLGdCQUFlLEVBQUE7RUFJM0I7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSxZQUFZO0VBRVoseUJBQVEsRUFBQTtFQUVaO0VBQ0ksaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix1Q0FBdUMsRUFBQTtFQUgzQztJQUtRLFdBQVcsRUFBQTtFQUduQjtFQUVRLGFBQVE7RUFHUixtQkFBZ0I7RUFDaEIseUJBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWSxFQUFBO0VBUnBCO0lBVVksV0FBVyxFQUFBO0VBVnZCO0lBYWdCLFlBQVksRUFBQTtFQWI1QjtFQWlCUSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxTQUFTLEVBQUE7RUFHakI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0VBRXBCO0VBRUksYUFBUSxFQUFBO0VBRVo7RUFDSSxZQUFZLEVBQUE7RUFEaEI7SUFHUSxjQUFjLEVBQUE7RUFHdEI7RUFDSSwwQkFBMEIsRUFBQTtFQUU5QjtFQUVJLHlCQUFRO0VBQ1IsMEJBQTBCLEVBQUE7RUFFOUI7RUFDSSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHVDQUF1QyxFQUFBO0VBRTNDO0VBQ0ksMEJBQTBCO0VBQzFCLHVDQUF1QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgICAgIGlvbi1pbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbnN7XHJcbiAgICAgICAgICAgIGlvbi1iYWRnZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAuZ3JpZC1lbXB0eSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIHpvb206IDMuOTtcclxuICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDowO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZ3JpZHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgICAgICAgaW9uLXJvd3tcclxuICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGlvbi1pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tcmVndWxhcic7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjJweDtcclxuICAgICAgICAgICAgICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgaW9uLWdyaWR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBpb24tcm93e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMC4ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1mb290ZXJ7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG59XHJcbi5jb2wtcHJpY2V7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MDsgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG4uY29sLXByaWNlLW9yaXtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbi5hZGQtYnRue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ucGFyYS1kZWx7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tbWVkaXVtJyAhaW1wb3J0YW50O1xyXG4gICAgZGVse1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcbi5kaXYtYnRue1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAtLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgIC8vIC0tYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2sgO1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGxlZnQ6IDQ5JTtcclxuICAgICAgICB0b3A6IDUxcHg7XHJcbiAgICB9XHJcbn1cclxuLnBhcmEtcHJpY2Utb3Jpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcbi5jb3Vwb24tYnRue1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgLS1jb2xvcjp3aGl0ZTtcclxufVxyXG4ucHJpY2UtY2FyZHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbn1cclxuLnZpZXctY29se1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN1Yi1idG57XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1pbnVzLXBhcmF7XHJcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLW1lZGl1bScgIWltcG9ydGFudDtcclxufVxyXG4ucGx1cy1wYXJhe1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ3JvYm90by1tZWRpdW0nICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

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