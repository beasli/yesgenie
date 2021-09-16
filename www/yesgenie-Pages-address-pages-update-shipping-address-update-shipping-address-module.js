(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-address-pages-update-shipping-address-update-shipping-address-module"],{

/***/ "./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: UpdateShippingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateShippingAddressPageModule", function() { return UpdateShippingAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-shipping-address.page */ "./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.page.ts");







var routes = [
    {
        path: '',
        component: _update_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["UpdateShippingAddressPage"]
    }
];
var UpdateShippingAddressPageModule = /** @class */ (function () {
    function UpdateShippingAddressPageModule() {
    }
    UpdateShippingAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_update_shipping_address_page__WEBPACK_IMPORTED_MODULE_6__["UpdateShippingAddressPage"]]
        })
    ], UpdateShippingAddressPageModule);
    return UpdateShippingAddressPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.page.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" routerLink=\"/multiple-shipping-address\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"ecom-title\">Update Shipping Address</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon class=\"cart-badge\" name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n\n  <form class=\"form\" [formGroup]=\"updatePro\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Address Location</ion-label>\n      <ion-input formControlName=\"address_detail\" type=\"text\" value={{responseDatainfo?.address_detail}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input  formControlName=\"shipping_first_name\" type=\"text\" value={{responseDatainfo?.username}}></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input formControlName=\"shipping_last_name\" value=\"\" type=\"text\" name=\"shipping_last_name\"></ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"shipping_email\"  type=\"text\" value={{responseDatainfo?.email}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Phone Number</ion-label>\n      <ion-input formControlName=\"shipping_phone_number\" type=\"Number\" value={{responseDatainfo?.phone_number}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Address 1</ion-label>\n      <ion-input formControlName=\"shipping_address_1\" type=\"text\" value={{responseDatainfo?.shipping_address_1}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Address 2 (Optional)</ion-label>\n      <ion-input formControlName=\"shipping_address_2\" type=\"text\" value={{responseDatainfo?.shipping_address_2}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Country</ion-label>\n      <!-- <ion-input formControlName=\"shipping_country_id\" type=\"text\" name=\"shipping_country_id\" value=\"India\" readonly></ion-input> -->\n      <ion-select formControlName=\"shipping_country_id\" class=\"seloption ionselectborder\" value={{responseDatainfo?.shipping_country_id}}>\n        <ion-select-option value=\"India\">India</ion-select-option>\n       </ion-select> \n    </ion-item>\n\n\n      <ion-item>\n        <ion-label position=\"floating\">State</ion-label>\n       <!-- <ion-input formControlName=\"shipping_state\" type=\"text\" value={{responseDatainfo?.shipping_state}} ></ion-input> -->\n  \n       <ion-select formControlName=\"shipping_state\"  class=\"seloption ionselectborder\" value={{responseDatainfo?.shipping_state}}>\n         <ion-select-option value=\"delhi\">Delhi</ion-select-option>\n         <ion-select-option value=\"haryana\">Haryana</ion-select-option>\n         <ion-select-option value=\"UP\">Uttar Pradesh</ion-select-option>\n       </ion-select> \n          </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Place</ion-label>\n      \n       <ion-input formControlName=\"shipping_city\" type=\"text\" value={{responseDatainfo?.shipping_city}}></ion-input>\n\n       </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Zip Code</ion-label>\n      <ion-input formControlName=\"shipping_zip_code\" type=\"Number\" name=\"shipping_zip_code\" value={{responseDatainfo?.shipping_zip_code}}></ion-input>\n    </ion-item>\n    \n  </form>\n  <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!updatePro.valid\" (click)=\"Updatemultipleshippingaddress()\">\n    Save Changes\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.page.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.page.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content p {\n  font-size: 20px;\n  text-align: center;\n  margin-top: 16px !important;\n  margin-bottom: 10px !important; }\n  ion-content form ion-item ion-label {\n  color: gray; }\n  ion-content ion-button {\n  --color: white;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9hZGRyZXNzLXBhZ2VzL3VwZGF0ZS1zaGlwcGluZy1hZGRyZXNzL3VwZGF0ZS1zaGlwcGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGFBQVEsRUFBQTtFQUhoQjtJQUtZLGVBQWUsRUFBQTtFQUwzQjtJQVNnQixZQUFZLEVBQUE7RUFUNUI7SUFjZ0IsZUFBZSxFQUFBO0VBZC9CO0lBaUJnQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTtFQUs1QjtFQUVRLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLDhCQUE4QixFQUFBO0VBTHRDO0VBVWdCLFdBQVcsRUFBQTtFQVYzQjtFQWdCUSxjQUFRO0VBQ1IsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvYWRkcmVzcy1wYWdlcy91cGRhdGUtc2hpcHBpbmctYWRkcmVzcy91cGRhdGUtc2hpcHBpbmctYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJhZGdle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDsgICAgICAgXG4gICAgfVxuICAgIGZvcm17XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.page.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.page.ts ***!
  \******************************************************************************************************/
