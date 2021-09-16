(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-address-pages-billing-address-billing-address-module"],{

/***/ "./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.module.ts ***!
  \****************************************************************************************/
/*! exports provided: BillingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressPageModule", function() { return BillingAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _billing_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./billing-address.page */ "./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







// For Translation Language

var routes = [
    {
        path: '',
        component: _billing_address_page__WEBPACK_IMPORTED_MODULE_6__["BillingAddressPage"]
    }
];
var BillingAddressPageModule = /** @class */ (function () {
    function BillingAddressPageModule() {
    }
    BillingAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_billing_address_page__WEBPACK_IMPORTED_MODULE_6__["BillingAddressPage"]]
        })
    ], BillingAddressPageModule);
    return BillingAddressPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.page.html":
/*!****************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goToShippingAddress()\">\n        <ion-icon slot=\"icon-only\" src='assets/back.svg'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\"> {{'Billing Address'| translate }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <form>\n    <ion-item>\n      <ion-label position=\"floating\">{{' Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_name\" value={{responseDatainfo?.username}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 1</ion-label>\n      <ion-input type=\"text\" name=\"address\" value={{responseDatainfo?.shipping_address_1}} required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 2</ion-label>\n      <ion-input type=\"text\" name=\"address2\" value={{responseDatainfo?.shipping_address_2}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Country'|translate}}</ion-label>\n      <ion-select value={{responseDatainfo?.shipping_country_id}} class=\"seloption ionselectborder\" (ionChange)=\"getallstate($event.detail.value)\">\n      <ion-select-option value=\"India\">India</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n       <ion-label position=\"floating\">{{'State'|translate}}</ion-label>\n       <ion-select value={{responseDatainfo?.shipping_state}} class=\"seloption ionselectborder\" (ionChange)=\"Citiesbystate($event.detail.value)\">\n       <ion-select-option value=\"Delhi\">Delhi</ion-select-option>\n       </ion-select>   \n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Place</ion-label>\n      <ion-input type=\"text\" name=\"shipping_city\" value={{responseDatainfo?.shipping_city}} ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Post code'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_postcode\" value={{responseDatainfo?.shipping_zip_code}} required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n      <ion-input type=\"email\" name=\"shipping_email\" value={{responseDatainfo?.shipping_email}} required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Phone'|translate}}</ion-label>\n      <ion-input type=\"number\" name=\"shipping_phone\" value={{responseDatainfo?.shipping_phone_number}} required></ion-input>\n    </ion-item>\n\n    <!-- <ion-item lines=\"none\" class=\"toggle-item\">\n      <ion-toggle style='--background-checked:var(--my-var)' slot=\"start\"></ion-toggle>\n      <ion-label class=\"label-para\">\n        <p>Same As Shpping Address</p>\n      </ion-label>\n    </ion-item> -->\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-button (click)=\"goToShippingMethod()\" expand=\"full\">\n    {{'Next'|translate}}\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-content p {\n  font-size: 20px;\n  text-align: center;\n  padding-top: 16px; }\n  ion-content form {\n  padding-left: 16px;\n  padding-right: 16px; }\n  ion-content form ion-item {\n    --padding-start: 0; }\n  ion-content form ion-item ion-label {\n      color: gray; }\n  ion-content form ion-item ion-label p {\n        font-size: 16px !important;\n        padding-top: 0 !important; }\n  ion-content form ion-item ion-toggle {\n      padding-right: 0;\n      --background-checked:  var(--ion-color-primary) !important;\n      --handle-background-checked:  var(--ion-color-primary) !important; }\n  ion-content form ion-item:last-child {\n      margin-top: 10px !important; }\n  ion-content .para-label {\n  color: black !important; }\n  ion-footer ion-button {\n  margin: 0;\n  --color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9hZGRyZXNzLXBhZ2VzL2JpbGxpbmctYWRkcmVzcy9iaWxsaW5nLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBSTNCO0VBRVEsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQUp6QjtFQU9RLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtFQVIzQjtJQVVZLGtCQUFnQixFQUFBO0VBVjVCO01BWWdCLFdBQVcsRUFBQTtFQVozQjtRQWNvQiwwQkFBMEI7UUFDMUIseUJBQXlCLEVBQUE7RUFmN0M7TUFtQmdCLGdCQUFnQjtNQUNoQiwwREFBcUI7TUFDckIsaUVBQTRCLEVBQUE7RUFyQjVDO01Bd0JnQiwyQkFBMkIsRUFBQTtFQXhCM0M7RUE2QlEsdUJBQXVCLEVBQUE7RUFHL0I7RUFFUSxTQUFTO0VBRVQsY0FBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvYWRkcmVzcy1wYWdlcy9iaWxsaW5nLWFkZHJlc3MvYmlsbGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWNvbnRlbnR7XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIH1cbiAgICBmb3Jte1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi10b2dnbGV7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFyYS1sYWJlbHtcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuaW9uLWZvb3RlcntcbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.page.ts ***!
  \**************************************************************************************/
