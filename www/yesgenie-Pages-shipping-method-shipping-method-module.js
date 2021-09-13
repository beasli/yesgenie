(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-shipping-method-shipping-method-module"],{

/***/ "./src/app/yesgenie/Pages/shipping-method/shipping-method.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/shipping-method/shipping-method.module.ts ***!
  \**************************************************************************/
/*! exports provided: ShippingMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingMethodPageModule", function() { return ShippingMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shipping_method_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipping-method.page */ "./src/app/yesgenie/Pages/shipping-method/shipping-method.page.ts");








var routes = [
    {
        path: '',
        component: _shipping_method_page__WEBPACK_IMPORTED_MODULE_7__["ShippingMethodPage"]
    }
];
var ShippingMethodPageModule = /** @class */ (function () {
    function ShippingMethodPageModule() {
    }
    ShippingMethodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shipping_method_page__WEBPACK_IMPORTED_MODULE_7__["ShippingMethodPage"]]
        })
    ], ShippingMethodPageModule);
    return ShippingMethodPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/shipping-method/shipping-method.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/shipping-method/shipping-method.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goToBillingAddress()\">\n          <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\">{{'Shipping Method'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n\n  <ion-list padding>\n    <ion-radio-group>\n      <ion-item lines=\"full\" *ngFor=\"let m of shippingMethod\">\n        <ion-label>{{m.title}}\n        </ion-label>\n        <ion-radio [value]=[m] (ionSelect)=\"setMethod(m)\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-button disabled=\"false\" expand=\"block\" (click)=\"proceedOrder()\">Next</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/shipping-method/shipping-method.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/shipping-method/shipping-method.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-content ion-list {\n  background: #fafafa; }\n  ion-content ion-list ion-item {\n    --background: #eee; }\n  ion-footer ion-button {\n  --color: white;\n  height: 45px;\n  margin: 0;\n  --border-radius: 0; }\n  ion-content span {\n  margin-right: 10px;\n  float: right;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvc2hpcHBpbmctbWV0aG9kL3NoaXBwaW5nLW1ldGhvZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFRLEVBQUE7RUFIaEI7SUFLWSxlQUFlLEVBQUE7RUFLM0I7RUFFUSxtQkFBbUIsRUFBQTtFQUYzQjtJQUlZLGtCQUFhLEVBQUE7RUFLekI7RUFHUSxjQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBZ0IsRUFBQTtFQUd4QjtFQUVRLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9zaGlwcGluZy1tZXRob2Qvc2hpcHBpbmctbWV0aG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICBpb24tbGlzdHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmlvbi1mb290ZXJ7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICBzcGFue1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGlvbi1yYWRpb3tcbiAgICAgICAgLy8gLS1jb2xvcjogYmxhY2s7XG4gICAgICAgIC8vIC0tY29sb3ItY2hlY2tlZDogYmxhY2s7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/shipping-method/shipping-method.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/shipping-method/shipping-method.page.ts ***!
  \************************************************************************/
/*! exports provided: ShippingMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingMethodPage", function() { return ShippingMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ShippingMethodPage = /** @class */ (function () {
    function ShippingMethodPage(menuCtrl, nav) {
        this.menuCtrl = menuCtrl;
        this.nav = nav;
        this.shippingMethod = [{ title: "Free Shipping", cost: "100" }];
    }
    ShippingMethodPage.prototype.ngOnInit = function () {
    };
    ShippingMethodPage.prototype.proceedOrder = function () {
        this.nav.navigateForward("bs-order");
    };
    ShippingMethodPage.prototype.goToBillingAddress = function () {
        this.nav.navigateForward("bs-billing-address");
    };
    ShippingMethodPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    ShippingMethodPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    ShippingMethodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping-method',
            template: __webpack_require__(/*! ./shipping-method.page.html */ "./src/app/yesgenie/Pages/shipping-method/shipping-method.page.html"),
            styles: [__webpack_require__(/*! ./shipping-method.page.scss */ "./src/app/yesgenie/Pages/shipping-method/shipping-method.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ShippingMethodPage);
    return ShippingMethodPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-shipping-method-shipping-method-module.js.map