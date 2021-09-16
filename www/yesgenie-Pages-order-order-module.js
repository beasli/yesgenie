(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-order-order-module"],{

/***/ "./src/app/yesgenie/Pages/order/order.module.ts":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/order/order.module.ts ***!
  \******************************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "./src/app/yesgenie/Pages/order/order.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]
    }
];
var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
        })
    ], OrderPageModule);
    return OrderPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/order/order.page.html":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/order/order.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"order-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goToShippingMethod()\">\n        <ion-icon class=\"back-icon\" slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\">\n      {{'Shipping Method'| translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"order-content\">\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Shipping Address'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"card-content-single\">\n      <p class=\"para-single-line\">\n        {{responseDatainfo?.shipping_address_1+', '+responseDatainfo?.shipping_city+', '+responseDatainfo?.shipping_first_name}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Billing Address'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"card-content-single\">\n      <p class=\"para-single-line\">\n        {{billingAddress?.shipping_address_1+', '+billingAddress?.shipping_city+', '+billingAddress?.shipping_first_name}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-card>\n    <ion-card-header>\n      <h4>{{'Shipping Method'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"card-content-single\">\n      <p class=\"para-single-line\">\n        Free shipping\n      </p>\n    </ion-card-content>\n  </ion-card> -->\n  <ion-card class=\"order-product\">\n    <ion-card-header>\n      <h4>{{'Products'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content *ngFor=\"let product of products\">\n      <ion-row class=\"row-product\">\n        <ion-col class=\"product-name\">\n          <h3>{{product.product_title}}\n          </h3>\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\" class=\"product-item\">\n        <ion-thumbnail slot=\"start\">\n          <img src=\"https://www.yesgenie.com/uploads/images/{{product.image}}\" />\n        </ion-thumbnail>\n        <ion-label class=\"label-product\">\n         \n          <ion-row>\n            <ion-col text-left size=\"6\">\n              <p>MRP:</p>\n            </ion-col>\n            <ion-col text-right size=\"6\" class=\"right-col\">\n              <p><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product.product_unit_price*1 /100*1 | number : '1.2-2'}}</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col text-left size=\"6\">\n              <p>Unit Price:</p>\n            </ion-col>\n            <ion-col text-right size=\"6\" class=\"right-col\">\n              <p><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product.product_price*1 /100*1 | number : '1.2-2'}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-left size=\"6\">\n              <p>{{'Quantity'|translate}}:</p>\n            </ion-col>\n            <ion-col text-right size=\"6\" class=\"right-col\">\n              <p>{{product.product_quantity}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-left size=\"6\">\n              <p>{{'Sub Total'|translate}}:</p>\n            </ion-col>\n            <ion-col text-right size=\"6\" class=\"right-col\">\n              <p><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product.product_total_price*1 /100*1 | number : '1.2-2'}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-left size=\"6\">\n              <strong>{{'Total' |translate}}:</strong>\n            </ion-col>\n            <ion-col text-right size=\"6\" class=\"right-col\">\n              <strong><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product.product_total_price*1 /100*1 | number : '1.2-2'}}</strong>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Sub Total'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row class=\"row-subtotal\">\n        <ion-col size=\"6\">\n          <p>\n            {{'Products Price'|translate}}:\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\" class=\"subtotal-right\">\n          <p>\n            <span class=\"woocommerce-Price-currencySymbol\">₹</span>{{product_total_price*1 /100*1 | number : '1.2-2'}}\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <p>\n            {{'Shipping Cost'|translate}}:\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\" class=\"subtotal-right\">\n          <p>\n            <span class=\"woocommerce-Price-currencySymbol\">₹</span>{{CalAllShipingcost*1 /100*1 | number : '1.2-2'}}\n          </p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <p>\n            Coupon Discount\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\" class=\"subtotal-right\">\n          <p>\n            <span class=\"woocommerce-Price-currencySymbol\">₹</span>{{discountPrice*1 /100*1 | number : '1.2-2'}}\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <strong>\n            {{'Total'|translate}}\n          </strong>\n        </ion-col>\n        <ion-col text-right size=\"6\" class=\"subtotal-right\">\n          <strong><span class=\"woocommerce-Price-currencySymbol\">₹</span>{{totalAfterDiscShipingFixed*1 /100*1 | number : '1.2-2'}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n  <!-- <ion-card padding >\n    <ion-card-header no-padding>\n      <ion-card-subtitle>\n        <h3>Pay by wallet</h3>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-input placeholder=\"Wallet\"></ion-input>\n        <ion-button class=\"coupon-btn\" slot=\"end\" class=\"btn\" type=\"submit\"> APPLY</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card> -->\n\n  <ion-row *ngIf=\"responseDatainfo?.wallet != 0\">\n    <ion-col size=\"1\" style=\"margin: 10px 10px 10px 10px;\">\n      <ion-checkbox [(ngModel)]=\"checkboxes\" (ionChange)=\"FillBilling(checkboxes)\"></ion-checkbox>\n    </ion-col>\n\n    <ion-col size=\"10\" style=\"margin: 0; font-size: 17px;\">\n      Wallet Balance <br>\n      Available Balance <span class=\"woocommerce-Price-currencySymbol\">₹</span>{{responseDatainfo?.wallet*1 /100*1}}\n    </ion-col>\n\n    </ion-row>\n  <!-- <ion-card>\n    <ion-card-header>\n      <h4>{{'Order Notes'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"card-disable\">\n      <p class=\"note-para\">\n        Note to the buyer\n      </p>\n    </ion-card-content>\n  </ion-card> -->\n\n  <ion-card *ngIf=\"totalAfterDiscShipingFixed != 0\">\n    <ion-card-header>\n      <h4>{{'Payment Method'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item lines=\"none\" *ngIf=\"totalAfterDiscShipingFixed != 0\">\n          <ion-label>{{'Select Payment Method'|translate}}</ion-label>\n          <ion-select (ionChange)=\"selectPayment($event.detail.value)\">\n            okText=\"{{'Ok'|translate}}\" cancelText=\"{{'Cancel'|translate}}\">\n            <span *ngFor=\"let p of paymentMethods\">\n              <ion-select-option [value]=\"p\">{{p}}</ion-select-option>\n            </span>\n          </ion-select>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"order-footer\">\n  <ion-button *ngIf=\"totalAfterDiscShipingFixed != 0\" color=\"secondary\" (click)=\"goToThankYouPage()\">\n    Continue\n  </ion-button>\n\n  <ion-button *ngIf=\"totalAfterDiscShipingFixed == 0\" color=\"secondary\" (click)=\"paywithwallet()\">\n    Continue\n  </ion-button>\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/order/order.page.scss":