/*! exports provided: BillingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressPage", function() { return BillingAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../select-country/select-country.page */ "./src/app/yesgenie/Pages/select-country/select-country.page.ts");
/* harmony import */ var _select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../select-zones/select-zones.page */ "./src/app/yesgenie/Pages/select-zones/select-zones.page.ts");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");










var BillingAddressPage = /** @class */ (function () {
    function BillingAddressPage(shared, modalCtrl, config, nav, elementRef, loadingController, router, route, services, menuCtrl, translate, toastCtrl) {
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.nav = nav;
        this.elementRef = elementRef;
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.services = services;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.itemColor = [];
        this.iconColorVar = "";
        this.billing = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        };
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
            name: '',
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
    }
    BillingAddressPage.prototype.ngOnInit = function () {
    };
    BillingAddressPage.prototype.selectCountryPage = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_3__["SelectCountryPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BillingAddressPage.prototype.selectZonePage = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_4__["SelectZonesPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BillingAddressPage.prototype.goToShippingAddress = function () {
        this.nav.navigateForward("bs-shipping-address");
    };
    BillingAddressPage.prototype.goToShippingMethod = function () {
        this.nav.navigateForward("bs-order");
    };
    BillingAddressPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    BillingAddressPage.prototype.ionViewWillEnter = function () {
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
        this.Personalinfo();
    };
    BillingAddressPage.prototype.Personalinfo = function () {
        var _this = this;
        var userData = 'token=' + this.token;
        console.log(userData);
        this.services.Getpersonalinfo(userData).subscribe(function (result) {
            _this.responseDatainfo = result.response[0];
            console.log(_this.responseDatainfo);
            if (_this.responseDatainfo.Status === 0) {
                _this.presentToast(_this.responseDatainfo.Message);
            }
            else {
                //  console.log(this.responseData);
            }
        }, function (error) {
        });
    };
    BillingAddressPage.prototype.presentToast = function (msg) {
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
    BillingAddressPage.prototype.getallstate = function (state) {
        var _this = this;
        this.services.StateByCountry(state).subscribe(function (result) {
            _this.responseData = result.response;
            if (_this.responseData.Status === 0) {
            }
            else {
                console.log(_this.responseData);
            }
        }, function (error) {
        });
    };
    BillingAddressPage.prototype.Citiesbystate = function (cit) {
        var _this = this;
        this.services.Citiesbystate(cit).subscribe(function (result) {
            _this.responseDataCity = result.response;
            if (_this.responseDataCity.Status === 0) {
            }
            else {
                console.log(_this.responseDataCity);
            }
        }, function (error) {
        });
    };
    BillingAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing-address',
            template: __webpack_require__(/*! ./billing-address.page.html */ "./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.page.html"),
            styles: [__webpack_require__(/*! ./billing-address.page.scss */ "./src/app/yesgenie/Pages/address-pages/billing-address/billing-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_9__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], BillingAddressPage);
    return BillingAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-address-pages-billing-address-billing-address-module.js.map