/*! exports provided: UpdateShippingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateShippingAddressPage", function() { return UpdateShippingAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var UpdateShippingAddressPage = /** @class */ (function () {
    function UpdateShippingAddressPage(loadingController, router, route, services, nav, menuCtrl, shared, config, translate, formBuilder, toastCtrl) {
        // setTimeout(()=>{                    
        //   this.ProUpdate();
        // }, 500);
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.services = services;
        this.nav = nav;
        this.menuCtrl = menuCtrl;
        this.shared = shared;
        this.config = config;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
        // this.Personalinfo();
    }
    UpdateShippingAddressPage.prototype.ngOnInit = function () {
        this.ProUpdate();
    };
    UpdateShippingAddressPage.prototype.ionViewWillEnter = function () {
        this.Id = this.route.snapshot.paramMap.get('id');
        console.log(JSON.parse(this.Id));
        //  this.subcategory();
        this.Getshippingaddressbyid(this.Id);
    };
    UpdateShippingAddressPage.prototype.Getshippingaddressbyid = function (id) {
        var _this = this;
        var userData = 'token=' + this.token + '&id=' + id;
        console.log(userData);
        this.services.Getshippingaddressbyid(userData).subscribe(function (result) {
            _this.responseDatainfo = result.response.shipping_address[0];
            //   this.resMultipleAdd = this.responseAddress.response.shipping_address;
            console.log(_this.responseDatainfo);
        }, function (error) {
        });
    };
    UpdateShippingAddressPage.prototype.Updatemultipleshippingaddress = function () {
        var _this = this;
        var userData = 'token=' + this.token + '&id=' + this.Id + '&address_detail=' + this.updatePro.get('address_detail').value + '&shipping_first_name=' + this.updatePro.get('shipping_first_name').value + '&shipping_email=' + this.updatePro.get('shipping_email').value
            + '&shipping_phone_number=' + this.updatePro.get('shipping_phone_number').value + '&shipping_address_1=' + this.updatePro.get('shipping_address_1').value + '&shipping_address_2=' + this.updatePro.get('shipping_address_2').value
            + '&shipping_country_id=' + this.updatePro.get('shipping_country_id').value + '&shipping_state=' + this.updatePro.get('shipping_state').value + '&shipping_city=' + this.updatePro.get('shipping_city').value + '&shipping_zip_code=' + this.updatePro.get('shipping_zip_code').value;
        console.log(userData);
        this.services.Updatemultipleshippingaddress(userData).subscribe(function (result) {
            _this.responseDataAddress = result;
            if (_this.responseDataAddress === 0) {
                _this.presentToast(_this.responseDataAddress);
            }
            else {
                console.log(_this.responseDataAddress);
                _this.presentToast('Your address has been updated successfully');
                // this.events.publish("updateSideMenu");
                _this.nav.navigateForward("multiple-shipping-address");
            }
        }, function (error) {
        });
    };
    UpdateShippingAddressPage.prototype.ProUpdate = function () {
        this.updatePro = this.formBuilder.group({
            address_detail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            shipping_first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            shipping_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            shipping_phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            shipping_address_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            shipping_address_2: [''],
            shipping_country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            shipping_state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            shipping_city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            shipping_zip_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
        });
    };
    UpdateShippingAddressPage.prototype.presentToast = function (msg) {
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
    UpdateShippingAddressPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    UpdateShippingAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-shipping-address',
            template: __webpack_require__(/*! ./update-shipping-address.page.html */ "./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.page.html"),
            styles: [__webpack_require__(/*! ./update-shipping-address.page.scss */ "./src/app/yesgenie/Pages/address-pages/update-shipping-address/update-shipping-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_7__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], UpdateShippingAddressPage);
    return UpdateShippingAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-address-pages-update-shipping-address-update-shipping-address-module.js.map