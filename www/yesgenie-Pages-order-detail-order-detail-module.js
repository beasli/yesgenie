(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-order-detail-order-detail-module"],{

/***/ "./src/app/yesgenie/Pages/order-detail/order-detail.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/order-detail/order-detail.module.ts ***!
  \********************************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/yesgenie/Pages/order-detail/order-detail.page.ts");








var routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_7__["OrderDetailPage"]
    }
];
var OrderDetailPageModule = /** @class */ (function () {
    function OrderDetailPageModule() {
    }
    OrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_7__["OrderDetailPage"]]
        })
    ], OrderDetailPageModule);
    return OrderDetailPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/order-detail/order-detail.page.html":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/order-detail/order-detail.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goToMyOrder()\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\">\n      {{'Order Detail'| translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Shipping Address'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"card-content-single\">\n      <p class=\"para-single-line\">\n       {{ShippingDetails?.shipping_address_1}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Billing Address'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"card-content-single\">\n      <p class=\"para-single-line\">\n        {{ShippingDetails?.billing_address_1}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Shipping Method'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <p *ngIf=\"orderdetalis?.price_shipping == 0\" class=\"para-single-line\">\n        Free shipping\n      </p>\n      <p *ngIf=\"orderdetalis?.price_shipping != 0\" class=\"para-single-line\">\n        Paid\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"order-product\">\n    <ion-card-header>\n      <h4>{{'Products'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content *ngFor=\"let product of OrderProducts\">\n      <ion-row class=\"row-product\">\n        <ion-col class=\"product-name\">\n          <h3>{{product.product_title}}\n          </h3>\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"none\" class=\"product-item\">\n        <ion-thumbnail slot=\"start\">\n          <img src=\"https://www.yesgenie.com/uploads/images/{{product.image_default}}\" />\n        </ion-thumbnail>\n        <ion-label>\n          <ion-row>\n            <ion-col text-left size=\"6\">\n              <p>{{'Price' |translate}}:</p>\n            </ion-col>\n            <ion-col text-right size=\"6\">\n              <p>{{product.product_sale_price*1 /100*1}} Rs</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-left size=\"6\">\n              <p>{{'Quantity'|translate}}:</p>\n            </ion-col>\n            <ion-col text-right size=\"6\">\n              <p>{{product.product_quantity}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-left size=\"6\">\n              <p>{{'Sub Total'|translate}}:</p>\n            </ion-col>\n            <ion-col text-right size=\"6\">\n              <p>{{product.product_sale_price*1 /100*1}} Rs</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-left size=\"6\">\n              <strong>{{'Total' |translate}}:</strong>\n            </ion-col>\n            <ion-col text-right size=\"6\">\n              <strong>{{product.product_total_price*1 /100*1}} Rs</strong>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Sub Total'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\" class=\"subtotal-left\">\n          <p>\n            {{'Products Price'|translate}}:\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\">\n          <p>\n            {{orderdetalis?.price_subtotal*1 /100*1}} Rs\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"subtotal-left\">\n          <p>\n            {{'Shipping Cost'|translate}}:\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\">\n          <p>\n            {{orderdetalis?.price_shipping*1 /100*1}} Rs\n          </p>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col size=\"6\" class=\"subtotal-left\">\n          <p>\n            {{'Tax'|translate}}\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\">\n          <p>\n            $0.00\n          </p>\n        </ion-col>\n      </ion-row> -->\n      <!-- <ion-row>\n        <ion-col size=\"6\" class=\"subtotal-left\">\n          <p>\n            {{'Discount'|translate}}\n          </p>\n        </ion-col>\n        <ion-col text-right size=\"6\">\n          <p>\n            $0.00\n          </p>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col size=\"6\" class=\"subtotal-left\">\n          <strong>\n            {{'Total'|translate}}\n          </strong>\n        </ion-col>\n        <ion-col text-right size=\"6\">\n          <strong>{{orderdetalis?.price_total*1 /100*1}} Rs</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Payment Method'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item lines=\"none\" class=\"select-item\">\n          <ion-label color=\"dark\">{{'Select Payment Method'|translate}}</ion-label>\n          <ion-select value=\"{{orderdetalis?.payment_method}}\"> \n            okText=\"{{'Ok'|translate}}\" cancelText=\"{{'Cancel'|translate}}\">\n              <ion-select-option value=\"Cash On Delivery\">Cash On Delivery</ion-select-option>\n              <ion-select-option value=\"Direct bank transfer\">Direct bank transfer</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/order-detail/order-detail.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/order-detail/order-detail.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-content ion-item {\n  --inner-padding-end:0; }\n  ion-content ion-list {\n  background: white; }\n  ion-content strong {\n  font-weight: bold;\n  font-size: 14px !important; }\n  ion-content ion-col {\n  font-size: 12px; }\n  ion-content ion-thumbnail {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  margin-right: 5px !important;\n  height: 110px !important;\n  width: 70px !important; }\n  ion-content ion-card ion-card-header {\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: 0;\n  color: black;\n  background-color: #eee;\n  padding-top: 10px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  padding-bottom: 10px !important; }\n  ion-content ion-card ion-card-header h4 {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    font-family: 'roboto-bold';\n    font-weight: bold; }\n  ion-content ion-card ion-card-content {\n  background-color: white;\n  padding-top: 5px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  padding-bottom: 0 !important;\n  font-size: 12px;\n  color: black; }\n  ion-content ion-card ion-card-content .card-disable {\n    color: gray !important; }\n  ion-content ion-card ion-card-content h3 {\n    font-size: 16px;\n    margin-bottom: -2px; }\n  ion-content ion-card ion-card-content h3 small {\n      font-size: 80%; }\n  ion-content ion-card ion-card-content .item {\n    --background: transparent; }\n  ion-content ion-card ion-select-option {\n  color: black; }\n  ion-content ion-card p {\n  font-family: 'roboto-regular';\n  font-size: 14px; }\n  ion-content .row-product {\n  border-width: 0.2px; }\n  ion-content .product-item {\n  --padding-start:0; }\n  ion-content .product-name {\n  padding-bottom: 0 !important; }\n  ion-content .note-para {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n  color: #707070; }\n  ion-content .para-single-line {\n  margin-bottom: 10px !important; }\n  ion-content .card-content-single {\n  padding-top: 10px !important; }\n  .subtotal-left {\n  padding-left: 0; }\n  .select-item {\n  --padding-start:0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvb3JkZXItZGV0YWlsL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFRLEVBQUE7RUFIaEI7SUFLWSxlQUFlLEVBQUE7RUFJM0I7RUFFUSxxQkFBb0IsRUFBQTtFQUY1QjtFQUtRLGlCQUFpQixFQUFBO0VBTHpCO0VBUVEsaUJBQWlCO0VBQ2pCLDBCQUEwQixFQUFBO0VBVGxDO0VBWVEsZUFBZSxFQUFBO0VBWnZCO0VBZVEsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHNCQUFzQixFQUFBO0VBbkI5QjtFQXVCWSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBO0VBL0IzQztJQWlDZ0IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGlCQUFpQixFQUFBO0VBckNqQztFQXlDWSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixZQUFZLEVBQUE7RUEvQ3hCO0lBaURnQixzQkFBc0IsRUFBQTtFQWpEdEM7SUFvRGdCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQXJEbkM7TUF3RGdCLGNBQWUsRUFBQTtFQXhEL0I7SUE0RGdCLHlCQUFhLEVBQUE7RUE1RDdCO0VBZ0VZLFlBQVksRUFBQTtFQWhFeEI7RUFtRVksNkJBQTZCO0VBQzdCLGVBQWUsRUFBQTtFQXBFM0I7RUF3RVEsbUJBQW1CLEVBQUE7RUF4RTNCO0VBMkVRLGlCQUFnQixFQUFBO0VBM0V4QjtFQThFUSw0QkFBNEIsRUFBQTtFQTlFcEM7RUFpRlEsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixjQUFjLEVBQUE7RUFuRnRCO0VBc0ZRLDhCQUE4QixFQUFBO0VBdEZ0QztFQXlGUSw0QkFBNEIsRUFBQTtFQUdwQztFQUNJLGVBQWUsRUFBQTtFQUVuQjtFQUNJLGlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvb3JkZXItZGV0YWlsL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIGlvbi1pdGVte1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOjA7XG4gICAgfVxuICAgIGlvbi1saXN0e1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gICAgc3Ryb25ne1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1jb2wge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIGlvbi10aHVtYm5haWx7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1jYXJke1xuICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1ib2xkJztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAuY2FyZC1kaXNhYmxle1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcblxuICAgICAgICAgICAgc21hbGx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MCUgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbXtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1zZWxlY3Qtb3B0aW9ue1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucm93LXByb2R1Y3R7XG4gICAgICAgIGJvcmRlci13aWR0aDogMC4ycHg7XG4gICAgfVxuICAgIC5wcm9kdWN0LWl0ZW17XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDowO1xuICAgIH1cbiAgICAucHJvZHVjdC1uYW1le1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubm90ZS1wYXJhe1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgfVxuICAgIC5wYXJhLXNpbmdsZS1saW5le1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jYXJkLWNvbnRlbnQtc2luZ2xle1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5zdWJ0b3RhbC1sZWZ0e1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cbi5zZWxlY3QtaXRlbXtcbiAgICAtLXBhZGRpbmctc3RhcnQ6MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/order-detail/order-detail.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/yesgenie/Pages/order-detail/order-detail.page.ts ***!
  \******************************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var OrderDetailPage = /** @class */ (function () {
    function OrderDetailPage(route, mdCtrl, services, menuCtrl, toastCtrl, shared, config, loadingController, nav, formBuilder, router, events) {
        this.route = route;
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
        this.order = [
            { name: "Straight Long Coat", price: "USD 100.00", quantity: "1", total: "USD 100.00", img: "assets/template-themes/becrux/images/item-images/26.jpg" },
        ];
        this.paymentMethods = ["Direct bank transfer", "Cash on delivery"];
        this.orders = [{ shipping_tax: "USD 0.00", shipping_total: "USD 0.00", discount_total: "USD 0.00", total: "USD 188.00" }];
        this.product = [{ name: "Straight Long Coat", price: "95.00", quantity: "1", subtotal: "95.00", total: "95.00", img: "assets/template-themes/becrux/images/item-images/26.jpg" }];
    }
    OrderDetailPage.prototype.ngOnInit = function () {
    };
    OrderDetailPage.prototype.goToMyOrder = function () {
        this.nav.navigateForward("bs-my-orders");
    };
    OrderDetailPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    OrderDetailPage.prototype.ionViewWillEnter = function () {
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
        this.Id = this.route.snapshot.paramMap.get('id');
        console.log(JSON.parse(this.Id));
        this.Getorderdetails();
    };
    OrderDetailPage.prototype.Getorderdetails = function () {
        var _this = this;
        var userData = 'token=' + this.token + '&order_number=' + this.Id;
        console.log(userData);
        this.services.Getorderdetails(userData).subscribe(function (result) {
            _this.responseData = result.response;
            //  console.log(this.responseData);
            if (_this.responseData.Status == 0) {
                _this.presentToast(_this.responseData.Message);
            }
            else {
                _this.orderdetalis = _this.responseData.order;
                _this.OrderProducts = _this.responseData.order_products;
                _this.ShippingDetails = _this.responseData.shipping_details;
                console.log(_this.responseData);
            }
        }, function (error) {
        });
    };
    OrderDetailPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderDetailPage.prototype.dismiss = function () {
        this.mdCtrl.dismiss();
    };
    OrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.page.html */ "./src/app/yesgenie/Pages/order-detail/order-detail.page.html"),
            styles: [__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/yesgenie/Pages/order-detail/order-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-order-detail-order-detail-module.js.map