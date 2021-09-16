(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-address-pages-addresses-addresses-module"],{

/***/ "./src/app/yesgenie/Pages/address-pages/addresses/addresses.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/addresses/addresses.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddressesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPageModule", function() { return AddressesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addresses.page */ "./src/app/yesgenie/Pages/address-pages/addresses/addresses.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







// For Translation Language

var routes = [
    {
        path: '',
        component: _addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]
    }
];
var AddressesPageModule = /** @class */ (function () {
    function AddressesPageModule() {
    }
    AddressesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ],
            declarations: [_addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]]
        })
    ], AddressesPageModule);
    return AddressesPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/addresses/addresses.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/addresses/addresses.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" routerLink=\"/multiple-shipping-address\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\">Add Shipping Address</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge>{{services.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <!-- For Shipping Address -->\n  <!-- <p>\n    {{'Shipping Address'| translate }}\n  </p> -->\n\n  <form class=\"form\" [formGroup]=\"updatePro\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Address Location</ion-label>\n      <ion-input formControlName=\"address_detail\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input  formControlName=\"shipping_first_name\" value={{responseDatainfo?.username}} type=\"text\"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input formControlName=\"shipping_last_name\" value=\"\" type=\"text\" name=\"shipping_last_name\"></ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"shipping_email\" value={{responseDatainfo?.email}}  type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Phone Number</ion-label>\n      <ion-input formControlName=\"shipping_phone_number\" value={{responseDatainfo?.phone_number}} type=\"Number\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Address 1</ion-label>\n      <ion-input formControlName=\"shipping_address_1\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Address 2 (Optional)</ion-label>\n      <ion-input formControlName=\"shipping_address_2\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Country'|translate}}</ion-label>\n      <!-- <ion-input formControlName=\"shipping_country_id\" type=\"text\" name=\"shipping_country_id\" value=\"India\" readonly></ion-input> -->\n      <ion-select formControlName=\"shipping_country_id\" class=\"seloption ionselectborder\">\n        <ion-select-option value=\"India\">India</ion-select-option>\n       </ion-select> \n    </ion-item>\n\n\n      <ion-item>\n        <ion-label position=\"floating\">{{'State'|translate}}</ion-label>\n       <!-- <ion-input formControlName=\"shipping_state\" type=\"text\" value={{responseDatainfo?.shipping_state}} ></ion-input> -->\n  \n       <ion-select formControlName=\"shipping_state\"  class=\"seloption ionselectborder\">\n         <ion-select-option value=\"delhi\">Delhi</ion-select-option>\n         <ion-select-option value=\"haryana\">Haryana</ion-select-option>\n         <ion-select-option value=\"UP\">Uttar Pradesh</ion-select-option>\n       </ion-select> \n          </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Place</ion-label>\n      \n       <ion-input formControlName=\"shipping_city\" type=\"text\"></ion-input>\n\n       </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Zip Code</ion-label>\n      <ion-input formControlName=\"shipping_zip_code\" type=\"Number\" name=\"shipping_zip_code\"></ion-input>\n    </ion-item>\n  </form>\n  <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!updatePro.valid\" (click)=\"Addnewmultipleshippingaddress()\">\n    Save Changes\n  </ion-button>\n\n  <!-- For Billing Address -->\n  <!-- <p>\n    {{'Billing Address'| translate }}\n  </p> -->\n\n  <!-- <form>\n    <ion-item>\n      <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"shipping.first_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_lastname\" [(ngModel)]=\"shipping.last_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Compnay'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"company\" [(ngModel)]=\"shipping.company\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 1</ion-label>\n      <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"shipping.address_1\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Address'|translate}} 2</ion-label>\n      <ion-input type=\"text\" name=\"address2\" [(ngModel)]=\"shipping.address_2\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Country'|translate}}</ion-label>\n      <ion-select class=\"seloption ionselectborder\" (ionChange)=\"getallstate($event.detail.value)\">\n        <ion-select-option value=\"101\">India</ion-select-option>\n       </ion-select>\n          </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'State'|translate}}</ion-label>\n      <ion-select class=\"seloption ionselectborder\" (ionChange)=\"Citiesbystate($event.detail.value)\">\n        <ion-select-option *ngFor=\"let item of responseData\" value={{item.id}}>{{item.name}}</ion-select-option>\n       </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'City'|translate}}</ion-label>\n      <ion-select class=\"seloption ionselectborder\">\n        <ion-select-option *ngFor=\"let item of responseDataCity\" value={{item.id}}>{{item.name}}</ion-select-option>\n       </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Post code'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_postcode\" [(ngModel)]=\"shipping.postcode\" required></ion-input>\n    </ion-item>\n  </form>\n  <ion-button expand=\"full\">\n    {{'Update Billing'|translate}}\n  </ion-button> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/addresses/addresses.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/addresses/addresses.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content p {\n  font-size: 20px;\n  text-align: center;\n  margin-top: 16px !important;\n  margin-bottom: 10px !important; }\n  ion-content form ion-item ion-label {\n  color: gray; }\n  ion-content ion-button {\n  --color: white;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcHBsZS9Eb2N1bWVudHMveWVzZ2VuaWUvc3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9hZGRyZXNzLXBhZ2VzL2FkZHJlc3Nlcy9hZGRyZXNzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsYUFBUSxFQUFBO0VBSGhCO0lBS1ksZUFBZSxFQUFBO0VBTDNCO0lBU2dCLFlBQVksRUFBQTtFQVQ1QjtJQWNnQixlQUFlLEVBQUE7RUFkL0I7SUFpQmdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWSxFQUFBO0VBSzVCO0VBRVEsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7RUFMdEM7RUFVZ0IsV0FBVyxFQUFBO0VBVjNCO0VBZ0JRLGNBQVE7RUFDUixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9hZGRyZXNzLXBhZ2VzL2FkZHJlc3Nlcy9hZGRyZXNzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOmJsYWNrO1xuICAgICAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGl0bGV7XG4gICAgICAgICAgICBpb24taW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7ICAgICAgIFxuICAgIH1cbiAgICBmb3Jte1xuICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/address-pages/addresses/addresses.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/address-pages/addresses/addresses.page.ts ***!
  \**************************************************************************/