/*!******************************************************!*\
  !*** ./src/app/yesgenie/Pages/order/order.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-header ion-toolbar {\n  --color:white; }\n  .order-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  .order-content ion-list {\n  background: white; }\n  .order-content strong {\n  font-weight: bold;\n  font-size: 14px !important; }\n  .order-content ion-col {\n  font-size: 12px; }\n  .order-content ion-thumbnail {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  margin-right: 5px !important;\n  height: 110px !important;\n  width: 70px !important; }\n  .order-content ion-card ion-card-header {\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: 0;\n  color: black;\n  background-color: #eee;\n  padding-top: 10px;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  padding-bottom: 10px !important; }\n  .order-content ion-card ion-card-header h4 {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    font-family: 'roboto-bold';\n    font-weight: bold; }\n  .order-content ion-card ion-card-content {\n  background-color: white;\n  padding-top: 5px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  padding-bottom: 0 !important;\n  font-size: 12px;\n  color: black; }\n  .order-content ion-card ion-card-content .card-disable {\n    color: gray !important; }\n  .order-content ion-card ion-card-content h3 {\n    font-size: 16px;\n    margin-bottom: -2px; }\n  .order-content ion-card ion-card-content h3 small {\n      font-size: 80%; }\n  .order-content ion-card ion-card-content .item {\n    --background: transparent; }\n  .order-content ion-card p {\n  font-family: 'roboto-regular';\n  font-size: 14px; }\n  .order-content .row-product {\n  border-width: 0.2px; }\n  .order-content .product-item {\n  --padding-start:0;\n  --inner-padding-end: 0; }\n  .order-content .product-name {\n  padding-bottom: 0 !important; }\n  .order-content .note-para {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n  color: #707070; }\n  .order-content .para-single-line {\n  margin-bottom: 10px !important; }\n  .order-content .card-content-single {\n  padding-top: 10px !important; }\n  .order-footer ion-button {\n  width: 100%;\n  color: white;\n  margin: 0;\n  --border-radius: 0; }\n  ion-alert .alert-wrapper.sc-ion-alert-md {\n  --background: white !important; }\n  .back-icon {\n  font-size: 16px !important; }\n  .row-subtotal ion-col {\n  padding-right: 0 !important; }\n  .right-col {\n  padding-right: 0 !important; }\n  .label-product {\n  margin-top: 0; }\n  .subtotal-right {\n  padding-right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9vcmRlci9vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNUSxhQUFRLEVBQUE7RUFOaEI7SUFHWSxlQUFlLEVBQUE7RUFTM0I7RUFFUSxpQkFBaUIsRUFBQTtFQUZ6QjtFQUtRLGlCQUFpQjtFQUNqQiwwQkFBMEIsRUFBQTtFQU5sQztFQVNRLGVBQWUsRUFBQTtFQVR2QjtFQVlRLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixzQkFBc0IsRUFBQTtFQWhCOUI7RUFvQlksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QiwrQkFBK0IsRUFBQTtFQTVCM0M7SUE4QmdCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixpQkFBaUIsRUFBQTtFQWxDakM7RUFzQ1ksdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsWUFBWSxFQUFBO0VBNUN4QjtJQThDZ0Isc0JBQXNCLEVBQUE7RUE5Q3RDO0lBaURnQixlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFsRG5DO01BcURnQixjQUFlLEVBQUE7RUFyRC9CO0lBeURnQix5QkFBYSxFQUFBO0VBekQ3QjtFQWdFWSw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBO0VBakUzQjtFQXFFUSxtQkFBbUIsRUFBQTtFQXJFM0I7RUF3RVEsaUJBQWdCO0VBQ2hCLHNCQUFvQixFQUFBO0VBekU1QjtFQTRFUSw0QkFBNEIsRUFBQTtFQTVFcEM7RUErRVEsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixjQUFjLEVBQUE7RUFqRnRCO0VBb0ZRLDhCQUE4QixFQUFBO0VBcEZ0QztFQXVGUSw0QkFBNEIsRUFBQTtFQUdwQztFQUVRLFdBQVc7RUFFWCxZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFnQixFQUFBO0VBSXhCO0VBRVEsOEJBQWEsRUFBQTtFQUdyQjtFQUNJLDBCQUEwQixFQUFBO0VBRTlCO0VBRVEsMkJBQTJCLEVBQUE7RUFHbkM7RUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtFQUNJLGFBQWEsRUFBQTtFQUVqQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgLS1jb2xvcjp3aGl0ZTtcbiAgICAgICAgLy8gaW9uLWljb257XG4gICAgICAgIC8vICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG4ub3JkZXItY29udGVudHtcbiAgICBpb24tbGlzdHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIHN0cm9uZ3tcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICBpb24tdGh1bWJuYWlse1xuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2FyZHtcbiAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHggO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1ib2xkJztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAuY2FyZC1kaXNhYmxle1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcblxuICAgICAgICAgICAgc21hbGx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MCUgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbXtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1zZWxlY3Qtb3B0aW9ue1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yb3ctcHJvZHVjdHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjJweDtcbiAgICB9XG4gICAgLnByb2R1Y3QtaXRlbXtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgfVxuICAgIC5wcm9kdWN0LW5hbWV7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5ub3RlLXBhcmF7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICB9XG4gICAgLnBhcmEtc2luZ2xlLWxpbmV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNhcmQtY29udGVudC1zaW5nbGV7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLm9yZGVyLWZvb3RlcntcbiAgICBpb24tYnV0dG9ue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgIH0gXG59XG5cbmlvbi1hbGVydHtcbiAgICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICB9XG59XG4uYmFjay1pY29ue1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuLnJvdy1zdWJ0b3RhbHtcbiAgICBpb24tY29se1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnJpZ2h0LWNvbHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4ubGFiZWwtcHJvZHVjdHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuLnN1YnRvdGFsLXJpZ2h0e1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/order/order.page.ts":
/*!****************************************************!*\
  !*** ./src/app/yesgenie/Pages/order/order.page.ts ***!
  \****************************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");










var OrderPage = /** @class */ (function () {
    function OrderPage(mdCtrl, services, menuCtrl, toastCtrl, shared, config, loadingController, nav, formBuilder, router, events, applicationRef, storage) {
        var _this = this;
        this.mdCtrl = mdCtrl;
        this.services = services;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.shared = shared;
        this.config = config;
        this.loadingController = loadingController;
        this.nav = nav;
        this.formBuilder = formBuilder;
        this.router = router;
        this.events = events;
        this.applicationRef = applicationRef;
        this.storage = storage;
        storage.get('totaldiscount').then(function (val) {
            _this.discountPrice = val;
            console.log(_this.discountPrice);
        });
        var billlingAdd = localStorage.getItem('BillingAddress');
        this.billingAddress = JSON.parse(billlingAdd);
        console.log(this.billingAddress);
    }
    // goToThankYouPage() {
    //   this.nav.navigateForward("bs-thank-you");
    // }
    OrderPage.prototype.ngOnInit = function () {
    };
    OrderPage.prototype.goToShippingMethod = function () {
        this.nav.navigateBack("bs-shipping-address");
    };
    OrderPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    OrderPage.prototype.ionViewWillEnter = function () {
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
        this.totalPrice();
        this.changingCart();
        this.Personalinfo();
    };
    OrderPage.prototype.selectPayment = function (PayMethod) {
        this.methodpay = PayMethod;
    };
    OrderPage.prototype.goToThankYouPage = function () {
        if (this.methodpay == 'Cash on delivery') {
            this.Productorder();
        }
        else if (this.methodpay == 'Razorpay') {
            this.payWithRazor();
        }
        else {
            this.presentToast('Please select Payment Method');
        }
    };
    OrderPage.prototype.totalPrice = function () {
        var _this = this;
        var price = 0;
        var subPrice = 0;
        var ShipingCost = 0;
        console.log(this.services.cartProducts);
        for (var _i = 0, _a = this.services.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            subPrice = subPrice + value.product_total_price;
            price = price + value.product_total_price;
            ShipingCost = ShipingCost + parseFloat(value.product_shipping_cost);
            console.log(ShipingCost);
        }
        this.CalAllShipingcost = ShipingCost;
        this.product_total_price = price.toFixed(2);
        // if(price < 100000) {
        //   this.CalAllShipingcost = 4000;
        //   this.product_total_price = price.toFixed(2);
        // } else {
        //   this.CalAllShipingcost = 0;
        //   this.product_total_price = price.toFixed(2);
        // }
        // this.totaltaxamount = totaltax.toFixed(2);
        setTimeout(function () {
            _this.storage.get('totalpriceafterdisc').then(function (val) {
                _this.CalAllPrice = val;
                _this.totalCartValue = _this.CalAllPrice;
                _this.totalAfterDiscShiping = parseFloat(_this.CalAllShipingcost) + parseFloat(_this.CalAllPrice);
                _this.totalAfterDiscShipingFixed = _this.totalAfterDiscShiping.toFixed(2);
                console.log(_this.CalAllPrice);
                if (_this.totalAfterDiscShipingFixed < 200000) {
                    _this.paymentMethods = ["Razorpay"];
                }
                else if (_this.totalAfterDiscShipingFixed >= 200000) {
                    _this.paymentMethods = ["Razorpay", "Cash on delivery"];
                }
                else {
                    _this.paymentMethods = [""];
                }
            });
        }, 1000);
        //  this.subtotal = subPrice;
        // this.CalAllPrice = parseFloat(this.CalAllPrice) + this.CalAllShipingcost;
        // console.log(price);
    };
    OrderPage.prototype.payWithRazor = function () {
        var _this = this;
        var options = {
            description: 'Welcome to Yes Genie',
            image: 'https://www.yesgenie.com/uploads/logo/logo_5ef719c54807c.png',
            currency: 'INR',
            key: 'rzp_live_7ylYejDIxSYzcD',
            amount: this.totalAfterDiscShiping,
            name: 'Yes Genie',
            prefill: {
                email: this.responseDatainfo.email,
                contact: this.responseDatainfo.phone_number,
                name: this.responseDatainfo.username
            },
            theme: {
                color: '#021841'
            },
            modal: {
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        var successCallback = function (payment_id) {
            //  alert('payment_id: ' + payment_id);
            _this.payid = payment_id;
            // var orderId = success.razorpay_order_id
            // var signature = success.razorpay_signature
            _this.Productorder();
            // this.storage.set('payment_success',true); // here, storage must be an instance variable of RazorpayCheckout
        };
        var cancelCallback = function (error) {
            alert(error.description);
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    OrderPage.prototype.Paybyrazorpay = function () {
        var _this = this;
        var userData = 'token=' + this.token + '&payment_method=' + this.methodpay + '&payment_id=' + this.payid + '&order_id=' + this.orderId + '&currency=' + 'INR' + '&payment_amount=' + this.totalAfterDiscShipingFixed + '&payment_status=' + '1';
        console.log(userData);
        this.services.Paybyrazorpay(userData).subscribe(function (result) {
            _this.responseData1 = result.response;
            if (_this.responseData1.status == 0) {
                _this.presentToast(_this.responseData1.Message);
            }
            else {
                console.log(_this.responseData1);
                // this.presentToast('User successfully registered');
                // this.events.publish("updateSideMenu");
                _this.services.emptyCart();
                _this.presentToast('Your order has been placed successfully');
                _this.nav.navigateForward("bs-thank-you");
            }
        }, function (error) {
        });
    };
    OrderPage.prototype.paywithwallet = function () {
        this.methodpay = 'pay_on_wallet';
        this.Productorder();
    };
    OrderPage.prototype.Sendsmsandemail = function () {
        var _this = this;
        var userData = 'token=' + this.token;
        console.log(userData);
        this.services.Sendsmsandemail(userData).subscribe(function (result) {
            _this.responseSendSMSMail = result.response;
            console.log();
        }, function (error) {
        });
    };
    OrderPage.prototype.Productorder = function () {
        var _this = this;
        if (this.checkboxes == false) {
            this.wallet_amount = 0;
        }
        var userData = 'token=' + this.token + '&price_subtotal=' + this.product_total_price + '&price_shipping=' + this.CalAllShipingcost + '&price_total=' + this.totalAfterDiscShipingFixed + '&price_currency=' + 'INR' + '&payment_method=' + this.methodpay + '&wallet=' + this.responseDatainfo.wallet + '&paid_by_wallet=' + this.wallet_amount + '&coupon_amount=' + this.discountPrice + '&tax_type=' + ''
            + '&shipping_first_name=' + this.shipping_first_name + '&shipping_email=' + this.shipping_email + '&shipping_phone_number=' + this.shipping_phone_number + '&shipping_address_1=' + this.shipping_address_1 + '&shipping_address_2=' + this.shipping_address_2 + '&shipping_country_id=' + this.shipping_country_id + '&shipping_state=' + this.shipping_state + '&shipping_city=' + this.shipping_city
            + '&shipping_zip_code=' + this.shipping_zip_code + '&billing_first_name=' + this.billingAddress.shipping_first_name + '&billing_email=' + this.billingAddress.shipping_email + '&billing_phone_number=' + this.billingAddress.shipping_phone_number + '&billing_address_1=' + this.billingAddress.shipping_address_1 + '&billing_address_2=' + this.billingAddress.shipping_address_2 + '&billing_country=' + this.billingAddress.shipping_country_id + '&billing_state=' + this.billingAddress.shipping_state
            + '&billing_city=' + this.billingAddress.shipping_city + '&billing_zip_code=' + this.billingAddress.shipping_zip_code + '&shipping_is_billing=' + '0' + '&product_data=' + JSON.stringify(this.products);
        console.log(userData);
        this.services.Productorder(userData).subscribe(function (result) {
            _this.responseData1 = result.response;
            if (_this.responseData1.status == 0) {
                _this.presentToast(_this.responseData1.Message);
            }
            else {
                console.log(_this.responseData1);
                // this.presentToast('User successfully registered');
                // this.events.publish("updateSideMenu");
                _this.orderId = _this.responseData1.order_number;
                if (_this.methodpay == 'Razorpay') {
                    _this.Paybyrazorpay();
                }
                _this.services.emptyCart();
                _this.presentToast('Your order has been placed successfully');
                _this.Sendsmsandemail();
                _this.nav.navigateForward("bs-thank-you");
            }
        }, function (error) {
        });
    };
    OrderPage.prototype.ProUpdate = function () {
        this.proorder = this.formBuilder.group({
            shipping_first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])]
        });
    };
    OrderPage.prototype.changingCart = function () {
        this.products = this.services.cartProducts;
        console.log(this.products);
        this.applicationRef.tick();
    };
    // shipping_last_name: any;
    // shipping_last_name: any;
    // shipping_last_name: any;
    // shipping_last_name: any;
    OrderPage.prototype.Personalinfo = function () {
        var _this = this;
        var userData = 'token=' + this.token;
        console.log(userData);
        this.services.Getpersonalinfo(userData).subscribe(function (result) {
            _this.responseDatainfo = result.response[0];
            if (_this.responseDatainfo.Status === 0) {
                _this.presentToast(_this.responseDatainfo.Message);
            }
            else {
                console.log(_this.responseDatainfo);
                _this.shipping_first_name = _this.responseDatainfo.shipping_first_name;
                _this.shipping_last_name = _this.responseDatainfo.shipping_last_name;
                _this.shipping_address_1 = _this.responseDatainfo.shipping_address_1;
                _this.shipping_address_2 = _this.responseDatainfo.shipping_address_2;
                _this.shipping_city = _this.responseDatainfo.shipping_city;
                _this.shipping_country_id = _this.responseDatainfo.shipping_country_id;
                _this.shipping_email = _this.responseDatainfo.shipping_email;
                _this.shipping_phone_number = _this.responseDatainfo.shipping_phone_number;
                _this.shipping_zip_code = _this.responseDatainfo.shipping_zip_code;
                _this.shipping_state = _this.responseDatainfo.shipping_state;
                _this.wallet_amount = _this.responseDatainfo.wallet;
                // this.shipping_first_name = this.responseDatainfo.shipping_first_name;
            }
        }, function (error) {
        });
    };
    OrderPage.prototype.FillBilling = function (f) {
        if (f == true) {
            if (this.totalAfterDiscShiping <= this.responseDatainfo.wallet) {
                this.wallet_amount = parseFloat(this.totalAfterDiscShipingFixed);
                this.totalAfterDiscShipingFixed = 0;
                console.log(this.wallet_amount);
            }
            else {
                this.totalAfterDiscShipingFixed = parseFloat(this.totalAfterDiscShipingFixed) - parseFloat(this.wallet_amount);
                this.wallet_amount = this.wallet_amount;
                console.log(this.wallet_amount);
            }
        }
        else {
            if (this.totalAfterDiscShipingFixed == 0) {
                this.totalPrice();
                this.wallet_amount = this.responseDatainfo.wallet;
                console.log(this.wallet_amount);
            }
            else {
                this.totalAfterDiscShipingFixed = parseFloat(this.totalAfterDiscShipingFixed) + parseFloat(this.wallet_amount);
                console.log(this.wallet_amount);
            }
        }
    };
    OrderPage.prototype.ConvertToInt = function (val) {
        return val.toFixed(2);
    };
    OrderPage.prototype.presentToast = function (msg) {
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
    OrderPage.prototype.dismiss = function () {
        this.mdCtrl.dismiss();
    };
    OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.page.html */ "./src/app/yesgenie/Pages/order/order.page.html"),
            styles: [__webpack_require__(/*! ./order.page.scss */ "./src/app/yesgenie/Pages/order/order.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], OrderPage);
    return OrderPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-order-order-module.js.map