/*! exports provided: AddressesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesPage", function() { return AddressesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AddressesPage = /** @class */ (function () {
    function AddressesPage(loadingController, router, route, services, nav, menuCtrl, shared, config, translate, formBuilder, toastCtrl) {
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
        this.Personalinfo();
    }
    AddressesPage.prototype.ngOnInit = function () {
        this.ProUpdate();
    };
    AddressesPage.prototype.Personalinfo = function () {
        var _this = this;
        var userData = 'token=' + this.token;
        console.log(userData);
        this.services.Getpersonalinfo(userData).subscribe(function (result) {
            _this.responseDatainfo = result.response[0];
            console.log(_this.responseDatainfo);
            _this.shipping_state_user = _this.responseDatainfo.shipping_state;
            if (_this.responseDatainfo.Status === 0) {
                _this.presentToast(_this.responseDatainfo.Message);
            }
            else {
                //  console.log(this.responseData);
            }
        }, function (error) {
        });
    };
    // async selectCountryPage(value) {
    //   let modal = await this.modalCtrl.create({
    //     component: SelectCountryPage
    //   });
    //   return await modal.present();
    // }
    // async selectZonePage(value) {
    //   let modal = await this.modalCtrl.create({
    //     component: SelectZonesPage
    //   });
    //   return await modal.present();
    // }
    AddressesPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    AddressesPage.prototype.updateAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loadingElement;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: 'crescent',
                            duration: 2000
                        })];
                    case 1:
                        loadingElement = _a.sent();
                        return [4 /*yield*/, loadingElement.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddressesPage.prototype.ionViewWillEnter = function () {
    };
    AddressesPage.prototype.getallstate = function (state) {
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
    AddressesPage.prototype.Citiesbystate = function (cit) {
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
    AddressesPage.prototype.Addnewmultipleshippingaddress = function () {
        var _this = this;
        var userData = 'token=' + this.token + '&address_detail=' + this.updatePro.get('address_detail').value + '&shipping_first_name=' + this.updatePro.get('shipping_first_name').value + '&shipping_email=' + this.updatePro.get('shipping_email').value
            + '&shipping_phone_number=' + this.updatePro.get('shipping_phone_number').value + '&shipping_address_1=' + this.updatePro.get('shipping_address_1').value + '&shipping_address_2=' + this.updatePro.get('shipping_address_2').value
            + '&shipping_country_id=' + this.updatePro.get('shipping_country_id').value + '&shipping_state=' + this.updatePro.get('shipping_state').value + '&shipping_city=' + this.updatePro.get('shipping_city').value + '&shipping_zip_code=' + this.updatePro.get('shipping_zip_code').value;
        console.log(userData);
        this.services.Addnewmultipleshippingaddress(userData).subscribe(function (result) {
            _this.responseDataAddress = result;
            if (_this.responseDataAddress === 0) {
                _this.presentToast(_this.responseDataAddress);
            }
            else {
                console.log(_this.responseDataAddress);
                _this.presentToast('Address Added Successfully');
                // this.events.publish("updateSideMenu");
                _this.nav.navigateForward("multiple-shipping-address");
            }
        }, function (error) {
        });
    };
    AddressesPage.prototype.ProUpdate = function () {
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
    AddressesPage.prototype.presentToast = function (msg) {
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
    AddressesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addresses',
            template: __webpack_require__(/*! ./addresses.page.html */ "./src/app/yesgenie/Pages/address-pages/addresses/addresses.page.html"),
            styles: [__webpack_require__(/*! ./addresses.page.scss */ "./src/app/yesgenie/Pages/address-pages/addresses/addresses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_7__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], AddressesPage);
    return AddressesPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-address-pages-addresses-addresses-module.js.map